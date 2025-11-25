import React from 'react';
import { BRAND_INFO } from '../constants';

const PageHeader: React.FC<{ title: string, subtitle: string }> = ({ title, subtitle }) => (
    <div className="relative bg-brand-light-gray dark:bg-brand-gray py-16 sm:py-24">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-heading font-bold text-brand-dark dark:text-white tracking-wider">{title}</h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
        </div>
    </div>
);

const TermsPage: React.FC = () => {
    return (
        <div className="bg-brand-light dark:bg-brand-dark">
            <PageHeader title="Terms of Service" subtitle="Please read these terms carefully before using our services." />
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
                <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                    <h3 className="text-2xl font-heading text-brand-dark dark:text-white mb-4">1. Agreement to Terms</h3>
                    <p className="mb-6">
                        These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and <strong>{BRAND_INFO.name}</strong> ("we," "us" or "our"), concerning your access to and use of the <strong>{BRAND_INFO.website}</strong> website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”).
                    </p>
                    <p className="mb-6">
                        You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                    </p>

                    <h3 className="text-2xl font-heading text-brand-dark dark:text-white mb-4 mt-8">2. Intellectual Property Rights</h3>
                    <p className="mb-6">
                        Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
                    </p>

                    <h3 className="text-2xl font-heading text-brand-dark dark:text-white mb-4 mt-8">3. User Representations</h3>
                    <p className="mb-4">By using the Site, you represent and warrant that:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>All registration information you submit will be true, accurate, current, and complete.</li>
                        <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                        <li>You have the legal capacity and you agree to comply with these Terms of Use.</li>
                        <li>You are not a minor in the jurisdiction in which you reside.</li>
                        <li>You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise.</li>
                        <li>You will not use the Site for any illegal or unauthorized purpose.</li>
                    </ul>

                    <h3 className="text-2xl font-heading text-brand-dark dark:text-white mb-4 mt-8">4. Service Bookings & Payments</h3>
                    <p className="mb-6">
                        All bookings for event services are subject to availability and specific contract terms. While our online Cost Calculator provides estimates, these are not binding offers. A binding agreement is only formed upon the signing of a formal contract and receipt of a deposit.
                    </p>

                    <h3 className="text-2xl font-heading text-brand-dark dark:text-white mb-4 mt-8">5. Limitation of Liability</h3>
                    <p className="mb-6">
                        In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
                    </p>

                    <h3 className="text-2xl font-heading text-brand-dark dark:text-white mb-4 mt-8">6. Governing Law</h3>
                    <p className="mb-6">
                        These Terms shall be governed by and defined following the laws of India. {BRAND_INFO.name} and yourself irrevocably consent that the courts of Delhi shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                    </p>

                    <h3 className="text-2xl font-heading text-brand-dark dark:text-white mb-4 mt-8">7. Contact Us</h3>
                    <p className="mb-4">
                        To resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                    </p>
                    <div className="bg-brand-light-gray dark:bg-brand-gray p-6 rounded-lg border-l-4 border-brand-gold">
                        <p className="font-bold text-lg">{BRAND_INFO.name}</p>
                        <p>Email: <a href={`mailto:${BRAND_INFO.email}`} className="text-brand-gold hover:underline">{BRAND_INFO.email}</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsPage;