require("dotenv").config();
const express = require("express");
const { createClient } = require("@supabase/supabase-js");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;

// ✅ Allow CORS
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

// ✅ Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

/**
 * -------------------------------
 *  API Routes
 * -------------------------------
 */

// ✅ Get products directly under a category (no subcategory)
app.get("/api/products/by-category/:categoryId", async (req, res) => {
  const categoryId = req.params.categoryId;

  const { data, error } = await supabase
    .from("products")
    .select("id, image_url")
    .eq("category_id", categoryId)
    .is("subcategory_id", null);

  if (error) {
    console.error("Error fetching by category:", error.message);
    return res
      .status(500)
      .json({ error: "Failed to fetch products by category" });
  }

  // ✅ return objects (not just strings)
  const products = data.map((p) => ({
    id: p.id,
    imageUrl: p.image_url,
  }));

  return res.json(products);
});

// ✅ Get products by subcategory
app.get("/api/products/by-subcategory/:subcategoryId", async (req, res) => {
  const subcategoryId = req.params.subcategoryId;

  const { data, error } = await supabase
    .from("products")
    .select("id, image_url")
    .eq("subcategory_id", subcategoryId);

  if (error) {
    console.error("Error fetching by subcategory:", error.message);
    return res
      .status(500)
      .json({ error: "Failed to fetch products by subcategory" });
  }

  const products = data.map((p) => ({
    id: p.id,
    imageUrl: p.image_url,
  }));

  return res.json(products);
});

// ✅ Get subcategories under a category
app.get("/api/subcategories/:categoryId", async (req, res) => {
  const categoryId = req.params.categoryId;

  const { data, error } = await supabase
    .from("subcategories")
    .select("id, name")
    .eq("category_id", categoryId);

  if (error) {
    console.error("Error fetching subcategories:", error.message);
    return res.status(500).json({ error: "Failed to fetch subcategories" });
  }

  return res.json(data);
});

/**
 * -------------------------------
 *  Start Server
 * -------------------------------
 */
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
