import React, { useState, useEffect, useRef } from 'react'
import {
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon,
    RocketLaunchIcon,
} from '@heroicons/react/24/outline'

// Animated SVG Logo (Morphing Blob)
const AnimatedLogo = () => (
    <div className="relative w-12 h-12 flex items-center justify-center">
        <svg
            className="absolute inset-0 w-full h-full animate-spin-slow"
            viewBox="0 0 100 100"
            fill="none"
            aria-hidden="true"
        >
            <defs>
                <radialGradient id="blobGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#f472b6" />
                </radialGradient>
            </defs>
            <path
                d="M50 15 Q65 20 80 35 Q95 50 80 65 Q65 80 50 85 Q35 80 20 65 Q5 50 20 35 Q35 20 50 15Z"
                fill="url(#blobGrad)"
                className="animate-blob"
            />
        </svg>
        <span className="relative z-10 font-black text-xl text-white drop-shadow-lg select-none">SV</span>
    </div>
)

// Nav Links Data
const navLinks = [
    { name: 'Home', href: '#home', icon: '🏠' },
    { name: 'About', href: '#about', icon: '👋' },
    {
        name: 'Services',
        href: '#services',
        icon: '⚡',
        dropdown: [
            { name: 'Web Development', href: '#web-dev', icon: '💻' },
            { name: 'Mobile Apps', href: '#mobile', icon: '📱' },
            { name: 'UI/UX Design', href: '#design', icon: '🎨' },
            { name: 'Consulting', href: '#consulting', icon: '💡' },
        ],
    },
    { name: 'Portfolio', href: '#portfolio', icon: '🚀' },
    { name: 'Contact', href: '#contact', icon: '📧' },
]

// Dropdown Menu Component
function DropdownMenu({ items, onItemClick, onClose, open, anchorRef }) {
    const menuRef = useRef(null)
    useEffect(() => {
        if (open) {
            menuRef.current?.focus()
        }
    }, [open])
    return (
        open && (
            <div
                ref={menuRef}
                tabIndex={-1}
                role="menu"
                aria-label="submenu"
                className="absolute top-full left-0 mt-2 w-56 bg-white/80 backdrop-blur-lg rounded-xl shadow-xl border border-gray-200 animate-fade-in z-50"
                onBlur={onClose}
            >
                <div className="p-2">
                    {items.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => { onItemClick(item.name); onClose(); }}
                            className="flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-150"
                            role="menuitem"
                            tabIndex={0}
                        >
                            <span className="text-lg">{item.icon}</span>
                            <span className="font-medium">{item.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        )
    )
}

// Desktop Nav Link
function DesktopNavLink({ link, activeLink, setActiveLink }) {
    const anchorRef = useRef(null)
    const [dropdownOpen, setDropdownOpen] = useState(false)

    // Handle keyboard navigation for dropdown
    const handleKeyDown = (e) => {
        if (link.dropdown) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setDropdownOpen((open) => !open)
            }
            if (e.key === 'Escape') {
                setDropdownOpen(false)
                anchorRef.current?.focus()
            }
        }
    }

    return (
        <div
            className="relative group"
            onMouseEnter={() => link.dropdown && setDropdownOpen(true)}
            onMouseLeave={() => link.dropdown && setDropdownOpen(false)}
        >
            <a
                ref={anchorRef}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${activeLink === link.name
                    ? 'bg-white/70 text-indigo-700 shadow'
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                    }`}
                aria-haspopup={!!link.dropdown}
                aria-expanded={dropdownOpen}
                tabIndex={0}
                onKeyDown={handleKeyDown}
            >
                <span className="text-lg">{link.icon}</span>
                <span>{link.name}</span>
                {link.dropdown && (
                    <ChevronDownIcon
                        className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''
                            }`}
                        aria-hidden="true"
                    />
                )}
            </a>
            {link.dropdown && (
                <DropdownMenu
                    items={link.dropdown}
                    onItemClick={setActiveLink}
                    onClose={() => setDropdownOpen(false)}
                    open={dropdownOpen}
                    anchorRef={anchorRef}
                />
            )}
        </div>
    )
}

// Mobile Nav Link (with collapsible dropdown)
function MobileNavLink({ link, activeLink, setActiveLink }) {
    const [open, setOpen] = useState(false)
    const hasDropdown = !!link.dropdown

    const handleClick = () => {
        setActiveLink(link.name)
        if (hasDropdown) setOpen((v) => !v)
    }

    return (
        <div>
            <button
                onClick={handleClick}
                className={`flex items-center w-full space-x-4 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${activeLink === link.name
                    ? 'bg-white/80 text-indigo-700 shadow'
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                    }`}
                aria-haspopup={hasDropdown}
                aria-expanded={open}
            >
                <span className="text-2xl">{link.icon}</span>
                <span className="text-lg">{link.name}</span>
                {hasDropdown && (
                    <ChevronDownIcon
                        className={`h-5 w-5 ml-auto transition-transform ${open ? 'rotate-180' : ''}`}
                    />
                )}
            </button>
            {hasDropdown && open && (
                <div className="ml-8 mt-1 space-y-1 animate-fade-in">
                    {link.dropdown.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setActiveLink(item.name)}
                            className="flex items-center space-x-3 px-4 py-2 rounded-md text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-150"
                        >
                            <span>{item.icon}</span>
                            <span>{item.name}</span>
                        </a>
                    ))}
                </div>
            )}
        </div>
    )
}

