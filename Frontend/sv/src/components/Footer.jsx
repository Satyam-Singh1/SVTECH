import React from "react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
];

const socialLinks = [
    {
        name: "Twitter",
        href: "https://twitter.com/",
        icon: (
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M22.46 5.924c-.793.352-1.646.59-2.542.698a4.48 4.48 0 0 0 1.964-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 11.07 9.03a12.72 12.72 0 0 1-9.23-4.68 4.48 4.48 0 0 0 1.39 5.98A4.44 4.44 0 0 1 2 9.13v.057a4.48 4.48 0 0 0 3.59 4.39c-.36.1-.74.15-1.13.057a4.48 4.48 0 0 0 4.18 3.11A8.98 8.98 0 0 1 2 19.54a12.7 12.7 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.78 0-.19-.01-.38-.02-.57A9.1 9.1 0 0 0 24 4.59a8.97 8.97 0 0 1-2.54.7z" />
            </svg>
        ),
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/",
        icon: (
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm15.25 11.25h-3v-5.5c0-1.32-.03-3.01-1.84-3.01-1.84 0-2.12 1.44-2.12 2.92v5.59h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z" />
            </svg>
        ),
    },
    {
        name: "Instagram",
        href: "https://instagram.com/",
        icon: (
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.396 3.678 1.378c-.981.981-1.247 2.093-1.306 3.374C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.059 1.281.325 2.393 1.306 3.374.981.981 2.093 1.247 3.374 1.306C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.325 3.374-1.306.981-.981 1.247-2.093 1.306-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.281-.325-2.393-1.306-3.374-.981-.981-2.093-1.247-3.374-1.306C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
        ),
    },
];

const Footer = () => {
    return (
        <footer className="relative z-10 bg-gradient-to-br from-green-50 via-white to-yellow-50 border-t border-green-100 pt-12 pb-6 px-4 md:px-0 font-lato">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-10">
                {/* Logo & Tagline */}
                <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="inline-block w-10 h-10 rounded-full bg-gradient-to-tr from-green-400 to-yellow-400 flex items-center justify-center shadow-lg">
                            <span className="font-montserrat text-2xl font-extrabold text-white tracking-tight">SV</span>
                        </span>
                        <span className="font-montserrat text-2xl font-bold text-green-700 tracking-tight">SVTech</span>
                    </div>
                    <span className="text-gray-600 font-lato text-sm mb-2">
                        Empowering your business for a brighter future.
                    </span>
                    <div className="flex gap-3 mt-2">
                        {socialLinks.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-white/80 border border-green-100 flex items-center justify-center text-green-600 hover:bg-green-100 hover:text-green-800 transition"
                                aria-label={item.name}
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Navigation */}
               <nav className="flex flex-col items-center md:items-end gap-2">
                    <div className="flex flex-wrap gap-5 mb-2">
                        {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => {
                            const targetId = link.href.replace('/', '')
                            document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
                            }}
                            className="text-gray-700 font-semibold font-montserrat hover:text-green-700 transition"
                        >
                            {link.name}
                        </button>
                        ))}
                    </div>
                    <span className="text-xs text-gray-400 font-lato">
                        <svg className="inline w-4 h-4 mr-1 -mt-1 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 0 0 .95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 0 0-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 0 0-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 0 0-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 0 0 .95-.69l1.286-3.967z" />
                        </svg>
                        Excellence. Innovation. Trust.
                    </span>
                </nav>
            </div>
            {/* Divider */}
            <div className="my-6 border-t border-green-100" />
            {/* Copyright */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-lato gap-2">
                <span>
                    &copy; {new Date().getFullYear()} SVTech. All rights reserved.
                </span>
                <span>
                    Designed with <span className="text-pink-500">♥</span> by SVTech Team
                </span>
            </div>
            {/* Font imports and custom styles */}
            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Montserrat:wght@700;900&display=swap');
          .font-lato { font-family: 'Lato', Arial, Helvetica, sans-serif; }
          .font-montserrat { font-family: 'Montserrat', 'Arial Black', Arial, sans-serif; }
        `}
            </style>
        </footer>
    );
};

export default Footer;