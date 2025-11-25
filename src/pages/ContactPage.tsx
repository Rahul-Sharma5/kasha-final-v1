
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { BRAND_INFO } from '../constants';

const PageHeader: React.FC<{ title: string, subtitle: string }> = ({ title, subtitle }) => (
    <div className="relative bg-brand-light-gray dark:bg-brand-gray py-24 sm:py-32">
        <div className="absolute inset-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1556740738-b6a63e2775d2?w=1920&q=80" alt="background" className="w-full h-full object-cover"/>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-heading font-bold text-brand-dark dark:text-white tracking-wider">{title}</h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
        </div>
    </div>
);

const ContactPage: React.FC = () => {
    const location = useLocation();
    const form = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        message: '',
    });

    useEffect(() => {
        if (location.state?.eventType) {
            setFormData(prev => ({ ...prev, eventType: location.state.eventType as string }));
        }
    }, [location.state]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm('service_fwxpczd', 'template_5i1g9d8', form.current, 'xsu184T-6URSu1qfu')
                .then((result) => {
                    console.log('SUCCESS!', result.text);
                    // Reset form data
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        eventType: '',
                        message: '',
                    });
                }, (error) => {
                    console.log('FAILED...', error.text);
                });
        }
    };

    return (
        <div className="bg-brand-light dark:bg-brand-dark">
            <PageHeader title="Contact Us" subtitle="Let's Create Your Next Unforgettable Event" />
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <div className="scroll-target">
                            <h2 className="text-3xl font-heading text-brand-dark dark:text-white">Get in Touch</h2>
                            <div className="w-20 h-1 bg-brand-gold my-4"></div>
                            <form ref={form} onSubmit={sendEmail} className="space-y-6">
                                <input name="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleInputChange} className="w-full bg-brand-light-gray dark:bg-brand-gray border-gray-300 dark:border-gray-700 p-3 rounded-md focus:ring-brand-gold focus:border-brand-gold" />
                                <input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} className="w-full bg-brand-light-gray dark:bg-brand-gray border-gray-300 dark:border-gray-700 p-3 rounded-md focus:ring-brand-gold focus:border-brand-gold" />
                                <input name="phone" type="tel" placeholder="Your Phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-brand-light-gray dark:bg-brand-gray border-gray-300 dark:border-gray-700 p-3 rounded-md focus:ring-brand-gold focus:border-brand-gold" />
                                <input name="eventType" type="text" placeholder="Event Type" value={formData.eventType} onChange={handleInputChange} className="w-full bg-brand-light-gray dark:bg-brand-gray border-gray-300 dark:border-gray-700 p-3 rounded-md focus:ring-brand-gold focus:border-brand-gold" />
                                <textarea name="message" placeholder="Your Message" rows={5} value={formData.message} onChange={handleInputChange} className="w-full bg-brand-light-gray dark:bg-brand-gray border-gray-300 dark:border-gray-700 p-3 rounded-md focus:ring-brand-gold focus:border-brand-gold"></textarea>
                                <button type="submit" className="bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-sm hover:bg-brand-gold-light transition-colors duration-300">
                                    Send Message
                                </button>
                            </form>
                        </div>
                        {/* Contact Info & Map */}
                        <div className="scroll-target" style={{ transitionDelay: '200ms' }}>
                             <h2 className="text-3xl font-heading text-brand-dark dark:text-white">Contact Details</h2>
                            <div className="w-20 h-1 bg-brand-gold my-4"></div>
                             <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                                <li><strong>Location:</strong> {BRAND_INFO.location}</li>
                                <li><strong>Email:</strong> <a href={`mailto:${BRAND_INFO.email}`} className="text-brand-gold hover:underline">{BRAND_INFO.email}</a></li>
                                <li><strong>Phone:</strong> {BRAND_INFO.phones.join(' / ')}</li>
                            </ul>
                            <div className="mt-8 h-80 bg-brand-light-gray dark:bg-brand-gray rounded-lg overflow-hidden">
                                 <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.5200989065!2d77.03956972179857!3d28.52721814238533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1672589531535!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="dark:grayscale"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
