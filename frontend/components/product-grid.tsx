import { ShoppingBag, Flame, Trophy, Wrench, Coffee, Milk, Pen, Key, CreditCard } from "lucide-react"

const categories = [
  { name: "Premium Bags", icon: ShoppingBag, color: "bg-[#d8e2fa]", textColor: "text-[#1f459d]" }, // light blue bg
  { name: "Luxury Candles", icon: Flame, color: "bg-[#cdd9f7]", textColor: "text-[#1f459d]" },
  { name: "Awards & Trophies", icon: Trophy, color: "bg-[#dfe7fb]", textColor: "text-[#1f459d]" },
  { name: "Metal Artifacts", icon: Wrench, color: "bg-[#d3def6]", textColor: "text-[#1f459d]" },
  { name: "Brass & Copper Collection", icon: Coffee, color: "bg-[#cbd7f5]", textColor: "text-[#1f459d]" },
  { name: "Drinkware Collection", icon: Coffee, color: "bg-[#d6e1fa]", textColor: "text-[#1f459d]" },
  { name: "Gourmet Dairy", icon: Milk, color: "bg-[#c9d6f5]", textColor: "text-[#1f459d]" },
  { name: "Executive Pens", icon: Pen, color: "bg-[#dae4f8]", textColor: "text-[#1f459d]" },
  { name: "Custom Keychains", icon: Key, color: "bg-[#ccd8f5]", textColor: "text-[#1f459d]" },
  { name: "Business Card Holders", icon: CreditCard, color: "bg-[#dbe5f9]", textColor: "text-[#1f459d]" },
]

export default function ProductGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Our <span className="text-[#1f459d]">Product Range</span>
          </h2>
          <p className="text-lg text-gray-600">
            Discover our extensive collection of premium gifting solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div
                key={index}
                className={`${category.color} rounded-2xl p-6 text-center hover:scale-105 transition-transform cursor-pointer group`}
              >
                <div className="flex justify-center mb-4">
                  <IconComponent className={`h-8 w-8 ${category.textColor}`} />
                </div>
                <h3 className={`font-semibold text-sm ${category.textColor} mb-2`}>
                  {category.name}
                </h3>
                <p className={`text-xs ${category.textColor} opacity-75`}>
                  Click to explore options
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
