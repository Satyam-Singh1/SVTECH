import React from "react";
import satyam from "../assets/Satyam.jpg";
import vivek from "../assets/Vivek.png";
// Example team images (replace with your own or use Unsplash/avatars)
const team = [
    {
        name: "Satyam Singh",
        role: "Developer & Co-Founder",
        img: satyam,
        quote: "We believe in empowering businesses to achieve more.",
    },
    {
        name: "Vivek Singh",
        role: "Developer & Founder",
        img: vivek,
        quote: "Innovation is at the heart of everything we do.",
    },
    {
        name: "Satyam Singh",
        role: "Developer & Co-Founder",
        img: satyam,
    },
    
];

const About = () => {
    return (
        <section className="relative py-24 px-4 bg-gradient-to-br from-white via-green-50 to-yellow-50 overflow-hidden">
            {/* Decorative Accent Blob */}
            <svg
                className="absolute -top-24 -left-24 w-96 h-96 opacity-20 pointer-events-none"
                viewBox="0 0 400 400"
                fill="none"
                aria-hidden="true"
            >
                <defs>
                    <linearGradient id="aboutBlob" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#22c55e" />
                        <stop offset="1" stopColor="#eab308" />
                    </linearGradient>
                </defs>
                <path
                    fill="url(#aboutBlob)"
                    d="M320,320Q280,400,200,380Q120,360,80,280Q40,200,80,120Q120,40,200,60Q280,80,320,160Q360,240,320,320Z"
                />
            </svg>

            {/* Subtle grid pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(34,197,94,0.07)_1px,_transparent_0)] [background-size:32px_32px] pointer-events-none" />

            <div className="relative max-w-5xl mx-auto bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl px-8 md:px-16 py-16 border border-white/60">
                <div className="flex flex-col md:flex-row md:items-center md:space-x-12">
                    {/* Founder Highlight */}
                    <div className="flex flex-col items-center md:items-start mb-10 md:mb-0">
                    <div className="flex-shrink-0 flex flex-col items-center md:items-start mb-10 md:mb-0">
                        <div className="relative">
                            <img
                                src={team[0].img}
                                alt={team[0].name}
                                className="w-36 h-36 rounded-full object-cover border-4 border-green-400 shadow-lg"
                            />
                            <span className="absolute bottom-0 right-0 bg-gradient-to-tr from-green-400 to-yellow-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md font-montserrat">
                                Founder
                            </span>
                        </div>
                        <h3 className="mt-5 text-2xl font-montserrat font-extrabold text-gray-900">{team[0].name}</h3>
                        <p className="text-green-700 font-lato font-semibold">{team[0].role}</p>
                        <blockquote className="mt-3 text-gray-600 italic font-lato max-w-xs text-center md:text-left">
                            “{team[0].quote}”
                        </blockquote>
                    </div>
                    <div className="flex-shrink-0 flex flex-col items-center md:items-start mb-10 md:mb-0">
                        <div className="relative">
                            <img
                                src={team[1].img}
                                alt={team[1].name}
                                className="w-36 h-36 rounded-full object-cover border-4 border-green-400 shadow-lg"
                            />
                            <span className="absolute bottom-0 right-0 bg-gradient-to-tr from-green-400 to-yellow-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md font-montserrat">
                                Founder
                            </span>
                        </div>
                        <h3 className="mt-5 text-2xl font-montserrat font-extrabold text-gray-900">{team[1].name}</h3>
                        <p className="text-green-700 font-lato font-semibold">{team[1].role}</p>
                        <blockquote className="mt-3 text-gray-600 italic font-lato max-w-xs text-center md:text-left">
                            “{team[1].quote}”
                        </blockquote>
                    </div>
                    </div>
                    {/* About Text */}
                    <div className="flex-1">
                        <h2 className="text-4xl md:text-5xl font-extrabold font-montserrat text-gray-900 mb-6 tracking-tight">
                            Who We Are
                        </h2>
                        <p className="text-lg md:text-xl text-gray-700 mb-4 font-lato leading-relaxed">
                            We are a team of <span className="font-semibold text-green-700">dedicated professionals</span> committed to delivering <span className="font-semibold text-yellow-700">innovative solutions</span> that drive success for our clients.
                        </p>
                        <p className="text-lg md:text-xl text-gray-700 mb-4 font-lato leading-relaxed">
                            Our expertise spans various industries, allowing us to <span className="font-semibold text-green-700">tailor our services</span> to meet the unique needs of each business we partner with.
                        </p>
                        <p className="text-lg md:text-xl text-gray-700 mb-4 font-lato leading-relaxed">
                            With a focus on <span className="font-semibold text-yellow-700">collaboration</span> and <span className="font-semibold text-green-700">excellence</span>, we strive to exceed expectations and foster long-term relationships built on trust and results.
                        </p>
                        <div className="mt-8">
                            <span className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-green-600 to-yellow-500 text-white font-bold font-montserrat shadow-lg tracking-wide text-lg">
                                Join us on a journey of growth & transformation
                            </span>
                        </div>
                    </div>
                </div>

                {/* Team Photo Grid */}
                <div className="mt-14">
                    <h4 className="text-xl font-montserrat font-bold text-gray-800 mb-6 text-center">Meet Our Team</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center">
                        {team.slice(1).map((member, idx) => (
                            <div key={member.name} className="flex flex-col items-center">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-24 h-24 rounded-full object-cover border-2 border-yellow-400 shadow-md"
                                />
                                <div className="mt-3 text-lg font-montserrat font-semibold text-gray-900">{member.name}</div>
                                <div className="text-green-700 font-lato text-sm">{member.role}</div>
                            </div>
                        ))}
                    </div>
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

export default About;