import Header from '@/components/header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | Afrilink Telecoms',
    description: 'Learn about Afrilink Telecoms, our mission, and our commitment to providing world-class web hosting services in South Africa.',
};

const AboutPage = () => {
    return (
        <div className="bg-white text-gray-800">
            <Header />
            <main className="container mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Afrilink Telecoms</h1>
                    <p className="text-lg md:text-xl text-gray-600">Your trusted partner in the digital world.</p>
                </div>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                    <p className="text-gray-600 mb-8">To empower South African businesses and individuals with fast, reliable, and secure web hosting solutions, backed by exceptional local support. We are dedicated to providing the digital foundation our clients need to succeed online.</p>

                    <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                    <p className="text-gray-600 mb-8">Afrilink Telecoms (Pty) Ltd is a proudly South African company committed to offering world-class web hosting services tailored for the local market. We understand the unique challenges and opportunities in South Africa, which is why our infrastructure is optimized for performance and our support team is always ready to provide friendly, expert assistance.</p>

                    <h2 className="text-2xl font-bold mb-4">The Afrilink Advantage</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li><strong>Local Excellence:</strong> Our servers are located in South Africa, ensuring the lowest latency and fastest possible speeds for your visitors.</li>
                        <li><strong>99.9% Uptime Guarantee:</strong> We stand by the reliability of our infrastructure, so your website is always available.</li>
                        <li><strong>Dedicated Local Support:</strong> Our expert support team is based in South Africa and available 24/7 to help you succeed.</li>
                        <li><strong>Robust Security:</strong> All our hosting plans come with a free SSL certificate and are protected by advanced security measures to keep your data safe.</li>
                    </ul>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AboutPage;
