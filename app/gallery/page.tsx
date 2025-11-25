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
    {
        src: "/assets/gallery/rs=w:1110_28.jpeg",
        alt: "Youth Climate Summit",
        category: "Summit",
        caption: "Young leaders convening for climate action."
    },
    {
        src: "/assets/gallery/rs=w:1110_29.jpeg",
        alt: "Innovation Showcase",
        category: "Innovation",
        caption: "Climate tech innovations on display."
    },
    {
        src: "/assets/gallery/rs=w:1110_30.jpeg",
        alt: "Policy Workshop",
        category: "Policy",
        caption: "Stakeholders collaborating on policy frameworks."
    },
    {
        src: "/assets/gallery/rs=w:1110_31.jpeg",
        alt: "Investment Forum",
        category: "Investment",
        caption: "Investment opportunities in green infrastructure."
    },
    {
        src: "/assets/gallery/rs=w:1110_32.jpeg",
        alt: "Science Symposium",
        category: "Science",
        caption: "Research presentations on climate adaptation."
    },
    {
        src: "/assets/gallery/rs=w:1110_33.jpeg",
        alt: "Community Assembly",
        category: "Community",
        caption: "Local communities gathering for planning."
    },
    {
        src: "/assets/gallery/rs=w:1110_34.jpeg",
        alt: "Global Partners Meeting",
        category: "Summit",
        caption: "International partners strategic alignment."
    },
    {
        src: "/assets/gallery/rs=w:1110_35.jpeg",
        alt: "Climate Innovation Lab",
        category: "Innovation",
        caption: "Testing new climate technologies."
    },
    {
        src: "/assets/gallery/rs=w:1110_36.jpeg",
        alt: "Policy Dialogue",
        category: "Policy",
        caption: "High-level policy discussions."
    },
    {
        src: "/assets/gallery/rs=w:1110_37.jpeg",
        alt: "Green Investment Summit",
        category: "Investment",
        caption: "Mobilizing capital for green projects."
    },
    {
        src: "/assets/gallery/rs=w:1110_38.jpeg",
        alt: "Environmental Research",
        category: "Science",
        caption: "Field research on ecosystem restoration."
    },
    {
        src: "/assets/gallery/rs=w:1110_39.jpeg",
        alt: "Community Training",
        category: "Community",
        caption: "Capacity building for local communities."
    },
    {
        src: "/assets/gallery/rs=w:1110_40.jpeg",
        alt: "Leadership Summit",
        category: "Summit",
        caption: "Leadership development for climate action."
    },
    {
        src: "/assets/gallery/rs=w:1110_41.jpeg",
        alt: "Tech Innovation",
        category: "Innovation",
        caption: "Technology solutions for climate challenges."
    },
    {
        src: "/assets/gallery/rs=w:1110_42.jpeg",
        alt: "Climate Policy Forum",
        category: "Policy",
        caption: "Policy makers discussing climate strategies."
    },
    {
        src: "/assets/gallery/rs=w:1110_43.jpeg",
        alt: "Sustainable Investment",
        category: "Investment",
        caption: "Investment in sustainable development."
    },
    {
        src: "/assets/gallery/rs=w:1110_44.jpeg",
        alt: "Climate Science Forum",
        category: "Science",
        caption: "Scientific discussions on climate change."
    },
    {
        src: "/assets/gallery/rs=w:1110_45.jpeg",
        alt: "Community Empowerment",
        category: "Community",
        caption: "Empowering communities for sustainable development."
    },
    {
        src: "/assets/gallery/rs=w:1110_46.jpeg",
        alt: "Global Climate Summit",
        category: "Summit",
        caption: "World leaders addressing climate challenges."
    },
    {
        src: "/assets/gallery/rs=w:1110_47.jpeg",
        alt: "Innovation Exhibition",
        category: "Innovation",
        caption: "Showcasing climate innovation solutions."
    },
    {
        src: "/assets/gallery/rs=w:1110_48.jpeg",
        alt: "Policy Implementation Workshop",
        category: "Policy",
        caption: "Workshop on implementing climate policies."
    },
    {
        src: "/assets/gallery/rs=w:1110_49.jpeg",
        alt: "Climate Finance Meeting",
        category: "Investment",
        caption: "Discussion on climate finance mechanisms."
    },
    {
        src: "/assets/gallery/rs=w:1110_50.jpeg",
        alt: "Environmental Science Conference",
        category: "Science",
        caption: "Conference on environmental sciences."
    },
    {
        src: "/assets/gallery/rs=w:1110_51.jpeg",
        alt: "Community Development Forum",
        category: "Community",
        caption: "Forum on community-led development."
    },
    {
        src: "/assets/gallery/rs=w:1110_52.jpeg",
        alt: "Climate Action Summit",
        category: "Summit",
        caption: "Summit on accelerating climate action."
    },
    {
        src: "/assets/gallery/rs=w:1110_53.jpeg",
        alt: "Green Technology Showcase",
        category: "Innovation",
        caption: "Showcase of green technologies."
    },
    {
        src: "/assets/gallery/rs=w:1110_54.jpeg",
        alt: "Climate Policy Summit",
        category: "Policy",
        caption: "Summit on climate policy development."
    },
    {
        src: "/assets/gallery/rs=w:1110_55.jpeg",
        alt: "Sustainable Investment Forum",
        category: "Investment",
        caption: "Forum on sustainable investment opportunities."
    },
    {
        src: "/assets/gallery/rs=w:1110_56.jpeg",
        alt: "Climate Research Symposium",
        category: "Science",
        caption: "Symposium on climate research findings."
    },
    {
        src: "/assets/gallery/rs=w:1110_57.jpeg",
        alt: "Community Resilience Workshop",
        category: "Community",
        caption: "Workshop on building community resilience."
    },
    {
        src: "/assets/gallery/rs=w:1110_58.jpeg",
        alt: "Global Climate Conference",
        category: "Summit",
        caption: "International conference on climate solutions."
    },
    {
        src: "/assets/gallery/rs=w:1110_59.jpeg",
        alt: "Climate Innovation Summit",
        category: "Innovation",
        caption: "Summit on climate innovation and technology."
    },
    {
        src: "/assets/gallery/rs=w:1110_60.jpeg",
        alt: "Environmental Policy Forum",
        category: "Policy",
        caption: "Forum on environmental policy development."
    },
    {
        src: "/assets/gallery/rs=w:1110_61.jpeg",
        alt: "Green Finance Conference",
        category: "Investment",
        caption: "Conference on green finance mechanisms."
    },
    {
        src: "/assets/gallery/rs=w:1110_62.jpeg",
        alt: "Climate Science Workshop",
        category: "Science",
        caption: "Workshop on climate science applications."
    },
    {
        src: "/assets/gallery/rs=w:1110_63.jpeg",
        alt: "Community Climate Action",
        category: "Community",
        caption: "Community-led climate action initiatives."
    },
    {
        src: "/assets/gallery/rs=w:1110_64.jpeg",
        alt: "International Climate Summit",
        category: "Summit",
        caption: "International summit on climate cooperation."
    },
    {
        src: "/assets/gallery/rs=w:1110_65.jpeg",
        alt: "Sustainable Innovation Forum",
        category: "Innovation",
        caption: "Forum on sustainable innovation solutions."
    },
    {
        src: "/assets/gallery/rs=w:1110_66.jpeg",
        alt: "Climate Policy Dialogue",
        category: "Policy",
        caption: "Dialogue on effective climate policies."
    },
    {
        src: "/assets/gallery/rs=w:1110_67.jpeg",
        alt: "Impact Investment Summit",
        category: "Investment",
        caption: "Summit on impact investment strategies."
    },
    {
        src: "/assets/gallery/rs=w:1110_68.jpeg",
        alt: "Environmental Research Forum",
        category: "Science",
        caption: "Forum on environmental research findings."
    },
];

