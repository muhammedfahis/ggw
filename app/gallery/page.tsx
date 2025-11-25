"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface GalleryImage {
    src: string;
    alt: string;
    category: string;
    caption: string;
}

const galleryImages: GalleryImage[] = [
    {
        src: "/assets/gallery/rs=w:1110_1.jpeg",
        alt: "2024 CC Forum's Global Investment in Sustainable Development",
        category: "Summit",
        caption: "Leaders and investors outlining regenerative finance instruments to accelerate the wall."
    },
    {
        src: "/assets/gallery/rs=w:1110_2.jpeg",
        alt: "Investment Forum Panel Discussion",
        category: "Summit",
        caption: "Strategic dialogue on sustainable development financing."
    },
    {
        src: "/assets/gallery/rs=w:1110_3.jpeg",
        alt: "Global Investment Partners",
        category: "Summit",
        caption: "International coalition building for climate finance."
    },
    {
        src: "/assets/gallery/rs=w:1110_4.jpeg",
        alt: "COP16 Cultural Activations",
        category: "Conference",
        caption: "Cultural showcases during the CBD COP in Colombia."
    },
    {
        src: "/assets/gallery/rs=w:1110_5.jpeg",
        alt: "COP16 Policy Briefing",
        category: "Conference",
        caption: "Media briefings and policy discussions at COP16."
    },
    {
        src: "/assets/gallery/rs=w:1110_6.jpeg",
        alt: "COP16 Delegates",
        category: "Conference",
        caption: "Global delegates gathering for biodiversity action."
    },
    {
        src: "/assets/gallery/rs=w:1110_7.jpeg",
        alt: "COP29 Coalition Building",
        category: "Conference",
        caption: "Ministers and allies creating strategic partnerships."
    },
    {
        src: "/assets/gallery/rs=w:1110_8.jpeg",
        alt: "COP29 Creative Showcase",
        category: "Conference",
        caption: "Creative activations at COP29 climate summit."
    },
    {
        src: "/assets/gallery/rs=w:1110_9.jpeg",
        alt: "COP29 Youth Engagement",
        category: "Conference",
        caption: "Youth voices leading climate action discussions."
    },
    {
        src: "/assets/gallery/rs=w:1110_10.jpeg",
        alt: "Summit of the Future Dialogue",
        category: "Summit",
        caption: "Indigenous knowledge keepers sharing wisdom."
    },
    {
        src: "/assets/gallery/rs=w:1110_11.jpeg",
        alt: "Youth Leadership Circle",
        category: "Summit",
        caption: "Young leaders shaping sustainable futures."
    },
    {
        src: "/assets/gallery/rs=w:1110_12.jpeg",
        alt: "Future Summit Innovation",
        category: "Summit",
        caption: "Innovation labs for climate solutions."
    },
    {
        src: "/assets/gallery/rs=w:1110_13.jpeg",
        alt: "NDC Summit Alignment",
        category: "Policy",
        caption: "Member states aligning with national commitments."
    },
    {
        src: "/assets/gallery/rs=w:1110_14.jpeg",
        alt: "National Climate Planning",
        category: "Policy",
        caption: "Strategic planning for Great Green Wall outcomes."
    },
    {
        src: "/assets/gallery/rs=w:1110_15.jpeg",
        alt: "Policy Implementation",
        category: "Policy",
        caption: "Translating commitments into actionable strategies."
    },
    {
        src: "/assets/gallery/rs=w:1110_16.jpeg",
        alt: "UAE-Africa Economic Summit",
        category: "Investment",
        caption: "Investment briefings on infrastructure and logistics."
    },
    {
        src: "/assets/gallery/rs=w:1110_17.jpeg",
        alt: "Economic Corridor Development",
        category: "Investment",
        caption: "Building sustainable economic partnerships."
    },
    {
        src: "/assets/gallery/rs=w:1110_18.jpeg",
        alt: "Circular Economy Solutions",
        category: "Investment",
        caption: "Showcasing circular economy innovations."
    },
    {
        src: "/assets/gallery/rs=w:1110_19.jpeg",
        alt: "Climate Action Africa Forum",
        category: "Innovation",
        caption: "Policy hackathons accelerating climate entrepreneurship."
    },
    {
        src: "/assets/gallery/rs=w:1110_20.jpeg",
        alt: "CAAF24 Creative Showcase",
        category: "Innovation",
        caption: "Creative solutions for climate action."
    },
    {
        src: "/assets/gallery/rs=w:1110_21.jpeg",
        alt: "Climate Entrepreneurship",
        category: "Innovation",
        caption: "Young entrepreneurs presenting climate solutions."
    },
    {
        src: "/assets/gallery/rs=w:1110_22.jpeg",
        alt: "Soil Health Summit",
        category: "Science",
        caption: "Demonstrations of soil regeneration science."
    },
    {
        src: "/assets/gallery/rs=w:1110_23.jpeg",
        alt: "Farmer Cooperative Training",
        category: "Science",
        caption: "Hands-on training with farmer cooperatives."
    },
    {
        src: "/assets/gallery/rs=w:1110_24.jpeg",
        alt: "Regenerative Agriculture",
        category: "Science",
        caption: "Advanced techniques in soil regeneration."
    },
    {
        src: "/assets/gallery/rs=w:1110_25.jpeg",
        alt: "Diaspora Investment Symposium",
        category: "Community",
        caption: "Diaspora leaders mobilizing capital for restoration."
    },
    {
        src: "/assets/gallery/rs=w:1110_26.jpeg",
        alt: "Storytelling for Impact",
        category: "Community",
        caption: "Mobilizing storytelling for project funding."
    },
    {
        src: "/assets/gallery/rs=w:1110_27.jpeg",
        alt: "Community Partnership",
        category: "Community",
        caption: "Building community-led restoration projects."
    },
];

