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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitError(null);

        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("https://formspree.io/f/mkgdzela", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({ name: "", email: "", phone: "" });
            } else {
                const data = await response.json();
                if (data.errors) {
                    setSubmitError(data.errors.map((error: { message: string }) => error.message).join(", "));
                } else {
                    setSubmitError("Oops! There was a problem submitting your form.");
                }
            }
        } catch (error) {
            setSubmitError("Oops! There was a problem submitting your form.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
        if (submitError) {
            setSubmitError(null);
        }
    };

    if (isSubmitted) {
        return (
            <main className="bg-offWhite text-charcoal min-h-screen flex items-center justify-center px-6">
                <div className="max-w-md w-full text-center animate-fade-in-up">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
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
                            <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6" style={{ animationDelay: '0.2s' }}>GET IN TOUCH</p>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-offWhite mb-8 leading-tight" style={{ animationDelay: '0.4s' }}>
                                Contact Us
                            </h1>
                            <p className="text-xl md:text-2xl lg:text-3xl text-offWhite/90 max-w-4xl mx-auto leading-relaxed" style={{ animationDelay: '0.6s' }}>
                                We'd love to hear from you
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32">
                <div className="max-w-lg mx-auto">
                    <div className={`bg-white rounded-3xl shadow-xl border border-accent/20 p-8 md:p-12 animate-fade-in-up ${isLoaded ? '' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-8"
                        >
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-3">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                    disabled={isSubmitting}
                                    className={`w-full px-6 py-4 rounded-2xl border transition-all duration-300 bg-offWhite focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 text-lg disabled:opacity-50 ${errors.name
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
                                    name="email"
                                    value={formData.email}
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                    disabled={isSubmitting}
                                    className={`w-full px-6 py-4 rounded-2xl border transition-all duration-300 bg-offWhite focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 text-lg disabled:opacity-50 ${errors.email
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
                                    name="phone"
                                    value={formData.phone}
                                    onChange={(e) => handleInputChange('phone', e.target.value)}
                                    disabled={isSubmitting}
                                    className={`w-full px-6 py-4 rounded-2xl border transition-all duration-300 bg-offWhite focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 text-lg disabled:opacity-50 ${errors.phone
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

                            {/* Error Message */}
                            {submitError && (
                                <div className="p-4 bg-red-50 border border-red-200 rounded-2xl">
                                    <p className="text-sm text-red-600">{submitError}</p>
                                </div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-accent text-primary py-5 text-lg font-semibold rounded-full flex items-center justify-center gap-3 group hover:bg-accent/90 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                                        </svg>
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Note Under Form */}
                        <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                            <p className="text-sm text-charcoal/60 mb-6">
                                We'll get back to you as soon as possible.
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <p className="text-sm font-semibold text-charcoal mb-2">Nigeria Office</p>
                                    <p className="text-sm text-charcoal/70">
                                        8B Amaechi Onuoha Crescent, Lekki Phase One, Lekki<br />
                                        Lagos, Nigeria
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-charcoal mb-2">US Office</p>
                                    <p className="text-sm text-charcoal/70">
                                        433 Plaza Real, Suite 275<br />
                                        Boca Raton, Florida 33432, United States
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-charcoal mb-2">UAE Office</p>
                                    <p className="text-sm text-charcoal/70">
                                        Great Green wall of Africa<br />
                                        DSO - IFZA, IFZA PROPERTIES<br />
                                        Dubai Silicon Oasis<br />
                                        Dubai, UAE
                                    </p>
                                </div>
                            </div>

                            <a
                                href="mailto:Inquiry@ggwoa.org"
                                className="mt-6 inline-block text-sm font-semibold text-accent hover:text-primary"
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