const categories = ["All", "Summit", "Conference", "Policy", "Investment", "Innovation", "Science", "Community"];

export default function GalleryPage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
    const [filteredImages, setFilteredImages] = useState<GalleryImage[]>(galleryImages);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

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
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/assets/gallery/rs=w:1110_1.jpeg')] bg-cover bg-center opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/60 to-primary/80"></div>
                </div>
                <div className="relative z-10 px-6 md:px-12 lg:px-32 py-[120px] md:py-[140px] lg:py-[160px]">
                    <div className="max-w-6xl mx-auto text-center">
                        <div className={`space-y-8 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
                            <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6" style={{animationDelay: '0.2s'}}>GALLERY</p>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-offWhite mb-8 leading-tight" style={{animationDelay: '0.4s'}}>
                                Our Work in Images
                            </h1>
                            <p className="text-xl md:text-2xl lg:text-3xl text-offWhite/90 max-w-4xl mx-auto leading-relaxed" style={{animationDelay: '0.6s'}}>
                                Explore our projects and moments through photography. From policy rooms to Sahel dunes, witness the chapters powering the Great Green Wall movement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filter Controls */}
            <section className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-accent/20 z-40 px-6 md:px-12 lg:px-32 py-6">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-3">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-6 py-3 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                                        selectedCategory === category
                                            ? 'bg-accent text-primary scale-105 shadow-lg'
                                            : 'bg-transparent border border-accent/30 text-charcoal hover:bg-accent hover:text-primary hover:border-accent'
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
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
                        {filteredImages.map((image, index) => (
                            <div
                                key={image.src}
                                className="group cursor-pointer animate-fade-in-up"
                                style={{animationDelay: `${0.2 + index * 0.05}s`}}
                                onClick={() => openLightbox(image)}
                            >
                                <div className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-accent/20">
                                    {/* Image Container */}
                                    <div className="relative aspect-[3/2] overflow-hidden">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        />
                                        
                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <span className="px-3 py-1 bg-accent/90 text-primary rounded-full text-xs font-bold uppercase backdrop-blur-sm">
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
                        className="absolute top-4 right-4 z-50 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
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
                        className="absolute left-4 z-50 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
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
                        className="absolute right-4 z-50 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Image Container */}
                    <div className="relative max-w-6xl max-h-[80vh] w-full">
                        <div className="relative aspect-[3/2] w-full">
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
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm font-medium bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                        {filteredImages.findIndex(img => img.src === selectedImage.src) + 1} / {filteredImages.length}
                    </div>
                </div>
            )}

            {/* Media Desk CTA */}
            <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-gradient-to-br from-primary via-deepEarth to-primary">
                <div className="max-w-4xl mx-auto text-center">
                    <div className={`space-y-8 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6" style={{animationDelay: '0.2s'}}>MEDIA DESK</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-offWhite mb-8 leading-tight" style={{animationDelay: '0.4s'}}>
                            Need Full-Resolution Assets or Editorial Stories?
                        </h2>
                        <p className="text-xl md:text-2xl text-offWhite/90 mb-12 leading-relaxed max-w-3xl mx-auto" style={{animationDelay: '0.6s'}}>
                            The GGWoA media desk curates ready-to-publish sets for partners, press, and collaborators. Let us know what you need for your coverage.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center" style={{animationDelay: '0.8s'}}>
                            <Link href="/contact" className="bg-offWhite text-primary px-10 py-5 rounded-full font-semibold text-lg hover:bg-offWhite/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3">
                                Contact Media Desk
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                                </svg>
                            </Link>
                            <Link href="/news" className="border border-offWhite text-offWhite px-10 py-5 rounded-full font-semibold text-lg hover:bg-offWhite hover:text-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3">
                                Browse News Archive
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
