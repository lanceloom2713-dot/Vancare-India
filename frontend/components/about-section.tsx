import { Gift, Users, Award } from "lucide-react";

export default function AboutSection() {
	return (
		<section id="about" className="pt-8 pb-16 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold text-gray-900 mb-4 animate-in slide-in-from-bottom duration-700">
						About{" "}
						<span
							style={{ color: "oklch(38.65% 0.193 265.58)" }} // dark blue
						>
							Vancare India
						</span>
					</h2>
					<div
						className="w-16 h-1 mx-auto mb-6 animate-in slide-in-from-bottom duration-700 delay-200"
						style={{ backgroundColor: "oklch(38.65% 0.193 265.58)" }} // dark blue
					></div>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto animate-in slide-in-from-bottom duration-700 delay-300">
						We specialize in strategic corporate gifting solutions designed to leave a lasting impression through quality, creativity, and
						personalization.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div className="space-y-6 animate-in slide-in-from-left duration-700 delay-400">
						<h3 className="text-2xl font-bold text-gray-900">Strategic Gifting Solutions, Tailored for You</h3>

						<p className="text-gray-600 leading-relaxed">
							At Vancare India, we understand that every gift tells a story. With our huge variety and extensive catalogue, we bring you
							the perfect gifting options for every occasion—whether it's to appreciate your employees, strengthen client relationships,
							or celebrate milestones.
						</p>

						<p className="text-gray-600 leading-relaxed">
							Our curated collection includes premium, customized, and innovative gift ideas that reflect your brand's values and build
							meaningful connections. From festive hampers to exclusive business gifts, we are your trusted partner for corporate
							gifting that stands out.
						</p>
					</div>

					<div className="space-y-6 animate-in slide-in-from-right duration-700 delay-500">
						<h4 className="text-xl font-semibold text-gray-900">Why Choose Vancare India?</h4>

						<ul className="space-y-4">
							{[
								"Premium quality products that reflect your brand values",
								"Complete customization and personalization services",
								"Strategic approach to corporate relationship building",
								"Extensive catalogue with innovative gift solutions",
								"Focus on quality, creativity, and meaningful connections",
							].map((item, index) => (
								<li
									key={index}
									className="flex items-start gap-3 animate-in slide-in-from-right duration-700"
									style={{ animationDelay: `${600 + index * 100}ms` }}
								>
									<div
										className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
										style={{ backgroundColor: "oklch(38.65% 0.193 265.58)" }} // dark blue
									></div>
									<span className="text-gray-600">{item}</span>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
					<div className="text-center animate-in slide-in-from-bottom duration-700 delay-700 hover:scale-105 transition-transform">
						<div
							className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
							style={{ backgroundColor: "oklch(74.16% 0.124 263.93)" }} // light blue
						>
							<Gift className="h-8 w-8" style={{ color: "oklch(38.65% 0.193 265.58)" }} />
						</div>
						<div className="text-3xl font-bold text-gray-900 mb-2">1000+</div>
						<div className="text-gray-600">Premium Products</div>
					</div>

					<div className="text-center animate-in slide-in-from-bottom duration-700 delay-800 hover:scale-105 transition-transform">
						<div
							className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
							style={{ backgroundColor: "oklch(74.16% 0.124 263.93)" }} // light blue
						>
							<Users className="h-8 w-8" style={{ color: "oklch(38.65% 0.193 265.58)" }} />
						</div>
						<div className="text-3xl font-bold text-gray-900 mb-2">1000+</div>
						<div className="text-gray-600">Satisfied Clients</div>
					</div>

					<div className="text-center animate-in slide-in-from-bottom duration-700 delay-900 hover:scale-105 transition-transform">
						<div
							className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
							style={{ backgroundColor: "oklch(74.16% 0.124 263.93)" }} // light blue
						>
							<Award className="h-8 w-8" style={{ color: "oklch(38.65% 0.193 265.58)" }} />
						</div>
						<div className="text-3xl font-bold text-gray-900 mb-2">21</div>
						<div className="text-gray-600">Gift Categories</div>
					</div>
				</div>
			</div>
		</section>
	);
}
