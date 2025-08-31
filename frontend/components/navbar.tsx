"use client"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Menu } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const categories = [
  "Bags",
  "Candles",
  "Awards & Trophies",
  "Metal God figures",
  "Brass & Copper items",
  "Bottle, Mugs & Sippers",
  "Diaries",
  "Executive pens",
  "Keychains",
  "Card Holders",
  "Joining kits",
  "Lunch box",
  "Clocks",
  "Pen stand",
  "Electronic gadgets",
  "Kids return gifts",
  "Showpieces",
  "Premium & High end gifts",
  "Diffusers",
  "Speakers",
  "Bar sets",
]

const generateSlug = (category: string) => {
  return category
    .toLowerCase()
    .replace(/,/g, "")
    .replace(/\s+/g, "-")
    .replace(/&/g, "and")
}

export default function Navbar() {
  const scrollToFooter = () => {
    const footer = document.querySelector("footer")
    footer?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center transform hover:scale-105 transition-transform duration-200">
              <Image
                src="/images/vancare-logo.png"
                alt="Vancare India"
                width={160}
                height={60}
                className="h-14 w-auto"
              />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-gray-900 hover:text-[#1f459d] px-3 py-2 text-base font-medium transition-all duration-200 hover:scale-105"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-gray-900 hover:text-[#1f459d] px-3 py-2 text-base font-medium transition-all duration-200 hover:scale-105"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                About Us
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="text-gray-900 hover:text-[#1f459d] px-3 py-2 text-base font-medium transition-all duration-200 flex items-center gap-1 hover:scale-105 group">
                  Products
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 max-h-96 overflow-y-auto">
                  {categories.map((category) => (
                    <DropdownMenuItem
                      key={category}
                      className="hover:bg-[#4468c4]/10 transition-colors"
                    >
                      <Link href={`/categories/${generateSlug(category)}`} className="w-full">
                        {category}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <button
                onClick={scrollToFooter}
                className="text-gray-900 hover:text-[#1f459d] px-3 py-2 text-base font-medium transition-all duration-200 hover:scale-105"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile Menu (Side Drawer with Dropdown) */}
          <div className="block md:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-7 w-7 text-gray-900" />
              </SheetTrigger>
              <SheetContent side="left" className="w-72">
                <div className="flex flex-col mt-6">
                  <Link
                    href="/"
                    className="text-gray-900 text-lg font-medium hover:text-[#1f459d] py-2"
                  >
                    Home
                  </Link>

                  <Link
                    href="#about"
                    className="text-gray-900 text-lg font-medium hover:text-[#1f459d] py-2"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    About Us
                  </Link>

                  <button
                    onClick={scrollToFooter}
                    className="text-gray-900 text-lg font-medium hover:text-[#1f459d] text-left py-2"
                  >
                    Contact
                  </button>

                  {/* Products Dropdown for mobile */}
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="products" className="border-b-0">
                      <AccordionTrigger className="text-gray-900 text-lg font-medium py-2">
                        Products
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col space-y-2 max-h-72 overflow-y-auto pl-4">
                          {categories.map((category) => (
                            <Link
                              key={category}
                              href={`/categories/${generateSlug(category)}`}
                              className="text-gray-800 hover:text-[#1f459d] text-sm"
                            >
                              {category}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
