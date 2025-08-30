"use client";

import { use, useEffect, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Product {
  id: number;
  name?: string;
  description?: string;
  imageUrl: string;
}

export default function ProductDetailPage({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}) {
  const params = use(paramsPromise);
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products/${params.id}`
        );
        if (!response.ok) throw new Error("Product not found");

        const data = await response.json();
        setProduct(data.product); // Assuming backend returns { product: {...} }
      } catch (error) {
        console.error(error);
        setProduct(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-blue-600">
        Loading product...
      </div>
    );
  }

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-6 flex items-center gap-4">
          <Link
            href={`/categories`}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
          >
            <ArrowLeft className="h-5 w-5" />
            Back
          </Link>
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex flex-col items-center">
            <Image
              src={product.imageUrl || "/placeholder.svg"}
              alt={product.name || "Product"}
              width={600}
              height={600}
              className="rounded-xl object-contain max-h-[600px]"
            />
            <h1 className="text-2xl font-bold mt-6 text-blue-900">
              {product.name}
            </h1>
            {product.description && (
              <p className="mt-4 text-gray-700">{product.description}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
