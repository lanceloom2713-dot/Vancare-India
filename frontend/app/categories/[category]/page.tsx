"use client";
import { useState, useEffect, use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Categories with subcategories (now using imageUrl instead of icons)
const categoriesWithSubcategories = {
  bags: {
    title: "Bags",
    subcategories: [
      {
        id: "bags",
        name: "Bags",
        slug: "bags",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2bii_0R-uVQ0NY5BWEzGvpiLw6NNhOPRmww&s",
      },
      {
        id: "duffle-bags",
        name: "Duffle Bags",
        slug: "duffle-bags",
        imageUrl:
          "https://i.etsystatic.com/11538019/r/il/0b2160/1996916408/il_fullxfull.1996916408_7qe9.jpg",
      },
      {
        id: "jute-bags",
        name: "Jute Bags",
        slug: "jute-bags",
        imageUrl:
          "https://ahavahcrafts.com/cdn/shop/files/JuteBagAhavah01-1.png?v=1706502604",
      },
      {
        id: "laptop-bags",
        name: "Laptop Bags",
        slug: "laptop-bags",
        imageUrl:
          "https://m.media-amazon.com/images/I/41CGa9tU8sL._UY1100_.jpg",
      },
      {
        id: "side-bags",
        name: "Side Bags",
        slug: "side-bags",
        imageUrl:
          "https://www.yourprint.in/new-admin-ajax.php?action=resize_outer_image&cfcache=all&url=med-s3/yP-mplace/Bags/Hand_Bags/YPB09NDTW8SP_1.jpg&resizeTo=600",
      },
    ],
  },
  "bottle-mugs-and-sippers": {
    title: "Bottle, Mugs & Sippers",
    subcategories: [
      {
        id: "bottles",
        name: "Bottles",
        slug: "bottles",
        imageUrl:
          "https://m.media-amazon.com/images/I/61aXobD-5dL._AC_SL1500_.jpg",
      },
      {
        id: "mugs",
        name: "Mugs",
        slug: "mugs",
        imageUrl:
          "https://m.media-amazon.com/images/I/71KwW1WQJvL._AC_SL1500_.jpg",
      },
      {
        id: "sippers",
        name: "Sippers",
        slug: "sippers",
        imageUrl:
          "https://m.media-amazon.com/images/I/71bdh2M7CrL._AC_SL1500_.jpg",
      },
      {
        id: "tumblers",
        name: "Tumblers",
        slug: "tumblers",
        imageUrl:
          "https://m.media-amazon.com/images/I/81yH1s0b9PL._AC_SL1500_.jpg",
      },
    ],
  },
  "executive-pens": {
    title: "Executive pens",
    subcategories: [
      {
        id: "plastic-pens",
        name: "Plastic Pens",
        slug: "plastic-pens",
        imageUrl:
          "https://m.media-amazon.com/images/I/61EmTcY3KUL._AC_SL1500_.jpg",
      },
      {
        id: "metal-pens",
        name: "Metal Pens",
        slug: "metal-pens",
        imageUrl:
          "https://m.media-amazon.com/images/I/71nGyU9Pu6L._AC_SL1500_.jpg",
      },
    ],
  },
};

// A mapping of category slugs to their API IDs.
const categoryIdMap: { [key: string]: string } = {
  candles: "61407af9-d8de-4a3e-bf32-fd25e50d09ae",
  "awards-and-trophies": "ab528481-b16f-46cc-a0d0-721c4312653f",
  "metal-god-figures": "b1362612-05ee-4f25-9e1c-ef1ed1ca95a3",
  "brass-and-copper-items": "64206b45-edf3-432a-bf3b-e51564ae5286",
  diaries: "edc0f6d8-3d13-47ad-b456-3c1dcf15f1b3",
  keychains: "2c581307-099f-4f12-9d8f-74910bd77e2d",
  "card-holders": "39c8cc2b-67a3-4894-b6e8-90ea6080d8f7",
  "joining-kits": "90e71fe5-4106-472f-87ce-b5e6ef23fa86",
  "lunch-box": "811434c6-6fd5-453b-a2a9-6c5967d4db3b",
  clocks: "3907361c-5f54-44ef-a10c-f7551e08eb36",
  "pen-stand": "bb11c59b-62c2-4e10-ae16-01d54220d8de",
  "electronic-gadgets": "800f2b8a-ca6d-45b5-aeec-316155857fba",
  "kids-return-gifts": "be06e51e-5f7f-413b-9a23-7b8461e8e689",
  showpieces: "b1adae1c-d7a1-4c1b-acd9-90cb857c33f8",
  "premium-and-high-end-gifts": "6bfee080-51bf-4bfc-b18f-16a77379350c",
  diffusers: "32d4fd21-9195-4f4a-b150-12d37df439a9",
  speakers: "04d79c61-faca-4747-9954-74c514909f74",
  "bar-sets": "747d8629-c84d-480f-85af-58172e2dd42e",
};

// Interface for product data
interface Product {
  id: number;
  imageUrl: string;
}

// Interface for the fetched data state
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

      // If category has subcategories or no API ID, don't fetch
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
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setFetchedProducts((prev) => ({
          ...prev,
          [categorySlug]: data.products || [],
        }));
      } catch (error) {
        console.error(`Error fetching products for ${categorySlug}:`, error);
        setFetchedProducts((prev) => ({
          ...prev,
          [categorySlug]: [],
        }));
      } finally {
        setIsLoading(false);
      }
    };

    if (!fetchedProducts[params.category]) {
      fetchCategoryData();
    }
  }, [params.category, fetchedProducts]);

  const categoryWithSubs =
    categoriesWithSubcategories[
      params.category as keyof typeof categoriesWithSubcategories
    ];
  const categoryTitle = categoryWithSubs?.title || params.category;

  if (categoryWithSubs) {
    // Subcategory selection page with circular images
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
              >
                <ArrowLeft className="h-5 w-5" />
                Back to Home
              </Link>
            </div>
            <div className="mt-4">
              <h1 className="text-3xl font-bold text-gray-900">
                {categoryWithSubs.title}
              </h1>
              <p className="text-gray-600 mt-2">
                Choose a subcategory to explore our products
              </p>
            </div>
          </div>
        </div>

        {/* Subcategories Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryWithSubs.subcategories.map((subcategory) => (
              <Link
                key={subcategory.id}
                href={`/categories/${params.category}/${subcategory.slug}`}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
              >
                {/* Circle Image */}
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={subcategory.imageUrl}
                    alt={subcategory.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {subcategory.name}
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  Click to explore options
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const productsToDisplay = fetchedProducts[params.category];

  if (isLoading || !productsToDisplay) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justif
