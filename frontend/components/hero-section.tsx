"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4468c4]/20 via-white to-orange-50/30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-in slide-in-from-left duration-700">
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-[#4468c4]/40 animate-bounce">
              <span className="text-[#1f459d] font-medium text-sm">🎁 Premium Quality Gifts</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
                From <span className="text-[#1f459d]">Creativity</span> To{" "}
                <span className="text-[#1f459d]">Corporate</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                From our curated collections to your valued clients and employees, Vancare India brings you premium
                corporate gifting solutions that reflect elegance and thoughtfulness. Each gift is a symbol of
                appreciation, crafted to leave a lasting impression with unmatched quality and style.
              </p>
            </div>

            {/* ✅ Scroll to categories on same page */}
            <Button
              size="lg"
              className="bg-[#1f459d] hover:bg-[#4468c4] text-white px-8 py-3 rounded-full text-base font-medium transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              onClick={() => document.getElementById("categories")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore our Products
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative animate-in slide-in-from-right duration-700 delay-300">
            <Image
              src="/images/corporate-gifts-hero.png"
              alt="Premium Corporate Gift Boxes"
              width={600}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
