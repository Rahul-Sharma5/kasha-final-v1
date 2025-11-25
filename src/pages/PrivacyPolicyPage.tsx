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

const PrivacyPolicyPage: React.FC = () => {
    return (
        <div className="bg-brand-light dark:bg-brand-dark">
            <PageHeader title="Privacy Policy" subtitle="Last Updated: October 2023" />
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
                <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                    <p className="mb-6">
                        At <strong>{BRAND_INFO.name}</strong> ("we," "us," or "our"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website {BRAND_INFO.website}, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site").
                    </p>
                    <p className="mb-8">
                        Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                    </p>

                    <h3 className="text-2xl font-heading text-brand-dark dark:text-white mb-4 mt-8">1. Collection of Your Information</h3>
                    <p className="mb-4">We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.</li>
                        <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
                    </ul>

                    <h3 className="text-2xl font-heading text-brand-dark dark:text-white mb-4 mt-8">2. Use of Your Information</h3>
                    <p className="mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Create and manage your account.</li>
                        <li>Process your orders and payments for event planning services.</li>
                        <li>Email you regarding your account or order.</li>
                        <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
                        <li>Generate a personal profile about you to make future visits to the Site more personalized.</li>
                        <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
                        <li>Notify you of updates to the Site.</li>
                        <li>Offer new products, services, mobile applications, and/or recommendations to you.</li>
                    </ul>

                    <h3 className="text-2xl font-heading text-brand-dark dark:text-white mb-4 mt-8">3. Cookie Policy</h3>
                    <p className="mb-4">
                        We use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience. When you access the Site, your personal information is not collected through the use of tracking technology.
                    </p>
                    <p className="mb-4">
                        Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Site.
                    </p>
                    <h4 className="text-xl font-bold text-brand-gold mb-2">Types of Cookies We Use:</h4>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li><strong>Essential Cookies:</strong> Necessary for the functioning of the website.</li>
                        <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with the website.</li>
                        <li><strong>Marketing Cookies:</strong> Used to track visitors across websites to display relevant advertisements.</li>
                    </ul>

                    <h3 className="text-2xl font-heading text-brand-dark dark:text-white mb-4 mt-8">4. Security of Your Information</h3>
                    <p className="mb-6">
                        We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                    </p>

                    <h3 className="text-2xl font-heading text-brand-dark dark:text-white mb-4 mt-8">5. Contact Us</h3>
                    <p className="mb-4">
                        If you have questions or comments about this Privacy Policy, please contact us at:
                    </p>
                    <div className="bg-brand-light-gray dark:bg-brand-gray p-6 rounded-lg border-l-4 border-brand-gold">
                        <p className="font-bold text-lg">{BRAND_INFO.name}</p>
                        <p>{BRAND_INFO.location}</p>
                        <p>Email: <a href={`mailto:${BRAND_INFO.email}`} className="text-brand-gold hover:underline">{BRAND_INFO.email}</a></p>
                        <p>Phone: {BRAND_INFO.phones[0]}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;