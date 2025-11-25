"use client";

import { useState, useEffect } from "react";

interface FormData {
    name: string;
    email: string;
    phone: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
}

export default function ContactPage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: ""
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const validateForm = (): FormErrors => {
        const newErrors: FormErrors = {};
        
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }
        
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }
        
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
            newErrors.phone = "Please enter a valid phone number";
        }
        
        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors = validateForm();
        
        if (Object.keys(newErrors).length === 0) {
            setIsSubmitted(true);
            // Reset form after 3 seconds
            setTimeout(() => {
                setFormData({ name: "", email: "", phone: "" });
                setIsSubmitted(false);
            }, 3000);
        } else {
            setErrors(newErrors);
        }
    };

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

    if (isSubmitted) {
        return (
            <main className="bg-offWhite text-charcoal min-h-screen flex items-center justify-center px-6">
                <div className="max-w-md w-full text-center animate-fade-in-up">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold text-deepEarth mb-4">Thank You!</h1>
                    <p className="text-lg text-charcoal/70">We'll reach out shortly.</p>
                </div>
            </main>
        );
    }

    return (
        <main className="bg-offWhite text-charcoal min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/10 to-primary/5"></div>
                <div className="absolute inset-0">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                    </div>
                </div>
                
                <div className="relative z-10 px-6 md:px-12 lg:px-32 py-24 md:py-32">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className={`space-y-8 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
                            <div className="space-y-4">
                                <p className="font-accent text-xs uppercase tracking-wider text-accent animate-slide-in-left">
                                    GET IN TOUCH
                                </p>
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-deepEarth leading-tight animate-slide-in-right">
                                    Contact Us
                                </h1>
                                <p className="text-xl md:text-2xl text-charcoal/70 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                                    We'd love to hear from you
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32">
                <div className="max-w-2xl mx-auto">
                    <div className={`bg-white rounded-3xl shadow-xl border border-accent/20 p-8 md:p-12 animate-fade-in-up ${isLoaded ? '' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                    className={`w-full px-4 py-3 rounded-2xl border transition-all duration-300 bg-offWhite focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                                        errors.name 
                                            ? 'border-red-500 focus:border-red-500' 
                                            : 'border-accent/20 focus:border-primary'
                                    }`}
                                    placeholder="Enter your full name"
                                />
                                {errors.name && (
                                    <p className="mt-2 text-sm text-red-500 animate-fade-in-up">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                    className={`w-full px-4 py-3 rounded-2xl border transition-all duration-300 bg-offWhite focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                                        errors.email 
                                            ? 'border-red-500 focus:border-red-500' 
                                            : 'border-accent/20 focus:border-primary'
                                    }`}
                                    placeholder="Enter your email address"
                                />
                                {errors.email && (
                                    <p className="mt-2 text-sm text-red-500 animate-fade-in-up">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            {/* Phone Field */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={(e) => handleInputChange('phone', e.target.value)}
                                    className={`w-full px-4 py-3 rounded-2xl border transition-all duration-300 bg-offWhite focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                                        errors.phone 
                                            ? 'border-red-500 focus:border-red-500' 
                                            : 'border-accent/20 focus:border-primary'
                                    }`}
                                    placeholder="Enter your phone number"
                                />
                                {errors.phone && (
                                    <p className="mt-2 text-sm text-red-500 animate-fade-in-up">
                                        {errors.phone}
                                    </p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full btn-primary py-4 text-lg font-semibold flex items-center justify-center gap-3 group hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                            >
                                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                                </svg>
                                Send Message
                            </button>
                        </form>

                        {/* Note Under Form */}
                        <div className="mt-8 text-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                            <p className="text-sm text-charcoal/60">
                                We'll get back to you as soon as possible.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
