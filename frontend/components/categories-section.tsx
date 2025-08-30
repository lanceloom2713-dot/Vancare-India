"use client";

import Link from "next/link";
import Image from "next/image";

export default function CategoriesGrid() {
  // Category data with images
  const categories: {
    name: string;
    href: string;
    image: string;
  }[] = [
    {
      name: "Bags",
      href: "/categories/bags",
      image:
        "https://m.media-amazon.com/images/I/516WDvolQbL._UY1100_.jpg",
    },
    {
      name: "Candles",
      href: "/categories/candles",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpPHCUC1pngEYYKWNcE2AeurleWbpm7iRncw&s",
    },
    {
      name: "Awards & Trophies",
      href: "/categories/awards-and-trophies",
      image:
        "https://rukminim2.flixcart.com/image/704/844/xif0q/trophy-medal/j/o/v/1st-2nd-3rd-rank-trophy-golden-award-trophies-cup-student-winner-original-imahyatqfgmrbq8r.jpeg?q=90&crop=false",
    },
    {
      name: "Metal God Figures",
      href: "/categories/metal-god-figures",
      image:
        "https://m.media-amazon.com/images/I/91WHpMalb1L._UF894,1000_QL80_.jpg",
    },
    {
      name: "Brass & Copper Items",
      href: "/categories/brass-copper-items",
      image:
        "https://ashtok.com/cdn/shop/products/Dryfruitplatewith6box_1024x1024.jpg?v=1670499015",
    },
    {
      name: "Bottle, Mug & Sippers",
      href: "/categories/bottle-mug-sippers",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTn2YKYvcltdfoiezx-ePty5eI6gb-AEL5tA&s",
    },
    {
      name: "Diaries",
      href: "/categories/diaries",
      image:
        "https://www.incrediblegifts.in/wp-content/uploads/2024/02/Printeddiary2.jpg",
    },
    {
      name: "Keychains",
      href: "/categories/keychains",
      image:
        "https://gogirgit.com/cdn/shop/products/Personalized-metal-keychain-for-couple-with-custom-name-message-initial-photo-gogirgit-black_1800x.jpg?v=1670462129",
    },
    {
      name: "Pens",
      href: "/categories/pens",
      image:
        "https://www.yourprint.in/wp-content/uploads/2020/01/pen-2.png",
    },
    {
      name: "Card Holders",
      href: "/categories/card-holders",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/2/OP/DT/UQ/110575143/customized-card-holder-copy.jpg",
    },
    {
      name: "Joining Kits",
      href: "/categories/joining-kits",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXLD9iBYK3FyQQ_KUrJX5a1E0xyoU42MH6AQ&s",
    },
    {
      name: "Lunch Box",
      href: "/categories/lunch-box",
      image:
        "https://vivagifts.in/wp-content/uploads/2023/05/Kids-Lunch-Box.jpg",
    },
    {
      name: "Clocks",
      href: "/categories/clocks",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/446310563/EB/IH/SJ/186062306/customized-personalized-wall-clock.png",
    },
    {
      name: "Pen Stand",
      href: "/categories/pen-stand",
      image:
        "https://m.media-amazon.com/images/I/71DC9AMa2NL.jpg",
    },
    {
      name: "Electronic Gadgets",
      href: "/categories/electronic-gadgets",
      image:
        "https://deq64r0ss2hgl.cloudfront.net/images/opt/product/360%C2%B0-flexi-mobile-stand-36971410690665.jpg?v=8787",
    },
    {
      name: "Kids Return Gifts",
      href: "/categories/kids-return-gifts",
      image:
        "https://www.zwende.com/cdn/shop/files/3_28.jpg?v=1712556827&width=900",
    },
    {
      name: "Showpieces",
      href: "/categories/showpieces",
      image:
        "https://images.meesho.com/images/products/351763170/atoeo_512.webp?width=512",
    },
    {
      name: "Premium & High End Gifts",
      href: "/categories/premium-high-end-gifts",
      image:
        "https://bbdgifts.com/cdn/shop/files/IMG-20240520_162613_330.webp?v=1741977324",
    },
    {
      name: "Diffusers",
      href: "/categories/diffusers",
      image:
        "https://m.media-amazon.com/images/I/71kZsnchRNL.jpg",
    },
    {
      name: "Speakers",
      href: "/categories/speakers",
      image:
        "https://www.giftify.in/cdn/shop/products/image17_f1f1f027-c605-4aa4-adcc-d069afe1c9db.jpg?v=1680716052",
    },
    {
      name: "Bar Sets",
      href: "/categories/bar-sets",
      image:
        "https://m.media-amazon.com/images/I/51F+dY-3FXL._UF894,1000_QL80_.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Explore Our Categories
        </h2>

        {/* 5 categories per row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {categories.map((category, index) => (
            <Link key={index} href={category.href} className="group block">
              <div className="rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg bg-white border-2 border-blue-500">
                <div className="flex justify-center mb-4">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={100}
                    height={100}
                    className="rounded-full object-cover border-2 border-blue-500 shadow-md"
                  />
                </div>
                <h3 className="font-semibold text-sm leading-tight">
                  {category.name}
                </h3>
                <p className="text-xs mt-2 text-gray-500">Click to explore</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
