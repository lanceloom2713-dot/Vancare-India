"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      {/* Background gradient updated */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4468c4]/20 via-white to-orange-50/30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-in slide-in-from-left duration-700">
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-[#4468c4]/40 animate-bounce">
              <span className="text-[#1f459d] font-medium text-sm">🎁 Premium Quality Gifts</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 animate-in slide-in-from-left duration-700 delay-200">
                From <span className="text-[#1f459d] animate-pulse">Creativity</span> To{" "}
                <span className="text-[#1f459d] animate-pulse">Corporate</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg animate-in slide-in-from-left duration-700 delay-300">
                From our curated collections to your valued clients and employees, Vancare India brings you premium
                corporate gifting solutions that reflect elegance and thoughtfulness. Each gift is a symbol of
                appreciation, crafted to leave a lasting impression with unmatched quality and style.
              </p>
            </div>

            <Button
              size="lg"
              className="bg-[#1f459d] hover:bg-[#4468c4] text-white px-8 py-3 rounded-full text-base font-medium transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl animate-in slide-in-from-left duration-700 delay-500"
              onClick={() => document.querySelector("#categories")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore our Products
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative animate-in slide-in-from-right duration-700 delay-300">
            <div className="relative z-10 animate-float">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-transparent via-transparent to-transparent">
                <Image
                  src="/images/corporate-gifts-hero.png"
                  alt="Premium Corporate Gift Boxes"
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain"
                  style={{
                    background: "transparent",
                    mixBlendMode: "multiply",
                  }}
                />
              </div>
            </div>

            {/* Floating circles updated */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#4468c4]/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-orange-200/30 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -right-2 w-12 h-12 bg-[#1f459d]/20 rounded-full animate-bounce delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
