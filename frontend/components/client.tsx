"use client";
import Image from "next/image";

export default function ClientSection() {
	return (
		<section id="clients" className="py-16 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Heading */}
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold text-gray-900 mb-4 animate-in slide-in-from-bottom duration-700">
						Our{" "}
						<span
							style={{ color: "oklch(38.65% 0.193 265.58)" }} // dark blue
						>
							Clients
						</span>
					</h2>
					<div
						className="w-16 h-1 mx-auto animate-in slide-in-from-bottom duration-700 delay-200"
						style={{ backgroundColor: "oklch(38.65% 0.193 265.58)" }} // dark blue
					></div>
				</div>

				{/* Logos Carousel */}
				<div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide">
					{[
						"/images/client1.png",
						"/images/client2.png",
						"/images/client3.png",
						"/images/client4.png",
						"/images/client5.png",
					].map((logo, index) => (
						<div
							key={index}
							className="flex-shrink-0 w-28 h-28 rounded-full border-4 flex items-center justify-center p-2 animate-in slide-in-from-bottom duration-700 hover:scale-105 transition-transform"
							style={{ borderColor: "oklch(38.65% 0.193 265.58)" }} // dark blue border
						>
							<Image
								src={logo}
								alt={`Client ${index + 1}`}
								width={100}
								height={100}
								className="rounded-full object-contain"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

