"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"

export default function HeroSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const imageWidth = scrollRef.current.querySelector("div")?.clientWidth || 500 // exact width of one image
      scrollRef.current.scrollBy({
        left: direction === "left" ? -imageWidth : imageWidth,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4468c4]/20 via-white to-orange-50/30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-in slide-in-from-left duration-700">
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

            <Button
              size="lg"
              className="bg-[#1f459d] hover:bg-[#4468c4] text-white px-8 py-3 rounded-full text-base font-medium transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              onClick={() => document.getElementById("categories")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore our Products
            </Button>
          </div>

          {/* Right Side Scrollable Images */}
          <div className="relative animate-in slide-in-from-right duration-700 delay-300">
            {/* Scroll buttons */}
            <button
              onClick={() => scroll("left")}
              className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md border border-[#1f459d] hover:bg-[#1f459d] hover:text-white transition"
            >
              <ChevronLeft className="w-6 h-6 text-[#1f459d]" />
            </button>

            <button
              onClick={() => scroll("right")}
              className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md border border-[#1f459d] hover:bg-[#1f459d] hover:text-white transition"
            >
              <ChevronRight className="w-6 h-6 text-[#1f459d]" />
            </button>

            {/* Scrollable container */}
            <div
              ref={scrollRef}
              className="flex overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
            >
              {["hero1.png", "hero2.png", "hero3.png", "hero4.png", "hero5.png"].map((img, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[500px] h-[350px] relative snap-center"
                >
                  <Image
                    src={`/images/${img}`}
                    alt={`Hero Image ${index + 1}`}
                    fill
                    className="object-cover rounded-2xl border-4 border-[#1f459d]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
