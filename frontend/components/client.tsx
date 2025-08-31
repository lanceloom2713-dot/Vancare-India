"use client";
import Image from "next/image";

export default function ClientSection() {
	const logos = [
		"/images/client1.png",
		"/images/client2.png",
		"/images/client3.png",
		"/images/client4.png",
		"/images/client5.png",
		"/images/client6.png",
		"/images/client7.png",
		"/images/client8.png",
		"/images/client9.jpeg",
		"/images/client10.jpeg",
		"/images/client11.jpeg",
		"/images/client12.jpeg",
		"/images/client13.jpeg",
		"/images/client14.jpeg",
		"/images/client15.jpeg",
		"/images/client16.jpeg",
		"/images/client17.jpeg",
		"/images/client18.jpeg",
		
	];

	return (
		<section id="clients" className="pt-8 pb-16 bg-white">
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

				{/* Auto-scrolling logos */}
				<div className="overflow-hidden relative">
					<div className="flex animate-scroll gap-8 w-max">
						{[...logos, ...logos].map((logo, index) => (
							<div
								key={index}
								className="flex-shrink-0 w-40 h-24 border-2 flex items-center justify-center p-2 bg-white"
								style={{ borderColor: "oklch(38.65% 0.193 265.58)" }} // dark blue border
							>
								<Image
									src={logo}
									alt={`Client ${index + 1}`}
									width={120}
									height={80}
									className="object-contain max-h-20"
								/>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Custom animation style */}
			<style jsx>{`
				@keyframes scroll {
					0% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(-50%);
					}
				}
				.animate-scroll {
					animation: scroll 20s linear infinite;
				}
			`}</style>
		</section>
	);
}
