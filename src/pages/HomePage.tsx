
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { SERVICES_DATA, PORTFOLIO_DATA, TESTIMONIALS_DATA, PROCESS_STEPS, CITIES_DATA, WHY_CHOOSE_US_DATA, PARTNERS_DATA, BLOG_DATA, FINEST_PROPERTIES_DATA } from '../constants';
import { Service, Testimonial, BlogPost } from '../types';
import { XIcon, CalendarIcon, SparklesIcon, QuoteIcon } from '../components/Icons';
import { useNavigate } from "react-router-dom";



const heroSlides = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80',
        title: 'Crafting Unforgettable Moments',
        tagline: 'From grand weddings to exclusive corporate events, we bring your vision to life.'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1920&q=80',
        title: 'Corporate Excellence',
        tagline: 'Executing professional events that reflect your brand’s prestige.'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1920&q=80',
        title: 'Electrifying Live Events',
        tagline: 'Producing world-class concerts and live shows that captivate audiences.'
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=1920&q=80',
        title: 'Royal & Luxury Celebrations',
        tagline: 'Turning your dream celebration into a majestic reality.'
    },
    {
         id: 5,
         image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1920&q=80',
         title: 'Strategic Gatherings',
         tagline: 'Impactful conferences and offsites tailored to your business goals.'
    }
];

const Hero: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const nextSlide = useCallback(() => {
        setCurrentIndex(prev => (prev + 1) % heroSlides.length);
    }, []);
    
    useEffect(() => {
        const timer = setTimeout(nextSlide, 5000);
        return () => clearTimeout(timer);
    }, [currentIndex, nextSlide]);


    return (
        <section className="relative h-screen flex items-center justify-center text-center text-white bg-brand-dark overflow-hidden">
            {/* Slide Container */}
            <div className="absolute inset-0 z-0">
                {heroSlides.map((slide, index) => (
                     <div
                        key={slide.id}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                        {/* Image Tag for reliability */}
                        <img 
                            src={slide.image} 
                            alt={slide.title} 
                            className={`absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[8000ms] ease-linear ${index === currentIndex ? 'scale-110' : 'scale-100'}`}
                        />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/50"></div>
                    </div>
                ))}
            </div>

            {/* Global Tint Overlay - Theme Color Hint */}
            <div className="absolute inset-0 bg-brand-gold/10 z-10 pointer-events-none mix-blend-overlay"></div>

            <div className="relative z-20 p-4 flex flex-col items-center animate-fadeInUp w-full max-w-6xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-widest leading-tight drop-shadow-lg">
                    {heroSlides[currentIndex].title}
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto font-light drop-shadow-md text-gray-100">
                    {heroSlides[currentIndex].tagline}
                </p>
                <Link
                    to="/contact"
                    className="mt-8 inline-block bg-brand-gold text-white font-bold py-3 px-8 rounded-sm hover:bg-brand-gold-light transition-colors duration-300 transform hover:scale-105 shadow-lg border border-transparent"
                >
                    Plan Your Event
                </Link>
            </div>

            <style>{`
                 @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeInUp {
                    animation: fadeInUp 0.8s ease-out forwards;
                    animation-delay: 0.5s;
                    opacity: 0;
                }
                 @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-out forwards;
                }
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #43af98;
                    border-radius: 4px;
                }
            `}</style>
        </section>
    );
};



const AboutPreview: React.FC = () => {
    const navigate = useNavigate();  // <-- FIXED HERE

    return (
        <section className="py-20 bg-transparent">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                
                {/* LEFT BOX */}
                <div className="order-2 md:order-1 scroll-target p-8 bg-white/30 dark:bg-black/30 backdrop-blur-sm rounded-xl shadow-lg 
                                h-[433px] flex flex-col">
                    <h2 className="text-4xl font-heading text-brand-dark dark:text-white">
                        About <span className="text-brand-gold">KaSha</span>
                    </h2>
                    <div className="w-20 h-1 bg-brand-gold my-4"></div>

                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        KaSha is a premium pan-India event management brand offering end-to-end solutions for weddings,
                        corporate events, and large-scale activations. We bring visions to life through meticulous planning,
                        creative design, and flawless execution.
                    </p>

                    {/* BUTTON — BOTTOM RIGHT */}
                    <button
                        onClick={() => navigate('/about')}
                        className="mt-auto self-end px-5 py-2 bg-brand-gold text-white font-semibold rounded-lg 
                                   hover:bg-brand-gold-light transition-all duration-300"
                    >
                        Learn More →
                    </button>

                </div>

                {/* RIGHT IMAGE */}
                <div className="order-1 md:order-2 scroll-target" style={{ transitionDelay: '200ms' }}>
                    <img 
                        src="https://github.com/kashaevent/asset-images/blob/11eb572a793abbae3fbe61a864121c0f12fb776d/Kasha/About-Section/A_luxurious_Indian_wedding_man_kasha_ai.png?raw=true"
                        alt="KaSha Team"
                        className="rounded-lg shadow-2xl w-[700px] h-[433px] object-cover"
                    />
                </div>
            </div>
        </section>
    );
};


