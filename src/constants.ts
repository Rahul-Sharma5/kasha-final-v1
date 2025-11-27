
import { Service, PortfolioItem, Testimonial, TeamMember, WhyChooseUsItem, JobOpening, BlogPost } from './types';
import { DesignIcon, PlanIcon, ProductionIcon, ExecutionIcon, MapPinIcon, PuzzlePieceIcon, SparklesIcon } from './components/Icons';

export const BRAND_INFO = {
  name: 'KaSha',
  tagline: 'India’s Pan-India Event, Wedding & Corporate Experience Company',
  email: 'info@kasha.co.in',
  phones: ['+91 9810987169', '+91 9720588808'],
  website: 'www.kasha.co.in',
  location: 'Delhi, India',
  social: {
    instagram: 'https://www.instagram.com/kasha.events',
    linkedin: 'https://www.linkedin.com/company/kasha-events/',
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com',
  },
};

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Cost Calculator', path: '/cost-calculator' },
  { name: 'Our Team', path: '/team' },
  { name: 'Blog', path: '/blog' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
];

export const SERVICES_DATA: Service[] = [
  {
    id: 1,
    slug: 'weddings',
    title: 'Weddings',
    shortDescription: 'Crafting unforgettable unions with elegance and precision.',
    longDescription: 'From grand ceremonies to intimate gatherings, we manage every detail of your special day. We offer a comprehensive suite of services to ensure a seamless and magical experience, whether you need a full-service solution or specific expertise.',
    imageUrl: 'https://github.com/kashaevent/asset-images/raw/main/Kasha/wedding-showcase/luxury-wed1.jpeg?raw=true',
    process: [
      { title: 'Design', description: 'Conceptualizing your dream theme and aesthetic.' },
      { title: 'Plan', description: 'Meticulous planning of every detail, vendor, and timeline.' },
      { title: 'Production', description: 'Bringing the vision to life with flawless execution.' },
      { title: 'Execution', description: 'On-site management for a stress-free celebration.' },
    ],
    showcaseImages: [
        'https://github.com/kashaevent/asset-images/raw/main/Kasha/wedding-showcase/25%20Wedding%20Themes%20Inspired%20by%20Stunning%20Color%20Palettes%20-%20Insiderlyfe.jpeg?raw=true',
        'https://github.com/kashaevent/asset-images/raw/main/Kasha/wedding-showcase/70+%20Mandap%20Decor%20Ideas%20&%20Designs%20For%20Weddings!.jpeg?raw=true',
        'https://github.com/kashaevent/asset-images/raw/main/Kasha/wedding-showcase/Dreamy%20Nighttime%20Vidhi%20Setup%20with%20Twinkling%20Lights%20and%20Fresh%20Florals.jpeg?raw=true',
    ],
    detailedServices: {
        title: 'From grand visions to the finest details, we cover every aspect of your special day.',
        items: [
            { title: 'Venue Selection', description: 'Discovering and securing the perfect backdrop for your celebration.' },
            { title: 'Hotel & Destination Management', description: 'Coordinating seamless accommodation and travel for you and your guests.' },
            { title: 'Theme Design & Decor', description: 'Creating immersive atmospheres with stunning floral arrangements and bespoke decor.' },
            { title: 'Caterers & Cuisine', description: 'Curating exquisite culinary experiences tailored to your tastes and preferences.' },
            { title: 'Designer Coordination', description: 'Liaising with top designers to ensure your wedding attire is nothing short of perfection.' },
            { title: 'Photography & Videography', description: 'Capturing every precious moment with a team of elite creative professionals.' },
            { title: 'Pagdiwala & Safawala', description: 'Arranging traditional and elegant headwear for a touch of regal splendor.' },
            { title: 'Mehendiwala & Dholwala', description: 'Organizing vibrant entertainment and traditional artists for your festive ceremonies.' },
            { title: 'Transportation & Logistics', description: 'Managing all guest and vendor transit with precision for a smooth experience.' },
        ]
    },
    serviceFlexibility: {
        title: 'A Flexible Partnership Model',
        description: "We are your one-stop solution for the entire wedding celebration. However, we also understand that every client's needs are unique. We work on a service-based model as well, so if you require one or multiple specific services from our end, we are happy to tailor our partnership to fit your exact requirements."
    }
  },
  {
    id: 4,
    slug: 'destination-weddings',
    title: 'Destination Weddings',
    shortDescription: 'Exotic locales and seamless logistics for your perfect getaway celebration.',
    longDescription: 'Escape the ordinary and say "I do" in paradise. Our Destination Wedding service handles the complex logistics of travel, accommodation, and cross-border vendor management, allowing you to relax and enjoy a multi-day celebration with your loved ones in breathtaking locations like Goa, Udaipur, Thailand, or Dubai.',
    imageUrl: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=800&q=80',
    process: [
      { title: 'Venue Scouting', description: 'Finding the perfect resort or palace that fits your vision and budget.' },
      { title: 'Travel Logistics', description: 'Managing flights, visas, and airport transfers for all guests.' },
      { title: 'Hospitality', description: 'RSVP management, room allocation, and welcome experiences.' },
      { title: 'Local Coordination', description: 'Liaising with local authorities and vendors for smooth execution.' },
    ],
    showcaseImages: [
        'https://images.unsplash.com/photo-1583939003579-56d7a3a41da2?w=800&q=80',
        'https://images.unsplash.com/photo-1542397284385-6010376c5337?w=800&q=80',
        'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80',
    ],
    detailedServices: {
        title: 'Your Passport to a Stress-Free Wedding',
        items: [
            { title: 'Location & Venue Sourcing', description: 'We scour the globe to find the perfect backdrop, negotiating the best rates for you.' },
            { title: 'Guest Management App', description: 'A dedicated digital platform for guests to view itineraries and manage bookings.' },
            { title: 'Welcome Hampers', description: 'Curated local goodies and essentials to greet your guests upon arrival.' },
            { title: 'Multi-Day Itinerary', description: 'Planning welcome dinners, pool parties, sangeets, and the main ceremony.' },
            { title: 'Logistics Command Center', description: 'A dedicated 24/7 desk at the hotel to assist guests with any needs.' },
            { title: 'Local Vendor Curation', description: 'Sourcing the best local makeup artists, decorators, and entertainers.' },
        ]
    },
    serviceFlexibility: {
        title: 'Anywhere You Dream',
        description: "Whether it's a domestic destination like Jaipur or an international one like Bali, our team has the network and expertise to execute flawless events globally."
    }
  },
  {
    id: 2,
    slug: 'corporate-events',
    title: 'Corporate Events',
    shortDescription: 'Executing professional events that reflect your brand’s prestige.',
    longDescription: 'We specialize in creating impactful corporate events that elevate your brand and leave a lasting impression. From high-profile product launches and international conferences to exclusive brand activations, our team provides strategic planning and flawless execution to ensure your brand message resonates with your audience and achieves its objectives.',
    imageUrl: 'https://images.unsplash.com/photo-1543196614-e046c7d3d82e?w=800&q=80',
    process: [
      { title: 'Strategy & Ideation', description: 'Developing a core event concept that aligns perfectly with your strategic brand goals.' },
      { title: 'Meticulous Planning', description: 'Handling all logistics, including venue sourcing, technical specifications, and scheduling.' },
      { title: 'World-Class Production', description: 'Managing all fabrication, stage design, and audio-visual requirements for a stunning show.' },
      { title: 'Flawless Execution', description: 'Providing seamless on-site management to ensure a professional and impactful event.' },
    ],
    showcaseImages: [
        'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&q=80',
        'https://images.unsplash.com/photo-1560523159-4a9692d22268?w=800&q=80',
        'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80',
    ],
    detailedServices: {
        title: 'A comprehensive suite of services to ensure a flawless corporate event.',
        items: [
            { title: 'Brand Theme Creation', description: 'We develop a cohesive brand theme that integrates your company\'s identity into every visual and interactive element.' },
            { title: 'Stage Design & Fabrication', description: 'Our team designs and builds stunning, custom stages and sets equipped with cutting-edge technology and branding.' },
            { title: 'Sound & Lighting', description: 'We provide professional-grade sound systems and sophisticated lighting to create the perfect ambiance and ensure clarity.' },
            { title: 'Technical Production', description: 'From LED walls to live streaming, we manage all technical aspects to deliver a seamless and engaging production.' },
            { title: 'MC / Anchors', description: 'We source professional MCs and anchors who can expertly host your event and engage the audience.' },
            { title: 'Promoters & Staffing', description: 'Our experienced and well-trained event staff ensure your guests receive a professional and welcoming experience.' },
            { title: 'Printing & Collateral', description: 'We handle the design and printing of all event materials, including lanyards, passes, brochures, and signage.' },
            { title: 'Corporate Gifting', description: 'Elevate your guest experience with curated corporate gifts that reflect your brand\'s prestige and leave a lasting impression.' },
            { title: 'Flawless Event Execution', description: 'Our on-site management team oversees every detail, proactively solving challenges to ensure your event runs perfectly.' },
        ]
    },
    serviceFlexibility: {
        title: 'Scalable for Any Corporate Need',
        description: "Whether it's an exclusive C-suite retreat, a large-scale international conference, or a dynamic product launch, our services are fully scalable. We tailor our production and management to fit the size, scope, and objectives of your event, ensuring impactful results every time."
    }
  },
  {
    id: 3,
    slug: 'concerts-live-shows',
    title: 'Concerts & Live Shows',
    shortDescription: 'Producing electrifying live experiences for massive audiences.',
    longDescription: 'We manage large-scale concerts and live shows, handling artist management, stage production, sound & lighting, and crowd control to create unforgettable entertainment experiences.',
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
    process: [
      { title: 'Conceptualization', description: 'Designing the show flow and artist lineup.' },
      { title: 'Technical Planning', description: 'Arranging state-of-the-art sound, light, and visuals.' },
      { title: 'Production', description: 'Building the infrastructure for a world-class show.' },
      { title: 'Execution', description: 'Managing the live event for a seamless performance.' },
    ],
    showcaseImages: [
        'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
        'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
    ],
    detailedServices: {
        title: 'End-to-end production for world-class live entertainment.',
        items: [
            { title: 'Artist & Rider Management', description: 'Securing talent and managing all contractual and hospitality requirements.' },
            { title: 'Stage & Production Design', description: 'Creating immersive stages with cutting-edge lighting, sound, and visual effects.' },
            { title: 'Venue Sourcing & Management', description: 'Finding and preparing the perfect venue for acoustics and audience capacity.' },
            { title: 'Ticketing & Access Control', description: 'Implementing secure and efficient systems for ticket sales and entry management.' },
            { title: 'Security & Crowd Management', description: 'Ensuring a safe and enjoyable environment for all attendees and performers.' },
            { title: 'Technical Crew & Support', description: 'Providing experienced engineers and technicians for a flawless live production.' },
        ]
    },
    serviceFlexibility: {
        title: 'Scalable Production Solutions',
        description: "From intimate gigs to stadium tours, we scale our production capabilities to match the magnitude of your event. We can handle full turnkey production or collaborate with your team on specific technical aspects."
    }
  },
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
    { id: 1, category: 'weddings', title: 'Royal Udaipur Wedding', imageUrl: 'https://images.unsplash.com/photo-1519225421980-715cb0202128?w=800&q=80' },
    { id: 2, category: 'corporate', title: 'Tech Summit 2023', imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80' },
    { id: 3, category: 'concerts', title: 'Sunburn Arena', imageUrl: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80' },
    { id: 4, category: 'weddings', title: 'Goa Beachside Nuptials', imageUrl: 'https://images.unsplash.com/photo-1583939003579-56d7a3a41da2?w=800&q=80' },
    { id: 5, category: 'activations', title: 'Auto Expo Launch', imageUrl: 'https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&q=80' },
    { id: 6, category: 'sports', title: 'City Marathon', imageUrl: 'https://images.unsplash.com/photo-1552674605-46d99a9e195d?w=800&q=80' },
    { id: 7, category: 'corporate', title: 'Annual Gala Dinner', imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80' },
    { id: 8, category: 'weddings', title: 'Delhi Farmhouse Wedding', imageUrl: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80' },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
    { id: 1, quote: "Absolutely magical! The team took care of everything.", author: "Priya & Rahul", event: "Wedding in Jaipur", clientImageUrl: "https://randomuser.me/api/portraits/women/1.jpg" },
    { id: 2, quote: "Professional, precise, and perfect execution.", author: "Amit Singhania", event: "Corporate Gala", clientImageUrl: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 3, quote: "The concert setup was mind-blowing. Truly world-class.", author: "Rohan Mehta", event: "Music Festival Organizer", clientImageUrl: "https://randomuser.me/api/portraits/men/45.jpg" },
];

export const PROCESS_STEPS = [
    { icon: DesignIcon, title: 'Design', description: 'Conceptualizing your unique story with creative themes and visuals.' },
    { icon: PlanIcon, title: 'Plan', description: 'Meticulous logistics, vendor coordination, and timeline scheduling.' },
    { icon: ProductionIcon, title: 'Production', description: 'Building the infrastructure and setting the stage for the experience.' },
    { icon: ExecutionIcon, title: 'Execution', description: 'Flawless on-site management ensuring everything runs smoothly.' },
];

export const CITIES_DATA = [
    { name: 'Delhi', imageUrl: 'https://github.com/kashaevent/asset-images/raw/main/Kasha/Cities/delhi.jpeg?raw=true' },
    { name: 'Mumbai', imageUrl: 'https://github.com/kashaevent/asset-images/raw/main/Kasha/Cities/mumbai.jpeg?raw=true' },
    { name: 'Goa', imageUrl: 'https://github.com/kashaevent/asset-images/raw/main/Kasha/Cities/goa.jpeg?raw=true' },
    { name: 'Udaipur', imageUrl: 'https://github.com/kashaevent/asset-images/raw/main/Kasha/Cities/udaipur.jpeg?raw=true' },
    { name: 'Jaipur', imageUrl: 'https://github.com/kashaevent/asset-images/raw/main/Kasha/Cities/jaipur.jpeg?raw=true' },
    { name: 'Bangalore', imageUrl: 'https://github.com/kashaevent/asset-images/raw/main/Kasha/Cities/bangalore.jpeg?raw=true' },
];

export const WHY_CHOOSE_US_DATA: WhyChooseUsItem[] = [
    { icon: MapPinIcon, title: 'Pan-India Reach', description: 'Executing extraordinary events across all major cities and destinations in India.' },
    { icon: SparklesIcon, title: 'Creative Excellence', description: 'Innovative concepts and stunning designs that make every event unique.' },
    { icon: PuzzlePieceIcon, title: 'End-to-End Service', description: 'Comprehensive management from initial concept to final execution.' },
];

export const PARTNERS_DATA = [
    { name: 'Marriott', logoUrl: 'https://github.com/kashaevent/asset-images/raw/main/Kasha/partners/Marriott%20International%20Marriott%20Hotels%20&%20Resorts%20Courtyard%20By%20Marriott%20PNG.jpeg?raw=true' },
    { name: 'Hyatt', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Hyatt_Hotels_Corporation_logo.svg/512px-Hyatt_Hotels_Corporation_logo.svg.png' },
    { name: 'Taj Hotels', logoUrl: 'https://github.com/kashaevent/asset-images/raw/main/Kasha/partners/pngegg.png?raw=true' },
    { name: 'Oberoi Hotels', logoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Oberoi_Hotels_%26_Resorts_logo.svg/512px-Oberoi_Hotels_%26_Resorts_logo.svg.png' },
];

export const FINEST_PROPERTIES_DATA = [
    {
        id: 1,
        name: 'Umaid Bhawan Palace',
        location: 'Jodhpur',
        imageUrl: 'https://github.com/kashaevent/asset-images/raw/main/Kasha/Hotels-Venue-Section/umaid-bhawan-palace.jpg?raw=true',
        category: 'Royal Heritage'
    },
    {
        id: 2,
        name: 'The Oberoi Udaivilas',
        location: 'Udaipur',
        imageUrl: 'https://github.com/kashaevent/asset-images/raw/main/Kasha/Hotels-Venue-Section/the-oberoi-udaivilas-udaipur.jpeg?raw=true',
        category: 'Luxury Resort'
    },
    {
        id: 3,
        name: 'Taj Falaknuma Palace',
        location: 'Hyderabad',
        imageUrl: 'https://github.com/kashaevent/asset-images/raw/main/Kasha/Hotels-Venue-Section/The-Taj-Falaknuma-Palace.jpeg?raw=true',
        category: 'Palace'
    },
    {
        id: 4,
        name: 'Rambagh Palace',
        location: 'Jaipur',
        imageUrl: 'https://github.com/kashaevent/asset-images/raw/main/Kasha/Hotels-Venue-Section/Rambagh-Palace.jpeg?raw=true',
        category: 'Historic'
    },
    {
        id: 5,
        name: 'ITC Grand Bharat',
        location: 'Gurugram',
        imageUrl: 'https://github.com/kashaevent/asset-images/blob/main/Kasha/Hotels-Venue-Section/ITCGrandBharat.jpeg?raw=true',
        category: 'Retreat'
    },
    {
        id: 6,
        name: 'The Leela Palace',
        location: 'New Delhi',
        imageUrl: 'https://github.com/kashaevent/asset-images/blob/main/Kasha/Hotels-Venue-Section/Leela-Palace.jpeg?raw=true',
        category: 'Urban Luxury'
    }
];

export const TEAM_DATA: TeamMember[] = [
    { id: 1, name: "Mujeeb", role: "Founder & CEO", imageUrl: "https://github.com/kashaevent/asset-images/raw/main/Kasha/team/Mujeeb3.jpg?raw=true", bio: "Visionary leader with 15+ years in events.", expertise: "Strategic Planning" },
    { id: 2, name: "Rajat Tyagi", role: "Creative Director", imageUrl: "https://github.com/kashaevent/asset-images/raw/main/Kasha/team/Rajat.jpeg?raw=true", bio: "Award-winning designer with a flair for luxury.", expertise: "Decor & Aesthetics" },
    { id: 3, name: "Mateen", role: "Head of Operations", imageUrl: "https://github.com/kashaevent/asset-images/raw/main/Kasha/team/Mateen.jpeg?raw=true", bio: "Master of logistics ensuring flawless execution.", expertise: "Production Management" },
];

export const CAREERS_DATA: JobOpening[] = [
    { id: 1, title: "Senior Event Planner", location: "Delhi", type: "Full-time", description: "Lead large-scale wedding projects and client relationships." },
    { id: 2, title: "Production Manager", location: "Mumbai", type: "Contract", description: "Oversee on-site execution and vendor coordination for corporate events." },
    { id: 3, title: "Graphic Designer", location: "Remote", type: "Full-time", description: "Create visual assets for event branding and marketing." },
];

export const BLOG_DATA: BlogPost[] = [
    { id: 1, slug: "wedding-trends-2024", title: "Top Wedding Trends of 2024", author: "Sana Mir", date: "Oct 12, 2023", imageUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80", excerpt: "From sustainable decor to intimate gatherings, discover what's trending in the world of luxury weddings.", content: "<p>As we step into 2024, the wedding industry is witnessing a shift towards more personalized and sustainable celebrations. <strong>Sustainability</strong> is no longer just a buzzword but a core element of luxury weddings.</p><h3>1. Sustainable Decor</h3><p>Couples are opting for locally sourced flowers, potted plants, and biodegradable materials to reduce their carbon footprint.</p><h3>2. Intimate Gatherings</h3><p>Micro-weddings with a focus on high-quality guest experiences are becoming increasingly popular.</p>", tags: ["Trends", "Weddings", "Sustainability"] },
    { id: 2, slug: "corporate-events-guide", title: "Planning the Perfect Corporate Retreat", author: "Arjun Kapoor", date: "Sep 28, 2023", imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80", excerpt: "How to balance business and leisure to create a productive and memorable corporate offsite.", content: "<p>Corporate retreats are essential for team building and strategic planning. However, finding the right balance between work and play can be challenging.</p><h3>Define Objectives</h3><p>Clearly outline what you want to achieve. Is it team bonding, strategy, or relaxation?</p><h3>Choose the Right Venue</h3><p>A change of scenery can stimulate creativity. Consider locations that offer both conference facilities and leisure activities.</p>", tags: ["Corporate", "Planning", "Team Building"] },
    { id: 3, slug: "destination-wedding-checklist", title: "The Ultimate Destination Wedding Checklist", author: "Vikram Singh", date: "Aug 15, 2023", imageUrl: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=800&q=80", excerpt: "Everything you need to know before planning your dream wedding away from home.", content: "<p>Planning a destination wedding involves complex logistics. Here is a checklist to keep you on track.</p><ul><li><strong>12 Months Before:</strong> Choose a location and date.</li><li><strong>9 Months Before:</strong> Book venue and key vendors.</li><li><strong>6 Months Before:</strong> Send save-the-dates.</li></ul>", tags: ["Weddings", "Destination", "Checklist"] },
];

interface CalculatorDataType {
  eventTypes: {
    id: string;
    name: string;
    baseCost: number;
    perGuestCost: number;
    description: string;
    applicableAddons: string[];
  }[];
  addonCategories: {
    [key: string]: {
      category: string;
      items: {
        id: string;
        name: string;
        cost: number;
        perGuest: boolean;
      }[];
    };
  };
}

export const CALCULATOR_DATA: CalculatorDataType = {
    eventTypes: [
        { id: 'wedding', name: 'Luxury Wedding', baseCost: 500000, perGuestCost: 5000, description: 'Full service wedding planning, coordination, and basic decor execution.', applicableAddons: ['decor', 'entertainment', 'logistics', 'photography'] },
        { id: 'corporate', name: 'Corporate Conference', baseCost: 200000, perGuestCost: 2000, description: 'Professional conference setup, AV, and stage management.', applicableAddons: ['tech', 'decor', 'logistics'] },
        { id: 'social', name: 'Social Gathering / Party', baseCost: 100000, perGuestCost: 1500, description: 'Intimate event setup for birthdays, anniversaries, etc.', applicableAddons: ['decor', 'entertainment', 'photography'] },
    ],
    addonCategories: {
        decor: {
            category: 'Decor & Ambience',
            items: [
                { id: 'floral_premium', name: 'Premium Floral Arrangements', cost: 1500, perGuest: true },
                { id: 'lighting_basic', name: 'Ambient Lighting', cost: 25000, perGuest: false },
                { id: 'lighting_advance', name: 'Intelligent Lighting Setup', cost: 75000, perGuest: false },
                { id: 'theme_decor', name: 'Themed Prop & Stage Decor', cost: 150000, perGuest: false },
            ]
        },
        entertainment: {
            category: 'Entertainment',
            items: [
                { id: 'dj', name: 'Professional DJ & Console', cost: 40000, perGuest: false },
                { id: 'live_band', name: 'Live Band Performance', cost: 100000, perGuest: false },
                { id: 'celebrity', name: 'Celebrity Performer', cost: 500000, perGuest: false },
            ]
        },
        tech: {
            category: 'Technology',
            items: [
                { id: 'led_wall', name: 'LED Video Wall', cost: 75000, perGuest: false },
                { id: 'sound_system', name: 'Concert Grade Sound', cost: 100000, perGuest: false },
            ]
        },
        logistics: {
            category: 'Logistics & Hospitality',
            items: [
                { id: 'transport', name: 'Guest Transportation', cost: 800, perGuest: true },
                { id: 'hotel_coordination', name: 'Hotel & RSVP Management', cost: 50000, perGuest: false },
            ]
        },
        photography: {
            category: 'Photography & Videography',
            items: [
                { id: 'photo_video', name: 'Candid Photography & Cinematic Video', cost: 200000, perGuest: false },
                { id: 'drone', name: 'Drone Coverage', cost: 25000, perGuest: false },
            ]
        }
    }
};
