"use client";
import { useParams } from "next/navigation";

export default function ProductDetailPage() {
  const params = useParams();
  const { category, subcategory, product } = params;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Product Detail Page</h1>
      <p className="mt-4">Category: {category}</p>
      <p>Subcategory: {subcategory}</p>
      <p>Product Slug: {product}</p>
    </div>
  );
}

