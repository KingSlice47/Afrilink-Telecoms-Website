import Header from '@/components/header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Why Choose Afrilink | Afrilink Telecoms',
    description: 'Discover the Afrilink advantage: managed service, expert local support, and robust security for your peace of mind.',
};

const WhyAfrilinkPage = () => {
    return (
        <div className="bg-white text-gray-800">
            <Header />
            <main>
                <section className="bg-gray-50 py-20">
                    <div className="container mx-auto px-6 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">The Afrilink Advantage</h1>
                        <p className="text-lg md:text-xl text-gray-600">We&apos;re more than just a hosting provider. We&apos;re your partner in success.</p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold mb-4">Managed Service</h2>
                            <p className="text-gray-600">Focus on your business, not the technical details. We handle server management, security, and performance optimization, so you can focus on what you do best.</p>
                        </div>
                        <div className="text-center">
                            <h2 className="text-2xl font-bold mb-4">Expert Local Support</h2>
                            <p className="text-gray-600">Our support team is based in South Africa and available 24/7. Get fast, friendly, and knowledgeable help whenever you need it.</p>
                        </div>
                        <div className="text-center">
                            <h2 className="text-2xl font-bold mb-4">Robust Security</h2>
                            <p className="text-gray-600">Sleep well at night knowing your website is protected by our multi-layered security approach, including free SSL, daily backups, and proactive monitoring.</p>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-50 py-20">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold">What We Handle For You</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center"><Check className="h-6 w-6 text-green-500 mr-2"/>Performance Optimization</CardTitle>
                                </CardHeader>
                                <CardContent>Our servers are fine-tuned for speed, ensuring your website loads quickly for every visitor.</CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center"><Check className="h-6 w-6 text-green-500 mr-2"/>Automated Daily Backups</CardTitle>
                                </CardHeader>
                                <CardContent>We back up your site every day, so you can easily restore it in case of an emergency.</CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center"><Check className="h-6 w-6 text-green-500 mr-2"/>Proactive Security Monitoring</CardTitle>
                                </CardHeader>
                                <CardContent>We monitor for threats and vulnerabilities around the clock to keep your site safe.</CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center"><Check className="h-6 w-6 text-green-500 mr-2"/>Software Updates</CardTitle>
                                </CardHeader>
                                <CardContent>We keep your server software up-to-date with the latest patches and security releases.</CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center"><Check className="h-6 w-6 text-green-500 mr-2"/>99.9% Uptime Guarantee</CardTitle>
                                </CardHeader>
                                <CardContent>Our reliable infrastructure ensures your website is always online and available to your customers.</CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center"><Check className="h-6 w-6 text-green-500 mr-2"/>24/7 Expert Support</CardTitle>
                                </CardHeader>
                                <CardContent>Our local team is always here to help you with any questions or issues you may have.</CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default WhyAfrilinkPage;