const ServicesPreview: React.FC<{ services: Service[] }> = ({ services }) => (
    <section className="py-20 bg-white/40 dark:bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 scroll-target">
                <h2 className="text-4xl font-heading text-brand-dark dark:text-white">Our Services</h2>
                <div className="w-20 h-1 bg-brand-gold my-4 mx-auto"></div>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">From intimate weddings to grand corporate galas, we deliver excellence.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <Link to={`/services/${service.slug}`} key={service.id} className="scroll-target group block bg-white dark:bg-brand-dark rounded-lg overflow-hidden shadow-lg hover:shadow-brand-gold/40 transform hover:-translate-y-2 transition-all duration-300" style={{ transitionDelay: `${index * 100}ms` }}>
                        <div className="relative h-48">
                            <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-heading text-brand-dark dark:text-white group-hover:text-brand-gold transition-colors">{service.title}</h3>
                            <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">{service.shortDescription}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="text-center mt-12 scroll-target">
                 <Link to="/services" className="text-brand-dark dark:text-white font-semibold hover:text-brand-gold transition-colors border-b-2 border-brand-gold pb-1">
                    View All Services &rarr;
                </Link>
            </div>
        </div>
    </section>
);

const FinestProperties: React.FC = () => (
    <section className="py-20 bg-white/40 dark:bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-12 scroll-target">
                <h2 className="text-4xl font-heading text-brand-dark dark:text-white">The Finest Venues</h2>
                <div className="w-20 h-1 bg-brand-gold my-4 mx-auto"></div>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    We partner with India's most iconic hotel chains and heritage properties to offer unparalleled settings for your weddings and corporate gatherings.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {FINEST_PROPERTIES_DATA.map((property, index) => (
                    <div key={property.id} className="scroll-target group relative overflow-hidden rounded-lg shadow-xl cursor-pointer" style={{ transitionDelay: `${index * 100}ms` }}>
                        {/* Image Container */}
                        <div className="aspect-[4/3] overflow-hidden">
                            <img 
                                src={property.imageUrl} 
                                alt={property.name} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-300"></div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                            <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-1 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                                {property.category}
                            </p>
                            <h3 className="text-2xl font-heading font-bold mb-1 group-hover:text-brand-gold transition-colors duration-300">
                                {property.name}
                            </h3>
                            <div className="flex items-center text-gray-300 text-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="mr-1">📍</span> {property.location}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const OurProcess: React.FC = () => (
    <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 scroll-target">
                <h2 className="text-4xl font-heading text-brand-dark dark:text-white">Our Path to Perfection</h2>
                <div className="w-20 h-1 bg-brand-gold my-4 mx-auto"></div>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">A streamlined process ensures flawless execution and unforgettable results.</p>
            </div>
            <div className="relative flex flex-col md:flex-row justify-between max-w-5xl mx-auto">
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-px border-t-2 border-dashed border-brand-gold/40 -translate-y-1/2 -mt-10"></div>
                
                {PROCESS_STEPS.map((step, index) => (
                    <div key={index} className="scroll-target relative z-10 flex-1 text-center p-4" style={{ transitionDelay: `${index * 150}ms` }}>
                        <div className="flex items-center justify-center w-24 h-24 mx-auto mb-4 bg-white dark:bg-brand-dark rounded-full border-2 border-brand-gold shadow-lg">
                           <div className="flex items-center justify-center w-20 h-20 bg-brand-light/50 dark:bg-brand-gray/50 rounded-full">
                                <step.icon className="text-brand-gold h-12 w-12"/>
                            </div>
                        </div>
                        <h3 className="text-xl font-heading font-bold text-brand-dark dark:text-white mb-2">{step.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm px-4">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const WhyChooseUs: React.FC = () => (
    <section className="py-20 bg-white/40 dark:bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 scroll-target">
                <h2 className="text-4xl font-heading text-brand-dark dark:text-white">Why Choose Us</h2>
                <div className="w-20 h-1 bg-brand-gold my-4 mx-auto"></div>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">What sets us apart in the world of luxury event management.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {WHY_CHOOSE_US_DATA.map((item, index) => (
                    <div key={item.title} className="scroll-target p-8 text-center bg-white dark:bg-brand-dark rounded-lg shadow-lg border border-transparent hover:border-brand-gold transition-all duration-300" style={{ transitionDelay: `${index * 150}ms` }}>
                        <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4">
                            <item.icon className="text-brand-gold" />
                        </div>
                        <h3 className="text-xl font-heading text-brand-gold mb-2">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);


const PortfolioPreview: React.FC = () => (
    <section className="py-20 bg-white/40 dark:bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 scroll-target">
                <h2 className="text-4xl font-heading text-brand-dark dark:text-white">Our Portfolio</h2>
                <div className="w-20 h-1 bg-brand-gold my-4 mx-auto"></div>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">A glimpse into the magical moments we've created.</p>
            </div>
            
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {PORTFOLIO_DATA.slice(0, 8).map((item, index) => (
                    <div key={item.id} className="scroll-target group relative overflow-hidden rounded-lg shadow-lg break-inside-avoid cursor-pointer" style={{ transitionDelay: `${index * 50}ms` }}>
                        <img 
                            src={item.imageUrl} 
                            alt={item.title} 
                            className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                        <div className="absolute inset-0 p-6 flex flex-col justify-end text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                            <p className="text-xs uppercase tracking-widest text-brand-gold font-semibold">{item.category}</p>
                            <h3 className="text-xl font-heading font-bold mt-1">{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
            
             <div className="text-center mt-12 scroll-target">
                 <Link to="/portfolio" className="text-brand-dark dark:text-white font-semibold hover:text-brand-gold transition-colors border-b-2 border-brand-gold pb-1">
                    Explore Full Gallery &rarr;
                </Link>
            </div>
        </div>
    </section>
);


const BrowseByCity: React.FC = () => (
    <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 scroll-target">
                <h2 className="text-4xl font-heading text-brand-dark dark:text-white">Events Across India</h2>
                <div className="w-20 h-1 bg-brand-gold my-4 mx-auto"></div>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Creating magic in every corner of the nation, from royal palaces to sun-kissed beaches.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {CITIES_DATA.map((city, index) => (
                    <div key={city.name} className="scroll-target relative group overflow-hidden rounded-lg shadow-lg h-64" style={{ transitionDelay: `${index * 100}ms` }}>
                         <img src={city.imageUrl} alt={city.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                         <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent"></div>
                         <h3 className="absolute bottom-4 left-4 text-white text-2xl font-heading font-bold">{city.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const BlogPreview: React.FC<{ posts: BlogPost[] }> = ({ posts }) => {
    if (!posts || posts.length === 0) return null;

    return (
        <section className="py-20 bg-white/40 dark:bg-black/40 backdrop-blur-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 scroll-target">
                    <h2 className="text-4xl font-heading text-brand-dark dark:text-white">Event Insights</h2>
                    <div className="w-20 h-1 bg-brand-gold my-4 mx-auto"></div>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">The latest news, trends, and inspiration from our event experts.</p>
                </div>

                <div className="flex overflow-x-auto space-x-8 pb-8 scrollbar-hide scroll-target" style={{ scrollSnapType: 'x mandatory' }}>
                    {posts.map(post => (
                        <div key={post.id} className="flex-shrink-0 w-full sm:w-[45%] md:w-[30%] bg-white dark:bg-brand-dark rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2" style={{ scrollSnapAlign: 'start' }}>
                            <Link to={`/blog/${post.slug}`} className="block group">
                                <div className="h-56 overflow-hidden">
                                    <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-2">
                                        <CalendarIcon className="mr-2" />
                                        <span>{post.date}</span>
                                    </div>
                                    <h3 className="font-heading text-xl text-brand-dark dark:text-white mb-3 group-hover:text-brand-gold transition-colors duration-300 h-20 overflow-hidden">{post.title}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 h-24 overflow-hidden">{post.excerpt}</p>
                                    <span className="inline-block mt-4 text-brand-gold font-semibold text-sm">Read More &rarr;</span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8 scroll-target">
                    <Link to="/blog" className="text-brand-dark dark:text-white font-semibold hover:text-brand-gold transition-colors border-b-2 border-brand-gold pb-1">
                        View All Articles &rarr;
                    </Link>
                </div>
            </div>
            <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; } .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
        </section>
    );
};


const TestimonialSlider: React.FC<{ testimonials: Testimonial[] }> = ({ testimonials }) => {
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    return (
        <section className="py-20 bg-transparent overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-target">
                <h2 className="text-4xl font-heading text-brand-dark dark:text-white">Words of Trust</h2>
                <div className="w-20 h-1 bg-brand-gold my-4 mx-auto"></div>
            </div>
            <div 
                className="relative w-full mt-12 group scroll-target"
                style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
            >
                <div className="flex animate-scroll group-hover:[animation-play-state:paused]">
                    {duplicatedTestimonials.map((testimonial, index) => (
                        <div key={`${testimonial.id}-${index}`} className="flex-shrink-0 w-full sm:w-1/2 lg:w-[30%] xl:w-1/4 p-4">
                           <div className="bg-white/50 dark:bg-brand-dark/60 backdrop-blur-md p-8 rounded-lg shadow-2xl h-full flex flex-col items-center text-center relative border border-white/20 dark:border-gray-700">
                                <QuoteIcon className="text-brand-gold/30 absolute -top-4 -left-4" />
                                <img src={testimonial.clientImageUrl} alt={testimonial.author} className="w-24 h-24 rounded-full mb-4 border-4 border-brand-gold shadow-xl object-cover" />
                                <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-6 flex-grow">"{testimonial.quote}"</p>
                                <div className="w-12 h-px bg-brand-gold my-2"></div>
                                <p className="font-bold text-brand-gold tracking-wider font-heading">{testimonial.author}</p>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.event}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
             <style>{`
                @keyframes scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 60s linear infinite;
                }
            `}</style>
        </section>
    );
};

const OurPartners: React.FC = () => {
    const scrollingPartners = [...PARTNERS_DATA, ...PARTNERS_DATA];

    return (
        <section className="py-24 bg-white/40 dark:bg-black/40 backdrop-blur-sm overflow-hidden border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center scroll-target">
                <h2 className="text-4xl font-heading text-brand-dark dark:text-white">Trusted by Industry Leaders</h2>
                <div className="w-24 h-1 bg-brand-gold my-6 mx-auto"></div>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                    Proudly collaborating with world-renowned brands to deliver excellence.
                </p>
            </div>

            <div className="relative w-full scroll-target">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none opacity-50"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none opacity-50"></div>
                
                <div className="flex w-max animate-marquee group">
                    {scrollingPartners.map((partner, index) => (
                        <img 
                            key={`${partner.name}-${index}`}
                            src={partner.logoUrl} 
                            alt={partner.name} 
                            className="h-12 md:h-16 w-auto mx-8 sm:mx-12 md:mx-16 object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer dark:brightness-200 dark:hover:brightness-100"
                            title={partner.name}
                        />
                    ))}
                </div>
            </div>
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

const EarlyBirdModal: React.FC<{ isOpen: boolean; onClose: () => void; onClaim: () => void }> = ({ isOpen, onClose, onClaim }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
            <div className="relative bg-white dark:bg-brand-dark p-8 rounded-xl shadow-2xl max-w-md w-full text-center border-2 border-brand-gold overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 left-0 w-full h-2 bg-brand-gold"></div>
                
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                    <XIcon />
                </button>

                <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                    <SparklesIcon className="w-10 h-10 text-brand-gold" />
                </div>

                <h2 className="text-3xl font-heading font-bold text-brand-dark dark:text-white mb-2">
                    Early Bird Offer!
                </h2>
                <p className="text-brand-gold font-bold text-lg uppercase tracking-widest mb-4">
                    Get Flat 10% OFF
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    Planning ahead? Book your event at least 3 months in advance and unlock exclusive savings on our service fee.
                </p>

                <div className="space-y-3">
                    <button
                        onClick={onClaim}
                        className="w-full bg-brand-gold text-brand-dark font-bold py-3.5 rounded-md hover:bg-brand-gold-light hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                    >
                        Claim This Offer
                    </button>
                    <button 
                        onClick={onClose} 
                        className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-dark dark:hover:text-white transition-colors"
                    >
                        No thanks, I'll pass
                    </button>
                </div>
            </div>
        </div>
    );
};


const LeadGenModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    const form = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        event: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (form.current) {
            emailjs.sendForm('service_fwxpczd', 'template_nmwibj6', form.current, 'xsu184T-6URSu1qfu')
                .then((result) => {
                    console.log('SUCCESS!', result.text);
                    alert("Thank you! Our team will contact you shortly with a personalized quote.");
                    setFormData({
                        firstname: '',
                        lastname: '',
                        email: '',
                        phone: '',
                        event: '',
                    });
                    onClose();
                }, (error) => {
                    console.log('FAILED...', error.text);
                    alert("Failed to send message. Please try again later.");
                });
        }
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
            <div className="relative bg-white dark:bg-brand-dark p-8 rounded-xl shadow-2xl max-w-lg w-full border border-gray-200 dark:border-brand-gold/30">
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                    <XIcon />
                </button>

                <div className="text-center mb-8">
                    <h2 className="text-2xl font-heading font-bold text-brand-dark dark:text-white mb-2">
                        Let's Create Magic
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Fill in your details below for a free consultation and personalized quote.
                    </p>
                </div>

                <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <input type="text" name="firstname" placeholder="First Name" required value={formData.firstname} onChange={handleInputChange} className="w-full bg-gray-50 dark:bg-black/20 border border-gray-300 dark:border-gray-600 p-3 rounded-md focus:ring-brand-gold focus:border-brand-gold outline-none transition-shadow" />
                        <input type="text" name="lastname" placeholder="Last Name" required value={formData.lastname} onChange={handleInputChange} className="w-full bg-gray-50 dark:bg-black/20 border border-gray-300 dark:border-gray-600 p-3 rounded-md focus:ring-brand-gold focus:border-brand-gold outline-none transition-shadow" />
                    </div>
                    <input type="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleInputChange} className="w-full bg-gray-50 dark:bg-black/20 border border-gray-300 dark:border-gray-600 p-3 rounded-md focus:ring-brand-gold focus:border-brand-gold outline-none transition-shadow" />
                    <input type="tel" name="phone" placeholder="Phone Number" required value={formData.phone} onChange={handleInputChange} className="w-full bg-gray-50 dark:bg-black/20 border border-gray-300 dark:border-gray-600 p-3 rounded-md focus:ring-brand-gold focus:border-brand-gold outline-none transition-shadow" />
                    <select name="event" value={formData.event} onChange={handleInputChange} className="w-full bg-gray-50 dark:bg-black/20 border border-gray-300 dark:border-gray-600 p-3 rounded-md focus:ring-brand-gold focus:border-brand-gold outline-none transition-shadow text-gray-500 dark:text-gray-400">
                        <option value="">Select Event Type (Optional)</option>
                        <option value="wedding">Wedding</option>
                        <option value="corporate">Corporate</option>
                        <option value="social">Social Gathering</option>
                    </select>
                    
                    <button 
                        type="submit" 
                        className="w-full bg-brand-dark dark:bg-brand-gold text-white dark:text-brand-dark font-bold py-3.5 rounded-md hover:bg-brand-gold dark:hover:bg-white hover:text-brand-dark transition-all duration-300 mt-2 shadow-lg"
                    >
                        Get My Quote
                    </button>
                </form>
            </div>
        </div>
    );
};

const HomePage: React.FC = () => {
  const [showEarlyBird, setShowEarlyBird] = useState(false);
  const [showLeadGen, setShowLeadGen] = useState(false);

  useEffect(() => {
    // Check session storage to only show once per session
    const hasSeenOffer = sessionStorage.getItem('kasha_has_seen_offer');
    if (!hasSeenOffer) {
        const timer = setTimeout(() => {
            setShowEarlyBird(true);
        }, 2000); // Show after 2 seconds
        return () => clearTimeout(timer);
    }
  }, []);

  const closeEarlyBird = () => {
      setShowEarlyBird(false);
      sessionStorage.setItem('kasha_has_seen_offer', 'true');
      // Open lead gen form after closing early bird, as requested
      setTimeout(() => {
          setShowLeadGen(true);
      }, 500);
  };

  const closeLeadGen = () => {
      setShowLeadGen(false);
  };

  return (
    <div>
      <Hero />
      <AboutPreview />
      <ServicesPreview services={SERVICES_DATA.slice(0, 4)} />
      <FinestProperties />
      <OurProcess />
      <WhyChooseUs />
      <PortfolioPreview />
      <BrowseByCity />
      <BlogPreview posts={BLOG_DATA} />
      <TestimonialSlider testimonials={TESTIMONIALS_DATA} />
      <OurPartners />
      
      {/* Modals */}
      <EarlyBirdModal isOpen={showEarlyBird} onClose={closeEarlyBird} onClaim={closeEarlyBird} />
      <LeadGenModal isOpen={showLeadGen} onClose={closeLeadGen} />
    </div>
  );
};

export default HomePage;