const categories = ["All", "Summit", "Conference", "Policy", "Investment", "Innovation", "Science", "Community"];

export default function GalleryPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
    const [filteredImages, setFilteredImages] = useState<GalleryImage[]>(galleryImages);

    useEffect(() => {
        if (selectedCategory === "All") {
            setFilteredImages(galleryImages);
        } else {
            setFilteredImages(galleryImages.filter(img => img.category === selectedCategory));
        }
    }, [selectedCategory]);

    const openLightbox = (image: GalleryImage) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'unset';
    };

    const navigateImage = (direction: 'next' | 'prev') => {
        if (!selectedImage) return;
        
        const currentIndex = filteredImages.findIndex(img => img.src === selectedImage.src);
        let newIndex;
        
        if (direction === 'next') {
            newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
        } else {
            newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
        }
        
        setSelectedImage(filteredImages[newIndex]);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!selectedImage) return;
            
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') navigateImage('next');
            if (e.key === 'ArrowLeft') navigateImage('prev');
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage]);

    return (
        <main className="bg-offWhite text-charcoal min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-deepEarth/90 to-primary/95"></div>
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/assets/gallery/rs=w:1110_1.jpeg')] bg-cover bg-center opacity-20"></div>
                </div>
                <div className="relative z-10 px-6 md:px-12 lg:px-32 py-24 md:py-32">
                    <div className="max-w-7xl mx-auto text-center">
                        <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6 animate-fade-in-up">GALLERY</p>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-offWhite mb-8 leading-tight animate-slide-in-left">
                            Our Moments in Action
                        </h1>
                        <p className="text-xl md:text-2xl text-offWhite/90 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                            Explore our work through stunning images—from policy rooms to Sahel dunes, witness the chapters powering the Great Green Wall movement.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter Controls */}
            <section className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-accent/20 z-40 px-6 md:px-12 lg:px-32 py-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 overflow-x-auto">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                                        selectedCategory === category
                                            ? 'bg-primary text-white'
                                            : 'bg-transparent border border-accent/30 text-charcoal hover:bg-accent'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                        <div className="hidden md:flex items-center gap-2 text-sm text-charcoal/60">
                            <span>Showing {filteredImages.length} images</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                        {filteredImages.map((image, index) => (
                            <div
                                key={image.src}
                                className="group cursor-pointer"
                                style={{animationDelay: `${index * 0.05}s`}}
                                onClick={() => openLightbox(image)}
                            >
                                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                    {/* Image Container */}
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        />
                                        
                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <span className="px-2 py-1 bg-accent/90 text-primary rounded-full text-xs font-bold uppercase">
                                                        {image.category}
                                                    </span>
                                                    <span className="text-xs font-medium">View Full Size</span>
                                                </div>
                                                <p className="text-sm font-medium line-clamp-2">{image.caption}</p>
                                            </div>
                                        </div>
                                        
                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary rounded-full text-xs font-semibold">
                                                {image.category}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 z-50 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Navigation Buttons */}
                    <button
                        onClick={(e: React.MouseEvent) => {
                            e.stopPropagation();
                            navigateImage('prev');
                        }}
                        className="absolute left-4 z-50 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={(e: React.MouseEvent) => {
                            e.stopPropagation();
                            navigateImage('next');
                        }}
                        className="absolute right-4 z-50 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Image Container */}
                    <div className="relative max-w-6xl max-h-[80vh] w-full">
                        <div className="relative aspect-[4/3] w-full">
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                fill
                                className="object-contain"
                                sizes="100vw"
                                priority
                            />
                        </div>
                        
                        {/* Caption */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="px-3 py-1 bg-accent text-primary rounded-full text-sm font-bold uppercase">
                                    {selectedImage.category}
                                </span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">{selectedImage.alt}</h3>
                            <p className="text-white/80">{selectedImage.caption}</p>
                        </div>
                    </div>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm font-medium bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                        {filteredImages.findIndex(img => img.src === selectedImage.src) + 1} / {filteredImages.length}
                    </div>
                </div>
            )}

            {/* Media Desk CTA */}
            <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/50">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6">MEDIA DESK</p>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-deepEarth mb-8 leading-tight">
                        Need Full-Resolution Assets or Editorial Stories?
                    </h2>
                    <p className="text-xl text-charcoal/80 mb-12 leading-relaxed">
                        The GGWoA media desk curates ready-to-publish sets for partners, press, and collaborators. Let us know what you need for your coverage.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="btn-warm px-8 py-4 flex items-center gap-3 justify-center">
                            Contact Media Desk
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                            </svg>
                        </Link>
                        <Link href="/news" className="btn-secondary px-8 py-4 flex items-center gap-3 justify-center">
                            Browse News Archive
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
