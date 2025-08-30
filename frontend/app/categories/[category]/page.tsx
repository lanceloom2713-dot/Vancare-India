"use client";
import { useState, useEffect, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShoppingBag, Coffee, Pen, Package } from "lucide-react";

// Categories with subcategories
const categoriesWithSubcategories = {
  bags: {
    title: "Bags",
    subcategories: [
      { id: "bags", name: "Bags", slug: "bags", icon: ShoppingBag },
      { id: "duffle-bags", name: "Duffle Bags", slug: "duffle-bags", icon: Package },
      { id: "jute-bags", name: "Jute Bags", slug: "jute-bags", icon: ShoppingBag },
      { id: "laptop-bags", name: "Laptop Bags", slug: "laptop-bags", icon: ShoppingBag },
      { id: "side-bags", name: "Side Bags", slug: "side-bags", icon: ShoppingBag },
    ],
  },
  "bottle-mugs-sipper": {
    title: "Bottle, Mugs & Sipper",
    subcategories: [
      { id: "bottle", name: "Bottles", slug: "bottle", icon: Coffee },
      { id: "mugs", name: "Mugs", slug: "mugs", icon: Coffee },
      { id: "sippers", name: "Sippers", slug: "sippers", icon: Coffee },
      { id: "tumblers", name: "Tumblers", slug: "tumblers", icon: Coffee },
    ],
  },
  "executive-pens": {
    title: "Executive pens",
    subcategories: [
      { id: "plastic-pens", name: "Plastic Pens", slug: "plastic-pens", icon: Pen },
      { id: "metal-pens", name: "Metal Pens", slug: "metal-pens", icon: Pen },
    ],
  },
};

// ✅ Category ID map (from your Excel)
const categoryIdMap: { [key: string]: string } = {
  "speaker": "04d79c61-faca-4747-9954-74c514909f74",
  "pen-stand": "1ea4b924-6ea3-48fd-a870-d2dc94335bff",
  "table-top": "2d37b18b-0573-4009-afe4-3f0ebf2f0a7e",
  "difuser": "32d4fd21-9195-4f4a-b150-12d37df439a9",
  "clocks": "3907361c-5f54-44ef-a10c-f7551e08eb36",
  "card-holder": "39c8cc2b-67a3-4894-b6e8-90ea6080d8f7",
  "candles": "61407af9-d8de-4a3e-bf32-fd25e50d09ae",
  "brass-and-copper": "64206b45-edf3-432a-bf3b-e51564ae5286",
  "permium-high-end": "6bfee080-51bf-4bfc-b18f-16a77379350c",
  "bar-sets": "747d8629-c84d-480f-85af-58172e2dd42e",
  "electronic-gadgets": "800f2b8a-ca6d-45b5-aeec-316155857fba",
  "lunch-boxes": "811434c6-6fd5-453b-a2a9-6c5967d4db3b",
  "joining-kits": "90e71fe5-4106-472f-87ce-b5e6ef23fa86",
  "traophies-and-mementos": "ab528481-b16f-46cc-a0d0-721c4312653f",
  "metal-god-figures": "b1362612-05ee-4f25-9e1c-ef1ed1ca95a3",
  "showpieces": "b1adae1c-d7a1-4c1b-acd9-90cb857c33f8",
  "pens": "bb11c59b-62c2-4e10-ae16-01d54220d8de",
  "kids-return-gift": "be06e51e-5f7f-413b-9a23-7b8461e8e689",
  "bags": "cbfb30b9-33b1-4db0-a9cc-c6388359e230",
  "diaries": "edc0f6d8-3d13-47ad-b456-3c1dcf15f1b3",
  "bottle-mugs-sipper": "f98be9f9-6a7c-4c12-86aa-66fd3e08b6dc",
  "keychain": "2c581307-099f-4f12-9d8f-74910bd77e2d",
};

interface Product {
  id: number | string;
  imageUrl?: string;
  image?: string;
  url?: string;
}

interface CategoryData {
  [key: string]: Product[] | null;
}

export default function CategoryPage({
  params: paramsPromise,
}: {
  params: Promise<{ category: string }>;
}) {
  const params = use(paramsPromise);
  const [fetchedProducts, setFetchedProducts] = useState<CategoryData>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCategoryData = async () => {
      const categorySlug = params.category;
      const categoryId = categoryIdMap[categorySlug];

      if (
        categoriesWithSubcategories[
          categorySlug as keyof typeof categoriesWithSubcategories
        ] ||
        !categoryId
      ) {
        return;
      }

      setIsLoading(true);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products/by-category/${categoryId}`,
          { method: "GET", headers: { "Content-Type": "application/json" } }
        );

        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();

        setFetchedProducts((prev) => ({ ...prev, [categorySlug]: data }));
      } catch (error) {
        console.error(`Error fetching products for ${categorySlug}:`, error);
        setFetchedProducts((prev) => ({ ...prev, [categorySlug]: [] }));
      } finally {
        setIsLoading(false);
      }
    };

    if (!fetchedProducts[params.category]) {
      fetchCategoryData();
    }
  }, [params.category, fetchedProducts]);

  const categoryWithSubs =
    categoriesWithSubcategories[params.category as keyof typeof categoriesWithSubcategories];
  const categoryTitle = categoryWithSubs?.title || params.category;

  if (categoryWithSubs) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                <ArrowLeft className="h-5 w-5" />
                Back to Home
              </Link>
            </div>
            <div className="mt-4">
              <h1 className="text-3xl font-bold text-gray-900">{categoryWithSubs.title}</h1>
              <p className="text-gray-600 mt-2">Choose a subcategory to explore our products</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryWithSubs.subcategories.map((subcategory) => {
              const IconComponent = subcategory.icon;
              return (
                <Link
                  key={subcategory.id}
                  href={`/categories/${params.category}/${subcategory.slug}`}
                  className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{subcategory.name}</h3>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  const productsToDisplay = fetchedProducts[params.category];

  if (isLoading || !productsToDisplay) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p>Loading products for {categoryTitle}...</p>
      </div>
    );
  }

  if (productsToDisplay.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p>No products found for this category.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              <ArrowLeft className="h-5 w-5" />
              Back to Home
            </Link>
          </div>
          <div className="mt-4">
            <h1 className="text-3xl font-bold text-gray-900">{categoryTitle}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productsToDisplay.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-square">
                <Image
                  src={product.imageUrl || product.image || product.url || "/placeholder.svg"}
                  alt="Product"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
