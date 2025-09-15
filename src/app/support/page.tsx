import Header from '@/components/header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export const metadata: Metadata = {
    title: 'Support | Afrilink Telecoms',
    description: 'Get in touch with our expert support team. We are here to help you 24/7.',
};

const SupportPage = () => {
    return (
        <div className="bg-white text-gray-800">
            <Header />
            <main className="container mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Support</h1>
                    <p className="text-lg md:text-xl text-gray-600">Our team is here to help you every step of the way.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
                        <Card>
                            <CardContent className="p-6">
                                <form className="space-y-4">
                                    <Input placeholder="Your Name" />
                                    <Input type="email" placeholder="Your Email" />
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Service" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="hosting">Web Hosting</SelectItem>
                                            <SelectItem value="domains">Domain Registration</SelectItem>
                                            <SelectItem value="support">Technical Support</SelectItem>
                                            <SelectItem value="billing">Billing Inquiry</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Textarea placeholder="Your Message" rows={5} />
                                    <Button className="w-full">Send Message</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
                        <Card>
                            <CardContent className="p-6 space-y-4">
                                <div>
                                    <h3 className="font-semibold">Email</h3>
                                    <p className="text-gray-600">support@afrilink.co.za</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Address</h3>
                                    <p className="text-gray-600">Randburg, Johannesburg, South Africa</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Support Hours</h3>
                                    <p className="text-gray-600">24/7 Technical Support</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default SupportPage;
