import React from "react";
import {
    LightBulbIcon,
    GlobeAltIcon,
    ChartBarIcon,
    DevicePhoneMobileIcon,
    MagnifyingGlassIcon,
    PaintBrushIcon,
} from "@heroicons/react/24/outline";

const services = [
    {
        name: "Consulting",
        description: "Expert advice to guide your business decisions and growth.",
        icon: LightBulbIcon,
        color: "from-green-400 to-lime-400",
    },
    {
        name: "Website Development",
        description: "Modern, responsive websites tailored to your brand.",
        icon: GlobeAltIcon,
        color: "from-blue-400 to-cyan-400",
    },
    {
        name: "Strategy Development",
        description: "Data-driven strategies for sustainable success.",
        icon: ChartBarIcon,
        color: "from-yellow-400 to-orange-400",
    },
    {
        name: "Digital Transformation",
        description: "Upgrade your business with the latest digital solutions.",
        icon: DevicePhoneMobileIcon,
        color: "from-purple-400 to-indigo-400",
    },
    {
        name: "Market Research",
        description: "In-depth analysis to uncover new opportunities.",
        icon: MagnifyingGlassIcon,
        color: "from-pink-400 to-rose-400",
    },
    {
        name: "Branding and Design",
        description: "Creative branding and design to make you stand out.",
        icon: PaintBrushIcon,
        color: "from-amber-400 to-yellow-300",
    },
];

const Services = () => {
    return (
        <section className="relative py-24 px-4 bg-gradient-to-br from-white via-green-50 to-yellow-50 overflow-hidden">
            {/* Decorative Blob */}
            <svg
                className="absolute -top-24 -left-24 w-96 h-96 opacity-20 pointer-events-none"
                viewBox="0 0 400 400"
                fill="none"
                aria-hidden="true"
            >
                <defs>
                    <linearGradient id="servicesBlob" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#22c55e" />
                        <stop offset="1" stopColor="#eab308" />
                    </linearGradient>
                </defs>
                <path
                    fill="url(#servicesBlob)"
                    d="M320,320Q280,400,200,380Q120,360,80,280Q40,200,80,120Q120,40,200,60Q280,80,320,160Q360,240,320,320Z"
                />
            </svg>

            {/* Subtle grid pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(34,197,94,0.07)_1px,_transparent_0)] [background-size:32px_32px] pointer-events-none" />

            <div className="relative max-w-6xl mx-auto">
                <div className="text-center mb-14">
                    <h1 className="text-4xl md:text-5xl font-extrabold font-montserrat text-gray-900 mb-4 tracking-tight">
                        Our Services
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 font-lato leading-relaxed max-w-2xl mx-auto">
                        We offer a range of services to help your business thrive in the digital age.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, idx) => (
                        <div
                            key={service.name}
                            className={`group relative bg-white/80 backdrop-blur-lg border border-white/60 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
                        >
                            <div
                                className={`mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${service.color} shadow-lg transition-all duration-300 group-hover:scale-110`}
                            >
                                <service.icon className="h-10 w-10 text-white" />
                            </div>
                            <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors duration-200">
                                {service.name}
                            </h3>
                            <p className="text-gray-700 font-lato text-base leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Font imports and custom styles */}
            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Montserrat:wght@700;900&display=swap');
          .font-lato { font-family: 'Lato', Arial, Helvetica, sans-serif; }
          .font-montserrat { font-family: 'Montserrat', 'Arial Black', Arial, sans-serif; }
        `}
            </style>
        </section>
    );
};

export default Services;