"use client";
import Link from "next/link";
import { IconType } from "react-icons";

import {
	FaCrown,
	FaBookOpen,
	FaPenFancy,
	FaKey,
	FaAddressCard,
	FaBox,
	FaClock,
	FaGift,
	FaTrophy,
	FaUtensils,
	FaLightbulb,
	FaMugHot,
	FaTools,
	FaShoppingBag,
	FaHome,
	FaWaveSquare,
	FaVolumeUp,
	FaWineGlassAlt,
} from "react-icons/fa";

// Category data
const categories: {
	name: string;
	href: string;
	icon: IconType;
}[] = [
	{ name: "Bags", href: "/categories/bags", icon: FaShoppingBag },
	{ name: "Candles", href: "/categories/candles", icon: FaLightbulb },
	{ name: "Awards & Trophies", href: "/categories/awards-and-trophies", icon: FaTrophy },
	{ name: "Metal God figures", href: "/categories/metal-god-figures", icon: FaCrown },
	{ name: "Brass & Copper items", href: "/categories/brass-and-copper-items", icon: FaTools },
	{ name: "Bottle, Mugs & Sippers", href: "/categories/bottle-mugs-and-sippers", icon: FaMugHot },
	{ name: "Diaries", href: "/categories/diaries", icon: FaBookOpen },
	{ name: "Keychains", href: "/categories/keychains", icon: FaKey },
	{ name: "Executive pens", href: "/categories/executive-pens", icon: FaPenFancy },
	{ name: "Card holders", href: "/categories/card-holders", icon: FaAddressCard },
	{ name: "Joining kits", href: "/categories/joining-kits", icon: FaBox },
	{ name: "Lunch box", href: "/categories/lunch-box", icon: FaUtensils },
	{ name: "Clocks", href: "/categories/clocks", icon: FaClock },
	{ name: "Pen stand", href: "/categories/pen-stand", icon: FaPenFancy },
	{ name: "Electronic gadgets", href: "/categories/electronic-gadgets", icon: FaTools },
	{ name: "Kids return gifts", href: "/categories/kids-return-gifts", icon: FaGift },
	{ name: "Showpieces", href: "/categories/showpieces", icon: FaHome },
	{ name: "Premium & High end gifts", href: "/categories/premium-and-high-end-gifts", icon: FaGift },
	{ name: "Diffusers", href: "/categories/diffusers", icon: FaWaveSquare },
	{ name: "Speakers", href: "/categories/speakers", icon: FaVolumeUp },
	{ name: "Bar sets", href: "/categories/bar-sets", icon: FaWineGlassAlt },
];

export default function CategoriesGrid() {
	return (
		<div className="container mx-auto px-6 py-10">
			<h2 className="text-2xl font-bold text-center mb-10">Specialized Categories</h2>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{categories.map((category, index) => {
					// Explicitly cast the icon so it accepts className
					const IconComponent = category.icon as React.ComponentType<{ className?: string }>;

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
								<div className="flex justify-center mb-4">
									<IconComponent
										className={`h-10 w-10 ${
											isDark ? "text-white" : "text-black"
										} group-hover:scale-110 transition-transform duration-200`}
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
