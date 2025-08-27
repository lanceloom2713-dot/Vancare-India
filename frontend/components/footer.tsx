"use client"

import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Logo + tagline */}
          <div className="space-y-4">
            <Image
              src="/images/vancare-logo.png"
              alt="Vancare India"
              width={160}
              height={60}
              className="h-12 w-auto"
            />
            <p className="text-gray-400 text-sm font-medium">
              Strategic Gifting Solutions, Tailored for You
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector("#categories")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Info</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p className="hover:text-blue-400 transition-colors">
                <span className="font-medium">Name:</span> Ayush Gupta
              </p>
              <p className="hover:text-blue-400 transition-colors">
                <span className="font-medium">Phone:</span> +919871191216
              </p>
              <p className="hover:text-blue-400 transition-colors leading-relaxed">
                <span className="font-medium">Address:</span> 111, Ansal garden enclave near imperial farm house,
                Ghaziabad 201013
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p className="hover:text-blue-400 transition-colors">
            &copy; 2025 Vancare India. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
