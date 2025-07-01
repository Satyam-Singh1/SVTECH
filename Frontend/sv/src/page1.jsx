import React from "react";
import { ArrowRightIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";

const Page1 = () => {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-yellow-50 px-4 py-24">
            {/* Decorative SVG Blob */}
            <svg
                className="absolute -top-32 -left-32 w-[32rem] h-[32rem] opacity-30 pointer-events-none"
                viewBox="0 0 400 400"
                fill="none"
                aria-hidden="true"
            >
                <defs>
                    <linearGradient id="blobGradient" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#22c55e" />
                        <stop offset="1" stopColor="#eab308" />
                    </linearGradient>
                </defs>
                <path
                    fill="url(#blobGradient)"
                    d="M320,320Q280,400,200,380Q120,360,80,280Q40,200,80,120Q120,40,200,60Q280,80,320,160Q360,240,320,320Z"
                />
            </svg>

            {/* Subtle grid pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(34,197,94,0.08)_1px,_transparent_0)] [background-size:32px_32px] pointer-events-none" />

            {/* Floating badge */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-white/50">
                <CheckBadgeIcon className="h-5 w-5 text-green-500" />
                <span className="text-sm font-semibold text-slate-700 tracking-wide font-lato">
                    Trusted by 200+ businesses
                </span>
            </div>

            {/* Glassmorphism Card */}
            <div className="relative z-10 max-w-3xl w-full mx-auto bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl px-10 py-16 flex flex-col items-center text-center border border-white/50">
                {/* Main Heading */}
                <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tight text-slate-900 font-montserrat">
                    <span className="block">Unlock Your</span>
                    <span className="block bg-gradient-to-r from-green-600 via-emerald-500 to-yellow-500 bg-clip-text text-transparent animate-gradient-x tracking-tighter drop-shadow-sm font-montserrat">
                        Business Potential
                    </span>
                </h1>

                {/* Primary Description */}
                <p className="text-xl md:text-2xl text-slate-700 mb-6 font-lato font-normal leading-relaxed tracking-wide max-w-2xl">
                    <span className="font-semibold text-slate-900">Innovative consultancy</span> for the digital era.
                    <br className="hidden md:block" />
                    We empower you to{" "}
                    <span className="font-medium text-green-700 underline decoration-green-300 decoration-2 underline-offset-2">grow</span>,{" "}
                    <span className="font-medium text-yellow-700 underline decoration-yellow-300 decoration-2 underline-offset-2">adapt</span>, and{" "}
                    <span className="font-medium text-emerald-700 underline decoration-emerald-300 decoration-2 underline-offset-2">lead</span>.
                </p>

                {/* Secondary Description */}
                <p className="text-lg md:text-xl text-slate-600 mb-10 font-lato font-light leading-relaxed tracking-wide max-w-xl">
                    Partner with our{" "}
                    <span className="font-semibold text-green-700 relative">
                        experts
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full"></span>
                    </span>{" "}
                    to transform your vision into reality.
                </p>

                {/* CTA Button */}
                <a
                    href="#contact"
                    className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-gradient-to-r from-green-600 via-emerald-600 to-yellow-500 text-white font-bold font-montserrat shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 group tracking-wide text-lg border-2 border-white/20"
                >
                    <span className="font-semibold">Get Started</span>
                    <ArrowRightIcon className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
                </a>

                {/* Subtle tagline */}
                <p className="text-sm text-slate-500 mt-6 font-lato font-light tracking-widest uppercase">
                    Transform • Innovate • Succeed
                </p>
            </div>

            {/* Decorative bottom right blob */}
            <svg
                className="absolute bottom-0 right-0 w-80 h-80 opacity-20 pointer-events-none"
                viewBox="0 0 400 400"
                fill="none"
                aria-hidden="true"
            >
                <defs>
                    <linearGradient id="blobGradient2" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#eab308" />
                        <stop offset="1" stopColor="#22c55e" />
                    </linearGradient>
                </defs>
                <path
                    fill="url(#blobGradient2)"
                    d="M320,320Q280,400,200,380Q120,360,80,280Q40,200,80,120Q120,40,200,60Q280,80,320,160Q360,240,320,320Z"
                />
            </svg>

            {/* Enhanced Styles */}
            <style>
                {`
                /* Import Google Fonts */
                @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Montserrat:wght@700;800;900&display=swap');
                
                /* Custom font classes */
                .font-lato {
                    font-family: 'Lato', Arial, Helvetica, sans-serif;
                }
                .font-montserrat {
                    font-family: 'Montserrat', 'Arial Black', Arial, sans-serif;
                    letter-spacing: -0.02em;
                }
                
                /* Gradient animation */
                @keyframes gradient-x {
                    0%, 100% { 
                        background-position: 0% 50%; 
                    }
                    50% { 
                        background-position: 100% 50%; 
                    }
                }
                
                .animate-gradient-x {
                    background-size: 200% 200%;
                    animation: gradient-x 8s ease-in-out infinite;
                }
                
                /* Enhanced text rendering */
                * {
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    text-rendering: optimizeLegibility;
                }
                
                .tracking-tighter {
                    letter-spacing: -0.05em;
                }
                .leading-relaxed {
                    line-height: 1.75;
                }
                `}
            </style>
        </section>
    );
};

export default Page1;