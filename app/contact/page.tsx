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
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/assets/home/rs=w:1920,m.jpeg')] bg-cover bg-center opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/60 to-primary/80"></div>
                </div>
                <div className="relative z-10 px-6 md:px-12 lg:px-32 py-[120px] md:py-[140px] lg:py-[160px]">
                    <div className="max-w-6xl mx-auto text-center">
                        <div className={`space-y-8 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
                            <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6" style={{animationDelay: '0.2s'}}>GET IN TOUCH</p>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-offWhite mb-8 leading-tight" style={{animationDelay: '0.4s'}}>
                                Contact Us
                            </h1>
                            <p className="text-xl md:text-2xl lg:text-3xl text-offWhite/90 max-w-4xl mx-auto leading-relaxed" style={{animationDelay: '0.6s'}}>
                                We'd love to hear from you
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32">
                <div className="max-w-lg mx-auto">
                    <div className={`bg-white rounded-3xl shadow-xl border border-accent/20 p-8 md:p-12 animate-fade-in-up ${isLoaded ? '' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-3">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                    className={`w-full px-6 py-4 rounded-2xl border transition-all duration-300 bg-offWhite focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 text-lg ${
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
                                <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-3">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                    className={`w-full px-6 py-4 rounded-2xl border transition-all duration-300 bg-offWhite focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 text-lg ${
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
                                <label htmlFor="phone" className="block text-sm font-semibold text-charcoal mb-3">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={(e) => handleInputChange('phone', e.target.value)}
                                    className={`w-full px-6 py-4 rounded-2xl border transition-all duration-300 bg-offWhite focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 text-lg ${
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
                                className="w-full bg-accent text-primary py-5 text-lg font-semibold rounded-full flex items-center justify-center gap-3 group hover:bg-accent/90 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                            >
                                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                                </svg>
                                Send Message
                            </button>
                        </form>

                        {/* Note Under Form */}
                        <div className="mt-12 text-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                            <p className="text-sm text-charcoal/60">
                                We'll get back to you as soon as possible.
                            </p>
                            <p className="mt-4 text-sm text-charcoal/70">
                                433 Plaza Real, Suite 275, Boca Raton, Florida 33432, United States
                            </p>
                            <a
                                href="mailto:Inquiry@ggwoa.org"
                                className="mt-2 inline-block text-sm font-semibold text-accent hover:text-primary"
                            >
                                Inquiry@ggwoa.org
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
