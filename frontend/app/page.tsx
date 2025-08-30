"use client";
import { useEffect } from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import CategoriesSection from "@/components/categories-section";
import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";
import WhatsAppPopup from "@/components/whatsapp-popup";

export default function HomePage() {
	return (
		<div className="min-h-screen">
			<Navbar />
			<HeroSection />
			<CategoriesSection />
			<AboutSection />
			<Footer />
			<WhatsAppPopup />
		</div>
	);
}