// Main Navbar Component
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('Home')
    const [isScrolled, setIsScrolled] = useState(false)
    const mobileMenuRef = useRef(null)

    // Scroll effect for navbar background
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Trap focus in mobile menu
    useEffect(() => {
        if (isMenuOpen && mobileMenuRef.current) {
            mobileMenuRef.current.focus()
        }
    }, [isMenuOpen])

    // Close mobile menu on Esc
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setIsMenuOpen(false)
        }
        if (isMenuOpen) {
            window.addEventListener('keydown', handleKeyDown)
        }
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isMenuOpen])

    return (
        <>
            {/* Navbar */}
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'bg-white/80 backdrop-blur-lg shadow-lg'
                    : 'bg-white/60 backdrop-blur-md'
                    }`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <a
                            href="#"
                            className="flex items-center space-x-3 group hover:scale-105 transition-transform duration-200"
                        >
                            <AnimatedLogo />
                            <span className="bg-gradient-to-r from-indigo-500 via-pink-400 to-pink-500 bg-clip-text text-transparent font-extrabold text-2xl tracking-tight drop-shadow-lg">
                                SVTech
                            </span>
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-1">
                            {navLinks.map((link) => (
                                <DesktopNavLink
                                    key={link.name}
                                    link={link}
                                    activeLink={activeLink}
                                    setActiveLink={setActiveLink}
                                />
                            ))}
                        </div>

                        {/* CTA Button (Desktop) */}
                        <div className="hidden lg:block">
                            <button className="relative px-6 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold shadow hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                                <span className="flex items-center space-x-2">
                                    <RocketLaunchIcon className="h-5 w-5" />
                                    <span>Get Started</span>
                                </span>
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsMenuOpen((v) => !v)}
                                className="relative p-3 rounded-lg bg-white/70 text-gray-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-200"
                                aria-expanded={isMenuOpen}
                                aria-label="Toggle menu"
                            >
                                <span className="sr-only">Toggle menu</span>
                                <div className="relative w-6 h-6">
                                    <Bars3Icon
                                        className={`absolute inset-0 h-6 w-6 transition-all duration-200 ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                                            }`}
                                    />
                                    <XMarkIcon
                                        className={`absolute inset-0 h-6 w-6 transition-all duration-200 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                                            }`}
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                tabIndex={-1}
                ref={mobileMenuRef}
                aria-modal="true"
                role="dialog"
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/30 backdrop-blur-sm"
                    onClick={() => setIsMenuOpen(false)}
                ></div>

                {/* Mobile Menu */}
                <div
                    className={`absolute top-0 right-0 h-full w-80 max-w-[90vw] bg-white/90 backdrop-blur-lg shadow-lg transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div className="p-6 pt-24">
                        {/* Mobile Navigation Links */}
                        <div className="space-y-2">
                            {navLinks.map((link) => (
                                <MobileNavLink
                                    key={link.name}
                                    link={link}
                                    activeLink={activeLink}
                                    setActiveLink={setActiveLink}
                                />
                            ))}
                        </div>

                        {/* Mobile CTA Button */}
                        <div className="mt-8">
                            <button className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold shadow hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                                <span className="flex items-center justify-center space-x-2">
                                    <RocketLaunchIcon className="h-6 w-6" />
                                    <span>Get Started</span>
                                </span>
                            </button>
                        </div>

                        {/* Social Links */}
                        <div className="mt-8 pt-8 border-t border-gray-200">
                            <div className="flex justify-center space-x-6">
                                {['🐦', '📘', '📷', '💼'].map((icon, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-xl hover:bg-indigo-100 hover:scale-110 transition-all duration-200"
                                    >
                                        {icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Extra: Animated gradient background for the logo */}
            <style>
                {`
                .animate-spin-slow {
                    animation: spin 8s linear infinite;
                }
                @keyframes spin {
                    100% { transform: rotate(360deg); }
                }
                .animate-blob {
                    animation: blobMorph 12s ease-in-out infinite alternate;
                }
                @keyframes blobMorph {
                    0%, 100% {
                        d: path("M50 15 Q65 20 80 35 Q95 50 80 65 Q65 80 50 85 Q35 80 20 65 Q5 50 20 35 Q35 20 50 15Z");
                    }
                    25% {
                        d: path("M50 10 Q70 20 85 40 Q100 60 80 75 Q60 90 50 80 Q40 90 20 75 Q0 60 15 40 Q30 20 50 10Z");
                    }
                    50% {
                        d: path("M50 20 Q60 10 80 30 Q100 50 80 70 Q60 90 50 80 Q40 90 20 70 Q0 50 20 30 Q40 10 50 20Z");
                    }
                    75% {
                        d: path("M50 15 Q65 25 85 35 Q105 55 85 75 Q65 95 50 85 Q35 95 15 75 Q-5 55 15 35 Q35 25 50 15Z");
                    }
                }
                .animate-fade-in {
                    animation: fadeIn 0.2s ease;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px);}
                    to { opacity: 1; transform: translateY(0);}
                }
                `}
            </style>
        </>
    )
}

export default Navbar