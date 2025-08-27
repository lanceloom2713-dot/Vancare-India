"use client"

import { useState } from "react"
import { MessageCircle, Minimize2 } from "lucide-react"

export default function WhatsAppPopup() {
  const [isMinimized, setIsMinimized] = useState(true)

  const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/send?phone=919871191216", "_blank")
  }

  const handleMinimize = () => {
    setIsMinimized(true)
  }

  const handleRestore = () => {
    setIsMinimized(false)
  }

  return (
    <>
      {/* Minimized floating button - always visible */}
      {isMinimized && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce cursor-pointer" onClick={handleRestore}>
          <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110">
            <MessageCircle size={24} />
          </div>
        </div>
      )}

      {/* Full chat popup */}
      {!isMinimized && (
        <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
          <div className="bg-white rounded-lg shadow-2xl w-80 overflow-hidden">
            {/* Header */}
            <div className="bg-green-500 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">Vancare India</h3>
                  <p className="text-xs opacity-90">Corporate Gifting Solutions</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={handleMinimize} className="hover:bg-white/20 p-1 rounded transition-colors">
                  <Minimize2 size={16} />
                </button>
              </div>
            </div>

            {/* Chat content */}
            <div className="p-4 bg-gray-50">
              <div className="bg-white p-3 rounded-lg shadow-sm mb-3">
                <p className="text-sm text-gray-700">👋 Hello! Welcome to Vancare India</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm mb-4">
                <p className="text-sm text-gray-700">
                  We specialize in premium corporate gifting solutions. How can we help you today?
                </p>
              </div>

              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                Start WhatsApp Chat
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
