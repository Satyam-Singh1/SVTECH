import React, { useState } from "react";

const initialState = {
    name: "",
    email: "",
    message: "",
};

const Contact = () => {
    const [form, setForm] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    // Simple validation
    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = "Name is required";
        if (!form.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
            newErrors.email = "Enter a valid email";
        }
        if (!form.message.trim()) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: undefined });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setSubmitted(true);
        setForm(initialState);
        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <section className="relative py-20 px-4 bg-gradient-to-br from-green-50 via-white to-yellow-50 min-h-[80vh] flex items-center justify-center overflow-hidden">
            {/* Decorative Blob */}
            <svg
                className="absolute -top-24 -left-24 w-96 h-96 opacity-20 pointer-events-none"
                viewBox="0 0 400 400"
                fill="none"
                aria-hidden="true"
            >
                <defs>
                    <linearGradient id="contactBlob" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#22c55e" />
                        <stop offset="1" stopColor="#eab308" />
                    </linearGradient>
                </defs>
                <path
                    fill="url(#contactBlob)"
                    d="M320,320Q280,400,200,380Q120,360,80,280Q40,200,80,120Q120,40,200,60Q280,80,320,160Q360,240,320,320Z"
                />
            </svg>

            {/* Subtle grid pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(34,197,94,0.07)_1px,_transparent_0)] [background-size:32px_32px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-xl mx-auto bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl px-8 py-12 border border-white/60">
                <h1 className="text-4xl md:text-5xl font-extrabold font-montserrat text-gray-900 mb-6 text-center tracking-tight">
                    Contact Us
                </h1>
                <p className="text-lg text-gray-700 font-lato mb-8 text-center">
                    We'd love to hear from you! Fill out the form below and our team will get back to you soon.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-800 font-semibold font-lato mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className={`w-full px-5 py-3 rounded-xl border ${errors.name ? "border-red-400" : "border-gray-200"
                                } bg-white/90 focus:outline-none focus:ring-2 focus:ring-green-400 font-lato text-gray-900 transition`}
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            value={form.name}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                        {errors.name && (
                            <span className="text-red-500 text-sm font-lato">{errors.name}</span>
                        )}
                    </div>
                    <div>
                        <label className="block text-gray-800 font-semibold font-lato mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className={`w-full px-5 py-3 rounded-xl border ${errors.email ? "border-red-400" : "border-gray-200"
                                } bg-white/90 focus:outline-none focus:ring-2 focus:ring-green-400 font-lato text-gray-900 transition`}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="you@email.com"
                            value={form.email}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                        {errors.email && (
                            <span className="text-red-500 text-sm font-lato">{errors.email}</span>
                        )}
                    </div>
                    <div>
                        <label className="block text-gray-800 font-semibold font-lato mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className={`w-full px-5 py-3 rounded-xl border ${errors.message ? "border-red-400" : "border-gray-200"
                                } bg-white/90 focus:outline-none focus:ring-2 focus:ring-green-400 font-lato text-gray-900 transition resize-none`}
                            id="message"
                            name="message"
                            placeholder="How can we help you?"
                            rows={5}
                            value={form.message}
                            onChange={handleChange}
                        />
                        {errors.message && (
                            <span className="text-red-500 text-sm font-lato">{errors.message}</span>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-green-600 to-yellow-500 text-white font-bold font-montserrat text-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-200"
                    >
                        Send Message
                    </button>
                    {submitted && (
                        <div className="text-green-700 font-semibold text-center mt-4 font-lato animate-fade-in">
                            Thank you! Your message has been sent.
                        </div>
                    )}
                </form>
                <div className="mt-10 text-center text-gray-500 font-lato text-sm">
                    Or email us directly at{" "}
                    <a
                        href="mailto:info@yourconsultancy.com"
                        className="text-green-700 underline hover:text-yellow-600"
                    >
                        info@yourconsultancy.com
                    </a>
                </div>
            </div>

            {/* Decorative bottom right blob */}
            <svg
                className="absolute bottom-0 right-0 w-80 h-80 opacity-20 pointer-events-none"
                viewBox="0 0 400 400"
                fill="none"
                aria-hidden="true"
            >
                <defs>
                    <linearGradient id="contactBlob2" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#eab308" />
                        <stop offset="1" stopColor="#22c55e" />
                    </linearGradient>
                </defs>
                <path
                    fill="url(#contactBlob2)"
                    d="M320,320Q280,400,200,380Q120,360,80,280Q40,200,80,120Q120,40,200,60Q280,80,320,160Q360,240,320,320Z"
                />
            </svg>

            {/* Font imports and custom styles */}
            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Montserrat:wght@700;900&display=swap');
          .font-lato { font-family: 'Lato', Arial, Helvetica, sans-serif; }
          .font-montserrat { font-family: 'Montserrat', 'Arial Black', Arial, sans-serif; }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in {
            animation: fade-in 0.5s ease;
          }
        `}
            </style>
        </section>
    );
};

export default Contact;