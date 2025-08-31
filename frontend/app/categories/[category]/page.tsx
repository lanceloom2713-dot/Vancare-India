"use client";
import { useState, useEffect, use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Subcategory Images Mapping
const subcategoryImages: { [key: string]: string } = {
  bags: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2bii_0R-uVQ0NY5BWEzGvpiLw6NNhOPRmww&s",
  "duffle-bags": "https://i.etsystatic.com/11538019/r/il/0b2160/1996916408/il_fullxfull.1996916408_7qe9.jpg",
  "jute-bags": "https://ahavahcrafts.com/cdn/shop/files/JuteBagAhavah01-1.png?v=1706502604",
  "laptop-bags": "https://www.yourprint.in/new-admin-ajax.php?action=resize_outer_image&cfcache=all&url=med-s3/yP-mplace/Bags/Hand_Bags/YPB09NDTW8SP_1.jpg&resizeTo=600",
  "side-bags": "https://m.media-amazon.com/images/I/41CGa9tU8sL._UY1100_.jpg",
  bottles: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRO7-0FTwOkuk5gzq71mKIVSpBp-GkVQklX7QxXY0DjFIftuTWLw01SyFNMiRHRy-c08BE9qmiLqekrS36wQazriDvxxoSCX0j3g-LSFEUavfQES-Of-fFQRRQ",
  mugs: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRgWtM49zFUqcIssamup-b4JpCm_oP41hZnTmhrzYrvV_Qzy8aJvKB6dKXIXLMMff5KLn1k4yQgmCz9Y3gUuUmRaV3J6qu0MDJikY6arAlX",
  sippers: "https://m.media-amazon.com/images/I/71DukP1bCPL.jpg",
  tumblers: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQknOCrtymTJM9h8H3m8QOnDn7jCUjz6CqLRw&s",
  "plastic-pens": "https://5.imimg.com/data5/SELLER/Default/2021/9/YG/AY/QP/9808978/archer-2-pen-hq-500x500.jpg",
  "metal-pens": "https://m.media-amazon.com/images/I/61t2Wb256BL.jpg",
};

// Categories with subcategories
const categoriesWithSubcategories = {
  bags: {
    title: "Bags",
    subcategories: [
      { id: "bags", name: "Bags", slug: "bags" },
      { id: "duffle-bags", name: "Duffle Bags", slug: "duffle-bags" },
      { id: "jute-bags", name: "Jute Bags", slug: "jute-bags" },
      { id: "laptop-bags", name: "Laptop Bags", slug: "laptop-bags" },
      { id: "side-bags", name: "Side Bags", slug: "side-bags" },
    ],
  },
  "bottle-mugs-and-sippers": {
    title: "Bottle, Mugs & Sippers",
    subcategories: [
      { id: "bottles", name: "Bottles", slug: "bottles" },
      { id: "mugs", name: "Mugs", slug: "mugs" },
      { id: "sippers", name: "Sippers", slug: "sippers" },
      { id: "tumblers", name: "Tumblers", slug: "tumblers" },
    ],
  },
  "executive-pens": {
    title: "Executive Pens",
    subcategories: [
      { id: "plastic-pens", name: "Plastic Pens", slug: "plastic-pens" },
      { id: "metal-pens", name: "Metal Pens", slug: "metal-pens" },
    ],
  },
};

// Category ID Map
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
  "pen-stand": "1ea4b924-6ea3-48fd-a870-d2dc94335bff",
  "electronic-gadgets": "800f2b8a-ca6d-45b5-aeec-316155857fba",
  "kids-return-gifts": "be06e51e-5f7f-413b-9a23-7b8461e8e689",
  showpieces: "b1adae1c-d7a1-4c1b-acd9-90cb857c33f8",
  "premium-and-high-end-gifts": "6bfee080-51bf-4bfc-b18f-16a77379350c",
  diffusers: "32d4fd21-9195-4f4a-b150-12d37df439a9",
  speakers: "04d79c61-faca-4747-9954-74c514909f74",
  "bar-sets": "747d8629-c84d-480f-85af-58172e2dd42e",
};

// Interfaces
interface Product {
  id: number;
  imageUrl: string;
}
interface CategoryData {
  [key: string]: Product[] | null;
}

export default function CategoryPage({ params: paramsPromise }: { params: Promise<{ category: string }> }) {
  const params = use(paramsPromise);
  const [fetchedProducts, setFetchedProducts] = useState<CategoryData>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCategoryData = async () => {
      const categorySlug = params.category;
      const categoryId = categoryIdMap[categorySlug];

      if (categoriesWithSubcategories[categorySlug as keyof typeof categoriesWithSubcategories] || !categoryId) {
        return;
      }

      setIsLoading(true);
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products/by-category/${categoryId}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
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

  const categoryWithSubs = categoriesWithSubcategories[params.category as keyof typeof categoriesWithSubcategories];
  const categoryTitle = categoryWithSubs?.title || params.category;

  if (categoryWithSubs) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
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

        {/* Subcategories Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryWithSubs.subcategories.map((subcategory) => {
              const imageUrl = subcategoryImages[subcategory.id];
              return (
                <Link
                  key={subcategory.id}
                  href={`/categories/${params.category}/${subcategory.slug}`}
                  className="bg-white border-2 border-[#1F459D] rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
                >
                  {/* 🔹 Image is now round with NO border */}
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 shadow-md">
                    <Image
                      src={imageUrl || "/placeholder.svg"}
                      alt={subcategory.name}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {subcategory.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">Click to explore options</p>
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
      {/* Header */}
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

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productsToDisplay.map((product) => (
            <Link
              key={product.id}
              href={product.imageUrl || "/placeholder.svg"}
              target="_blank"
              className="bg-white border-2 border-[#1F459D] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="aspect-square">
                <Image
                  src={product.imageUrl || "/placeholder.svg"}
                  alt="Product"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
