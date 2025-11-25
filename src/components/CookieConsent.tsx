import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { XIcon } from './Icons';

const CookieConsent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('kasha_cookie_consent');
        if (!consent) {
            // Small delay to not overwhelm user immediately on load
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('kasha_cookie_consent', 'true');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('kasha_cookie_consent', 'false');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 animate-fadeInUp">
            <div className="max-w-7xl mx-auto bg-brand-dark/95 backdrop-blur-md border-t-4 border-brand-gold text-white p-6 rounded-t-xl shadow-[0_-10px_40px_rgba(0,0,0,0.5)] md:flex md:items-center md:justify-between gap-6">
                
                <div className="flex-1">
                    <h3 className="text-brand-gold font-heading font-bold text-lg mb-2">We Value Your Privacy</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. Read our <Link to="/privacy-policy" className="text-brand-gold underline hover:text-white transition-colors">Privacy Policy</Link>.
                    </p>
                </div>

                <div className="mt-4 md:mt-0 flex items-center gap-4 flex-shrink-0">
                    <button 
                        onClick={handleDecline}
                        className="text-sm text-gray-400 hover:text-white transition-colors font-medium px-4 py-2"
                    >
                        Decline
                    </button>
                    <button 
                        onClick={handleAccept}
                        className="bg-brand-gold text-brand-dark font-bold py-2 px-6 rounded-sm hover:bg-brand-gold-light hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                        Accept All
                    </button>
                    <button onClick={handleDecline} className="md:hidden absolute top-2 right-2 text-gray-500 p-2">
                        <XIcon />
                    </button>
                </div>
            </div>
            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeInUp {
                    animation: fadeInUp 0.5s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default CookieConsent;