require("dotenv").config();
const express = require("express");
const { createClient } = require("@supabase/supabase-js");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

// CORS setup
app.use(
	cors({
		origin: [
			process.env.FRONTEND_URL,
			"http://localhost:3000",
			"https://127.0.0.1:3000",
		],
		credentials: true,
	})
);

// Supabase client
const supabase = createClient(
	process.env.SUPABASE_URL,
	process.env.SUPABASE_KEY
);

// ==============================
// 📌 ROUTES
// ==============================

// Get products directly under a category (no subcategory)
app.get("/api/products/by-category/:categoryId", async (req, res) => {
	const categoryId = req.params.categoryId;

	const { data, error } = await supabase
		.from("products")
		.select("id, name, description, image_url")
		.eq("category_id", categoryId)
		.is("subcategory_id", null);

	if (error) {
		console.error(error);
		return res.status(500).json({ error: "Failed to fetch products by category" });
	}

	const newData = data.map((item) => ({
		id: item.id,
		name: item.name,
		description: item.description,
		imageUrl: item.image_url,
	}));

	return res.json({ products: newData });
});

// Get products by subcategory
app.get("/api/products/by-subcategory/:subcategoryId", async (req, res) => {
	const subcategoryId = req.params.subcategoryId;

	const { data, error } = await supabase
		.from("products")
		.select("id, name, description, image_url")
		.eq("subcategory_id", subcategoryId);

	if (error) {
		console.error(error);
		return res.status(500).json({ error: "Failed to fetch products by subcategory" });
	}

	const newData = data.map((item) => ({
		id: item.id,
		name: item.name,
		description: item.description,
		imageUrl: item.image_url,
	}));

	return res.json({ products: newData });
});

// Get subcategories under a category
app.get("/api/subcategories/:categoryId", async (req, res) => {
	const categoryId = req.params.categoryId;

	const { data, error } = await supabase
		.from("subcategories")
		.select("id, name")
		.eq("category_id", categoryId);

	if (error) {
		console.error(error);
		return res.status(500).json({ error: "Failed to fetch subcategories" });
	}

	return res.json(data);
});

// ✅ Get product details by ID
app.get("/api/products/:id", async (req, res) => {
	const productId = req.params.id;

	const { data, error } = await supabase
		.from("products")
		.select("id, name, description, image_url")
		.eq("id", productId)
		.single();

	if (error) {
		console.error(error);
		return res.status(500).json({ error: "Failed to fetch product details" });
	}

	if (!data) {
		return res.status(404).json({ error: "Product not found" });
	}

	return res.json({
		product: {
			id: data.id,
			name: data.name,
			description: data.description,
			imageUrl: data.image_url,
		},
	});
});

// ==============================
// 🚀 START SERVER
// ==============================
app.listen(PORT, () => {
	console.log(`🚀 Server running on port ${PORT}`);
});
