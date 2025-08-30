"use client";
import Link from "next/link";
import Image from "next/image";

// Category data (replace these URLs with your actual category images)
const categories: {
	name: string;
	href: string;
	image: string;
}[] = [
	{ name: "Bags", href: "/categories/bags", image: "https://m.media-amazon.com/images/I/516WDvolQbL._UY1100_.jpg" },
	{ name: "Candles", href: "/categories/candles", image: "https://m.media-amazon.com/images/I/61vx5V2mslL._SL1500_.jpg" },
	{ name: "Awards & Trophies", href: "/categories/awards-and-trophies", image: "https://m.media-amazon.com/images/I/61mfQpKUp3L._SL1500_.jpg" },
	{ name: "Metal God figures", href: "/categories/metal-god-figures", image: "https://m.media-amazon.com/images/I/81D9OaQKptL._SL1500_.jpg" },
	{ name: "Brass & Copper items", href: "/categories/brass-and-copper-items", image: "https://m.media-amazon.com/images/I/81wvfSEK8bL._SL1500_.jpg" },
	{ name: "Bottle, Mugs & Sippers", href: "/categories/bottle-mugs-and-sippers", image: "https://m.media-amazon.com/images/I/71QJ4Hd0UdL._SL1500_.jpg" },
	{ name: "Diaries", href: "/categories/diaries", image: "https://m.media-amazon.com/images/I/81k1GmRcpzL._SL1500_.jpg" },
	{ name: "Keychains", href: "/categories/keychains", image: "https://m.media-amazon.com/images/I/81vSsuLQ2fL._SL1500_.jpg" },
	{ name: "Executive pens", href: "/categories/executive-pens", image: "https://m.media-amazon.com/images/I/71h5K1uKk3L._SL1500_.jpg" },
	{ name: "Card holders", href: "/categories/card-holders", image: "https://m.media-amazon.com/images/I/81tF9cF7L7L._SL1500_.jpg" },
	{ name: "Joining kits", href: "/categories/joining-kits", image: "https://m.media-amazon.com/images/I/81N7Vx6-uhL._SL1500_.jpg" },
	{ name: "Lunch box", href: "/categories/lunch-box", image: "https://m.media-amazon.com/images/I/81Z0aElBTvL._SL1500_.jpg" },
	{ name: "Clocks", href: "/categories/clocks", image: "https://m.media-amazon.com/images/I/71bHfB7yJmL._SL1500_.jpg" },
	{ name: "Pen stand", href: "/categories/pen-stand", image: "https://m.media-amazon.com/images/I/81eNfHj2SJL._SL1500_.jpg" },
	{ name: "Electronic gadgets", href: "/categories/electronic-gadgets", image: "https://m.media-amazon.com/images/I/71s+H5yAiUL._SL1500_.jpg" },
	{ name: "Kids return gifts", href: "/categories/kids-return-gifts", image: "https://m.media-amazon.com/images/I/71xU+1UgBJL._SL1500_.jpg" },
	{ name: "Showpieces", href: "/categories/showpieces", image: "https://m.media-amazon.com/images/I/81XGoDdR6yL._SL1500_.jpg" },
	{ name: "Premium & High end gifts", href: "/categories/premium-and-high-end-gifts", image: "https://m.media-amazon.com/images/I/81u6WzGZp6L._SL1500_.jpg" },
	{ name: "Diffusers", href: "/categories/diffusers", image: "https://m.media-amazon.com/images/I/71t0OlE27bL._SL1500_.jpg" },
	{ name: "Speakers", href: "/categories/speakers", image: "https://m.media-amazon.com/images/I/81uhjM8ZpQL._SL1500_.jpg" },
	{ name: "Bar sets", href: "/categories/bar-sets", image: "https://m.media-amazon.com/images/I/81ZxM+W63BL._SL1500_.jpg" },
];

export default function CategoriesGrid() {
	return (
		<div id="categories" className="container mx-auto px-6 py-10">
			<h2 className="text-2xl font-bold text-center mb-10">Specialized Categories</h2>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{categories.map((category, index) => {
					// Row & column calculation for chessboard effect
					const cols = 4;
					const row = Math.floor(index / cols);
					const col = index % cols;
					const isDark = (row + col) % 2 === 0;

					// Custom colors
					const darkBlue = "#1f459d";
					const lightBlue = "#8ba9e6";

					const bgColor = isDark ? darkBlue : lightBlue;
					const hoverColor = isDark ? "#2a56b5" : "#a6bdf0"; // brighter on hover

					return (
						<Link key={index} href={category.href} className="group block">
							<div
								className="rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
								style={{
									backgroundColor: bgColor,
									color: isDark ? "#fff" : "#000",
									transition: "all 0.3s ease",
								}}
								onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = hoverColor)}
								onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = bgColor)}
							>
								{/* Category Image */}
								<div className="flex justify-center mb-4">
									<Image
										src={category.image}
										alt={category.name}
										width={80}
										height={80}
										className="rounded-full object-cover border-2 border-white shadow-md"
									/>
								</div>

								<h3 className="font-semibold text-sm leading-tight">{category.name}</h3>
								<p className="text-xs mt-2">Click to explore options</p>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
