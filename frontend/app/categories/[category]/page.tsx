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

// ✅ Category → ID mapping (from your Excel)
const categoryIdMap: Record<string, number> = {
  "bags": 101,
  "candles": 102,
  "awards-and-trophies": 103,
  "metal-god-figures": 104,
  "brass-and-copper-items": 105,
  "bottle-mugs-and-sippers": 106,
  "diaries": 107,
  "keychains": 108,
  "executive-pens": 109,
  "card-holders": 110,
  "joining-kits": 111,
  "lunch-box": 112,
  "clocks": 113,
  "pen-stand": 114,
  "electronic-gadgets": 115,
  "kids-return-gifts": 116,
  "showpieces": 117,
  "premium-and-high-end-gifts": 118,
  "diffusers": 119,
  "speakers": 120,
  "bar-sets": 121,
};

// Category data
const categories: {
  name: string;
  slug: string;
  icon: IconType;
}[] = [
  { name: "Bags", slug: "bags", icon: FaShoppingBag },
  { name: "Candles", slug: "candles", icon: FaLightbulb },
  { name: "Awards & Trophies", slug: "awards-and-trophies", icon: FaTrophy },
  { name: "Metal God figures", slug: "metal-god-figures", icon: FaCrown },
  { name: "Brass & Copper items", slug: "brass-and-copper-items", icon: FaTools },
  { name: "Bottle, Mugs & Sippers", slug: "bottle-mugs-and-sippers", icon: FaMugHot },
  { name: "Diaries", slug: "diaries", icon: FaBookOpen },
  { name: "Keychains", slug: "keychains", icon: FaKey },
  { name: "Executive pens", slug: "executive-pens", icon: FaPenFancy },
  { name: "Card holders", slug: "card-holders", icon: FaAddressCard },
  { name: "Joining kits", slug: "joining-kits", icon: FaBox },
  { name: "Lunch box", slug: "lunch-box", icon: FaUtensils },
  { name: "Clocks", slug: "clocks", icon: FaClock },
  { name: "Pen stand", slug: "pen-stand", icon: FaPenFancy },
  { name: "Electronic gadgets", slug: "electronic-gadgets", icon: FaTools },
  { name: "Kids return gifts", slug: "kids-return-gifts", icon: FaGift },
  { name: "Showpieces", slug: "showpieces", icon: FaHome },
  { name: "Premium & High end gifts", slug: "premium-and-high-end-gifts", icon: FaGift },
  { name: "Diffusers", slug: "diffusers", icon: FaWaveSquare },
  { name: "Speakers", slug: "speakers", icon: FaVolumeUp },
  { name: "Bar sets", slug: "bar-sets", icon: FaWineGlassAlt },
];

export default function CategoriesGrid() {
  return (
    <div id="categories" className="container mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold text-center mb-10">Specialized Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => {
          const IconComponent = category.icon as React.ComponentType<{ className?: string }>;

          const cols = 4;
          const row = Math.floor(index / cols);
          const col = index % cols;
          const isDark = (row + col) % 2 === 0;

          const darkBlue = "#1f459d";
          const lightBlue = "#8ba9e6";
          const bgColor = isDark ? darkBlue : lightBlue;
          const hoverColor = isDark ? "#2a56b5" : "#a6bdf0";

          return (
            <Link
              key={index}
              href={`/categories/${category.slug}?id=${categoryIdMap[category.slug]}`}
              className="group block"
            >
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
