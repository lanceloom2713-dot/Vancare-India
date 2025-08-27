require("dotenv").config();
const express = require("express");
const { createClient } = require("@supabase/supabase-js");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors()); //for all

app.use(
	cors({
		origin: ["http://localhost:3000", "https://127.0.0.1:3000"], // your frontend domain
		credentials: true,
	})
);

// Supabase client
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Get products directly under a category (no subcategory)
app.get("/api/products/by-category/:categoryId", async (req, res) => {
	const categoryId = req.params.categoryId;

	const { data, error } = await supabase.from("products").select("image_url").eq("category_id", categoryId).is("subcategory_id", null);

	if (error) {
		return res.status(500).json({ error: "Failed to fetch products by category" });
	}

	const newData = data.map((item, index) => ({
		id: index + 1,
		imageUrl: item.image_url,
	}));

	return res.json({ products: newData });

	// const urls = data.map((p) => p.image_url);
	// return res.json(urls);
});

// Get products by subcategory
app.get("/api/products/by-subcategory/:subcategoryId", async (req, res) => {
	const subcategoryId = req.params.subcategoryId;

	const { data, error } = await supabase.from("products").select("image_url").eq("subcategory_id", subcategoryId);

	if (error) {
		return res.status(500).json({ error: "Failed to fetch products by subcategory" });
	}

	const newData = data.map((item, index) => ({
		id: index + 1,
		imageUrl: item.image_url,
	}));

	return res.json({ products: newData });

	// const urls = data.map((p) => p.image_url);
	// return res.json(urls);
});

// Get subcategories under a category
app.get("/api/subcategories/:categoryId", async (req, res) => {
	const categoryId = req.params.categoryId;

	const { data, error } = await supabase.from("subcategories").select("id, name").eq("category_id", categoryId);

	if (error) {
		return res.status(500).json({ error: "Failed to fetch subcategories" });
	}

	return res.json(data);
});

// Start the server
app.listen(PORT, () => {
	console.log(`🚀 Server running on port ${PORT}`);
});
