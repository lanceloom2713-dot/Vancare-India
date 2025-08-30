Subcategory:

"use client";

import { useState, useEffect, use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Coffee, Package, Pen, ShoppingBag } from "lucide-react";

// Subcategories with sub-subcategories (if any)
const subcategoriesWithChildren = {
	bags: {
		title: "Bags",
		children: [
			{ id: "bags", name: "Bags", slug: "bags", icon: ShoppingBag },
			{ id: "duffle-bags", name: "Duffle Bags", slug: "duffle-bags", icon: Package },
			{ id: "jute-bags", name: "Jute Bags", slug: "jute-bags", icon: ShoppingBag },
			{ id: "laptop-bags", name: "Laptop Bags", slug: "laptop-bags", icon: ShoppingBag },
			{ id: "side-bags", name: "Side Bags", slug: "side-bags", icon: ShoppingBag },
		],
	},
};

const subcategoryIdMap: { [key: string]: string } = {
	bags: "b9f41ce3-311d-469f-8835-192d60e506db",
	"duffle-bags": "2da45b64-16ce-4657-9848-0a05aa5ef519",
	"jute-bags": "81ff0c90-a0d7-41b4-b2dc-d3dcbf1be389",
	"laptop-bags": "ff3cd014-6a59-4a65-8203-602be76775a8",
	"side-bags": "647b9e7f-04ce-4fa6-8da2-71fc10cde616",
	bottles: "ed1c5d86-af5a-4f35-a6a6-e6486a0499c9",
	mugs: "6ca09247-5554-475e-8587-33cd0c9f1396",
	sippers: "9b7e0fd4-4cef-41c6-81ef-c72c37c141d1",
	tumblers: "83e60648-aab3-446f-88c9-fa852ecbffd8",
	"plastic-pens": "44012b0f-521a-42a4-a2d0-913bed141b0e",
	"metal-pens": "8f0057c9-9141-4b82-b3d9-5dda11f32294",
};

interface Product {
	id: number;
	imageUrl: string;
}

interface SubcategoryData {
	[key: string]: Product[] | null;
}

export default function SubcategoryPage({ params: paramsPromise }: { params: Promise<{ category: string; subcategory: string }> }) {
	const params = use(paramsPromise);
	const [fetchedProducts, setFetchedProducts] = useState<SubcategoryData>({});
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchSubcategoryData = async () => {
			const subcategorySlug = params.subcategory;
			const subcategoryId = subcategoryIdMap[subcategorySlug];

			setIsLoading(true);
			try {
				const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products/by-subcategory/${subcategoryId}`, {
					method: "GET",
					headers: { "Content-Type": "application/json" },
				});
				if (!response.ok) throw new Error("Network response was not ok");
				const data = await response.json();
				setFetchedProducts((prev) => ({
					...prev,
					[subcategorySlug]: data.products || [],
				}));
			} catch (error) {
				console.error(`Error fetching products for ${subcategorySlug}:`, error);
				setFetchedProducts((prev) => ({
					...prev,
					[subcategorySlug]: [],
				}));
			} finally {
				setIsLoading(false);
			}
		};

		if (!fetchedProducts[params.subcategory]) {
			fetchSubcategoryData();
		}
	}, [params.subcategory, fetchedProducts]);

	const subcategoryWithChildren = subcategoriesWithChildren[params.subcategory as keyof typeof subcategoriesWithChildren];
	const subcategoryTitle = subcategoryWithChildren?.title || params.subcategory;
	const productsToDisplay = fetchedProducts[params.subcategory];

	if (isLoading || !productsToDisplay) {
		return (
			<div className="min-h-screen bg-blue-50 flex items-center justify-center">
				<p className="text-blue-700">Loading products for {subcategoryTitle}...</p>
			</div>
		);
	}

	if (productsToDisplay.length === 0) {
		return (
			<div className="min-h-screen bg-blue-50 flex items-center justify-center">
				<p className="text-blue-700">No products found for this subcategory.</p>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-blue-50">
			{/* Header */}
			<div className="bg-white shadow-sm">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
					<div className="flex items-center gap-4">
						<Link href={`/categories/${params.category}`} className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
							<ArrowLeft className="h-5 w-5" />
							Back to {params.category}
						</Link>
					</div>
					<div className="mt-4">
						<h1 className="text-3xl font-bold text-blue-900">{subcategoryTitle}</h1>
					</div>
				</div>
			</div>

			{/* Products Grid */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{productsToDisplay.map((product) => {
						// console.log(product); // Debugging line to check product data
						return (
							<Link
								key={product.id}
								href={product.imageUrl || "/placeholder.svg"}
								target="_blank"
								className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border border-blue-100"
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
						);
					})}
				</div>
			</div>
		</div>
	);
}
