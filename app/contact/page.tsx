"use client";

import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import Link from "next/link";

const FORMSPREE_URL = "https://formspree.io/f/mkgdzela";
const EMAIL = "Inquiry@ggwoa.org";

const roles = ["Government", "Corporate partner", "Donor or funder", "Community", "Media", "Other"];

const officeIcons = {
    pin: "M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
    building: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    globe: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
};

const offices = [
    { name: "Nigeria", address: "8B Amaechi Onuoha Crescent, Lekki Phase One, Lagos", icon: officeIcons.pin },
    { name: "United States", address: "433 Plaza Real, Suite 275, Boca Raton, FL 33432", icon: officeIcons.building },
    { name: "UAE", address: "DSO - IFZA, IFZA Properties, Dubai Silicon Oasis, Dubai", icon: officeIcons.globe },
];

const helpTopics = [
    {
        title: "Partnerships",
        body: "Corporate, institutional and government collaboration.",
        cta: "Explore partnership",
        href: "/advance-africa",
        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    },
    {
        title: "Projects",
        body: "Proposals and on-the-ground initiatives along the Wall.",
        cta: "View projects",
        href: "/projects",
        icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
        title: "Media & general",
        body: "Press requests and everything else.",
        cta: "Email us",
        href: `mailto:${EMAIL}`,
        icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
];

interface FormData {
    role: string;
    name: string;
    email: string;
    phone: string;
    location: string;
    message: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

const emptyForm: FormData = { role: "", name: "", email: "", phone: "", location: "", message: "" };

function Field({ id, label, required, error, children }: { id: string; label: string; required?: boolean; error?: string; children: ReactNode }) {
    return (
        <div>
            <label htmlFor={id} className="block font-accent text-xs font-semibold uppercase tracking-wider text-deepEarth/80">
                {label}
                {required && <span className="text-accentDark"> *</span>}
            </label>
            {children}
            {error && <p className="mt-1.5 text-sm text-red-600">{error}</p>}
        </div>
    );
}

const inputClass = (hasError?: string) =>
    `mt-2 w-full border-0 border-b-2 bg-transparent px-0 py-2.5 text-base text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-0 transition-colors ${
        hasError ? "border-red-500" : "border-deepEarth/25 focus:border-primary"
    }`;

export default function ContactPage() {
    const [formData, setFormData] = useState<FormData>(emptyForm);
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

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

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitError(null);

        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch(FORMSPREE_URL, {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormData(emptyForm);
            } else {
                const data = await response.json();
                if (data.errors) {
                    setSubmitError(data.errors.map((error: { message: string }) => error.message).join(", "));
                } else {
                    setSubmitError("Oops! There was a problem submitting your form.");
                }
            }
        } catch {
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

    return (
        <main className="bg-offWhite text-charcoal">
            {/* Hero */}
            <section className="relative overflow-hidden bg-deepEarth">
                <div className="absolute inset-0 bg-[url('/assets/home/rs=w:1920,m.png')] bg-cover bg-center opacity-15" aria-hidden="true" />
                <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
                    <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 font-accent text-xs uppercase tracking-wider text-offWhite/60">
                        <Link href="/" className="hover:text-offWhite transition-colors">Home</Link>
                        <span aria-hidden="true">/</span>
                        <span className="font-semibold text-offWhite">Contact</span>
                    </nav>
                    <div className="max-w-2xl animate-fade-in-up">
                        <p className="font-accent text-xs font-semibold uppercase tracking-[0.2em] text-accent">Get in touch</p>
                        <h1 className="mt-3 font-heading text-4xl font-bold leading-tight tracking-tight text-offWhite sm:text-5xl">
                            Let&apos;s restore the Sahel together
                        </h1>
                        <p className="mt-5 text-lg leading-relaxed text-offWhite/80">
                            Whether you represent a government, a company, a funder or a community, tell us who you are and we&apos;ll route you to the right team.
                        </p>
                    </div>
                </div>
            </section>

            {/* Form + contact details */}
            <section className="px-4 py-16 md:px-6 md:py-20">
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-12">
                    <div className="rounded border border-deepEarth/10 border-t-2 border-t-accent bg-white p-6 sm:p-10 lg:col-span-7">
                        {isSubmitted ? (
                            <div className="flex h-full flex-col items-center justify-center py-12 text-center animate-fade-in-up" role="status">
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                    <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                    </svg>
                                </div>
                                <h2 className="font-heading text-3xl font-bold text-primary">Thank you!</h2>
                                <p className="mt-3 text-charcoal/70">We&apos;ll reach out shortly.</p>
                                <button
                                    type="button"
                                    onClick={() => setIsSubmitted(false)}
                                    className="mt-8 text-sm font-semibold text-primary underline decoration-accent underline-offset-4"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <>
                                <h2 className="font-heading text-3xl font-bold text-primary">Send us a message</h2>
                                <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-7">
                                    <Field id="role" label="I am reaching out as">
                                        <select
                                            id="role"
                                            value={formData.role}
                                            onChange={(e) => handleInputChange("role", e.target.value)}
                                            className={inputClass()}
                                        >
                                            <option value="">Select one</option>
                                            {roles.map((r) => (
                                                <option key={r} value={r}>{r}</option>
                                            ))}
                                        </select>
                                    </Field>

                                    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                                        <Field id="name" label="Full name" required error={errors.name}>
                                            <input
                                                id="name"
                                                type="text"
                                                autoComplete="name"
                                                value={formData.name}
                                                onChange={(e) => handleInputChange("name", e.target.value)}
                                                className={inputClass(errors.name)}
                                                placeholder="Your full name"
                                            />
                                        </Field>
                                        <Field id="email" label="Email" required error={errors.email}>
                                            <input
                                                id="email"
                                                type="email"
                                                autoComplete="email"
                                                value={formData.email}
                                                onChange={(e) => handleInputChange("email", e.target.value)}
                                                className={inputClass(errors.email)}
                                                placeholder="you@example.com"
                                            />
                                        </Field>
                                        <Field id="phone" label="Phone" required error={errors.phone}>
                                            <input
                                                id="phone"
                                                type="tel"
                                                autoComplete="tel"
                                                value={formData.phone}
                                                onChange={(e) => handleInputChange("phone", e.target.value)}
                                                className={inputClass(errors.phone)}
                                                placeholder="+234 000 000 0000"
                                            />
                                        </Field>
                                        <Field id="location" label="Country / City">
                                            <input
                                                id="location"
                                                type="text"
                                                autoComplete="country-name"
                                                value={formData.location}
                                                onChange={(e) => handleInputChange("location", e.target.value)}
                                                className={inputClass()}
                                                placeholder="e.g. Dakar, Senegal"
                                            />
                                        </Field>
                                    </div>

                                    <Field id="message" label="Message">
                                        <textarea
                                            id="message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={(e) => handleInputChange("message", e.target.value)}
                                            className={`${inputClass()} resize-y`}
                                            placeholder="How can we work together?"
                                        />
                                    </Field>

                                    {submitError && (
                                        <p className="rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600" role="alert">
                                            {submitError}
                                        </p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="inline-flex items-center justify-center rounded bg-primary px-8 py-3.5 text-sm font-semibold text-offWhite transition-colors hover:bg-primaryDark disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        {isSubmitting ? "Sending…" : "Send message"}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>

                    <div className="flex flex-col gap-6 lg:col-span-5">
                        <div className="rounded border border-deepEarth/10 bg-white p-6 sm:p-8">
                            <p className="font-accent text-xs font-semibold uppercase tracking-[0.2em] text-accentDark">Direct inquiries</p>
                            <h2 className="mt-2 font-heading text-2xl font-bold text-deepEarth">Email us</h2>
                            <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                                For administrative, institutional and strategic partnership correspondence:
                            </p>
                            <a
                                href={`mailto:${EMAIL}`}
                                className="mt-5 inline-flex items-center gap-3 border-b-2 border-accent pb-1 font-heading text-2xl font-semibold text-primary transition-colors hover:text-deepEarth"
                            >
                                <svg className="h-6 w-6 flex-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={helpTopics[2].icon} />
                                </svg>
                                {EMAIL}
                            </a>
                        </div>

                        <div className="rounded border border-deepEarth/10 bg-white p-6 sm:p-8">
                            <p className="font-accent text-xs font-semibold uppercase tracking-[0.2em] text-accentDark">Permanent delegations</p>
                            <h2 className="mt-2 font-heading text-2xl font-bold text-deepEarth">Our offices</h2>
                            <ul className="mt-5 divide-y divide-deepEarth/10">
                                {offices.map((o) => (
                                    <li key={o.name} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                                        <span className="flex h-10 w-10 flex-none items-center justify-center rounded-md bg-secondary text-primary">
                                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={o.icon} />
                                            </svg>
                                        </span>
                                        <address className="not-italic">
                                            <span className="block font-semibold text-primary">{o.name}</span>
                                            <span className="mt-0.5 block text-sm leading-relaxed text-charcoal/70">{o.address}</span>
                                        </address>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* How can we help */}
            <section className="border-t border-deepEarth/10 bg-secondary/40 px-4 py-16 md:px-6">
                <div className="mx-auto max-w-6xl">
                    <p className="font-accent text-xs font-semibold uppercase tracking-[0.2em] text-accentDark">Not sure who to contact?</p>
                    <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary">How can we help?</h2>
                    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                        {helpTopics.map((t) => (
                            <Link
                                key={t.title}
                                href={t.href}
                                className="group rounded border border-deepEarth/10 bg-offWhite p-6 transition-colors hover:border-primary/40"
                            >
                                <svg className="h-7 w-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={t.icon} />
                                </svg>
                                <h3 className="mt-4 font-heading text-xl font-semibold text-deepEarth">{t.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{t.body}</p>
                                <span className="mt-4 inline-flex items-center gap-1 font-accent text-xs font-semibold uppercase tracking-wider text-primary">
                                    {t.cta} <span className="transition-transform group-hover:translate-x-1">→</span>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
