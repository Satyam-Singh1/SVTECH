import React from "react";
import {
    CheckBadgeIcon,
    LightBulbIcon,
    UserGroupIcon,
    RocketLaunchIcon,
    ShieldCheckIcon,
    SparklesIcon,
} from "@heroicons/react/24/solid";

const highlights = [
    {
        icon: <CheckBadgeIcon className="h-8 w-8 text-green-500" />,
        title: "Proven Expertise",
        desc: "A track record of delivering outstanding results across industries.",
    },
    {
        icon: <LightBulbIcon className="h-8 w-8 text-yellow-400" />,
        title: "Innovative Solutions",
        desc: "We leverage the latest technologies and creative thinking.",
    },
    {
        icon: <UserGroupIcon className="h-8 w-8 text-blue-500" />,
        title: "Collaborative Approach",
        desc: "We work closely with you to understand your goals and challenges.",
    },
    {
        icon: <RocketLaunchIcon className="h-8 w-8 text-pink-500" />,
        title: "Results Driven",
        desc: "Our focus is on delivering measurable value and business growth.",
    },
    {
        icon: <ShieldCheckIcon className="h-8 w-8 text-indigo-500" />,
        title: "Integrity & Trust",
        desc: "We build long-term partnerships based on transparency and trust.",
    },
    {
        icon: <SparklesIcon className="h-8 w-8 text-emerald-500" />,
        title: "Quality Commitment",
        desc: "Relentless pursuit of excellence in everything we do.",
    },
];

const Portfolio = () => {
    return (
        <section className="relative py-20 px-4 bg-gradient-to-br from-white via-green-50 to-yellow-50 overflow-hidden">
            {/* Decorative Accent Blob */}
            <svg
                className="absolute -top-24 -left-24 w-96 h-96 opacity-20 pointer-events-none"
                viewBox="0 0 400 400"
                fill="none"
                aria-hidden="true"
            >
                <defs>
                    <linearGradient id="chooseBlob" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#22c55e" />
                        <stop offset="1" stopColor="#eab308" />
                    </linearGradient>
                </defs>
                <path
                    fill="url(#chooseBlob)"
                    d="M320,320Q280,400,200,380Q120,360,80,280Q40,200,80,120Q120,40,200,60Q280,80,320,160Q360,240,320,320Z"
                />
            </svg>

            <div className="relative max-w-5xl mx-auto bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl px-8 md:px-16 py-16 border border-white/60">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold font-montserrat text-gray-900 mb-4 tracking-tight">
                        Why Choose Us?
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 font-lato leading-relaxed max-w-2xl mx-auto">
                        We are a team of dedicated professionals committed to delivering exceptional results. Our expertise spans various domains, ensuring we meet your unique needs with precision and care.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {highlights.map((item, idx) => (
                        <div
                            key={item.title}
                            className="group bg-white/90 rounded-2xl shadow-lg border border-white/60 p-7 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <div className="mb-4">{item.icon}</div>
                            <h3 className="text-xl font-montserrat font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors duration-200">
                                {item.title}
                            </h3>
                            <p className="text-gray-700 font-lato text-base leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <p className="text-lg md:text-xl text-gray-700 font-lato leading-relaxed max-w-2xl mx-auto">
                        We prioritize innovation and excellence, leveraging the latest technologies and methodologies to drive success for our clients. Our collaborative approach ensures tailored solutions that deliver real value.
                        <br /><br />
                        With a proven track record of success, we are your trusted partner in navigating the complexities of today's business landscape. Choose us for our commitment to <span className="font-semibold text-green-700">quality</span>, <span className="font-semibold text-yellow-700">integrity</span>, and <span className="font-semibold text-emerald-700">results</span>.
                    </p>
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
export default Portfolio;