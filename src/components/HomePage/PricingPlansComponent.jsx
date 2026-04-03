"use client";
import { Check, X } from "lucide-react";

const PricingPlansComponent = () => {
    const pricingPlans = [
        {
            name: "Freebie",
            price: 0,
            description: "Ideal for individuals who need quick access to basic features.",
            features: [
                { text: "20,000+ of PNG & SVG graphics", available: true },
                { text: "Access to 100 million stock images", available: true },
                { text: "Upload custom icons and fonts", available: false },
                { text: "Unlimited Sharing", available: false },
                { text: "Upload graphics & video in up to 4k", available: false },
                { text: "Unlimited Projects", available: false },
                { text: "Instant Access to our design system", available: false },
                { text: "Create teams to collaborate on designs", available: false }
            ],
            highlight: false
        },
        {
            name: "Professional",
            price: 25,
            description: "Ideal for individuals who need advanced features and tools for client work.",
            features: [
                { text: "20,000+ of PNG & SVG graphics", available: true },
                { text: "Access to 100 million stock images", available: true },
                { text: "Upload custom icons and fonts", available: true },
                { text: "Unlimited Sharing", available: true },
                { text: "Upload graphics & video in up to 4k", available: true },
                { text: "Unlimited Projects", available: true },
                { text: "Instant Access to our design system", available: false },
                { text: "Create teams to collaborate on designs", available: false }
            ],
            highlight: true
        },
        {
            name: "Enterprise",
            price: 100,
            description: "Ideal for businesses who need personalized services and security for large teams.",
            features: [
                { text: "20,000+ of PNG & SVG graphics", available: true },
                { text: "Access to 100 million stock images", available: true },
                { text: "Upload custom icons and fonts", available: true },
                { text: "Unlimited Sharing", available: true },
                { text: "Upload graphics & video in up to 4k", available: true },
                { text: "Unlimited Projects", available: true },
                { text: "Instant Access to our design system", available: true },
                { text: "Create teams to collaborate on designs", available: true }
            ],
            highlight: false
        }
    ];

    return (
        <section className="font-dm_sans">
            <div className="container">
                <div className="relative max-w-141.5 mx-auto">
                    <h1 className="font-bold text-[40px] text-center">
                        Airbnb Assistant <span className="text-brandColor">pricing</span>
                    </h1>
                    <p className="text-[#191D23] font-normal text-xl mt-4 mb-9.5 text-center">Choose a plan that's right for you</p>
                    {/* Toggle */}
                    <div className="flex items-center justify-center gap-3 mt-6">
                        <span>Pay Monthly</span>
                        <div className="w-11 h-6 bg-gray-300 rounded-full p-0.5 relative">
                            <span className="bg-white w-5 h-5 rounded-full absolute"/>
                        </div>
                        <span>Pay Yearly</span>
                    </div>
                    <div className="absolute sm:top-31.25 right-0 sm:-right-12.5 flex items-center">
                        <img src="/Arrow.png" alt="arrow icon" />
                        <span className="font-medium text-lg text-brandColor mt-8.5">Save 25%</span>
                    </div>
                </div>
                {/* Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-22.5 w-full">
                    {pricingPlans.map((plan, idx) => (
                        <div key={idx}
                            className={`sm:max-w-94.5 rounded-[10px] px-6 py-10 border border-brand-color2 ${plan.highlight
                                ? "bg-brandColor text-white"
                                : "bg-white text-gray-800"
                                }`}
                        >
                            <h2 className={`font-manrope font-bold text-[22px] ${plan.highlight ? "text-white" : "text-[#191D23]"}`}>{plan.name}</h2>
                            <p className={`font-manrope font-normal text-[16px] mt-2.75 mb-5 ${plan.highlight ? "text-white" : "text-[#64748B]"}`}>{plan.description}</p>

                            <h3 className={`font-manrope font-semibold text-[56px] ${plan.highlight ? "text-white" : " text-[#191D23]"}`}>
                                ${plan.price}
                                <span className={`font-light text-[16px] ${plan.highlight ? "text-white" : "text-[#4B5768]"}`}> / Month</span>
                            </h3>
                            <button className={`mt-8.75 w-full py-2.75 rounded text-brandColor font-manrope font-semibold text-[16px] cursor-pointer ${plan.highlight
                                ? "bg-white "
                                : "border border-brandColor"
                                }`}
                            >
                                Get Started Now
                            </button>
                            <ul className="mt-10 space-y-3 font-medium text-[16px] font-manrope">
                                {plan.features.map((f, i) => (
                                    <li key={i} className="flex items-center gap-4.25">
                                        <span className={`p-2 rounded-full ${f.available ? " bg-brand-color2 text-brandColor" : " bg-white text-black"}`}>
                                            {f.available ? <Check size={16} /> : <X size={16} />}
                                        </span>
                                        <span
                                            className={plan.highlight
                                                ? "text-white"
                                                : f.available
                                                    ? "text-[#191D23]"
                                                    : "text-[#A0ABBB]"}
                                        >
                                            {f.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PricingPlansComponent