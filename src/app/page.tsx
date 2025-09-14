import Header from '@/components/header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import CheckIcon from '@/components/icons/CheckIcon';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative text-white py-20" style={{ backgroundImage: "url('/images/hero-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Effortless, Blazing-Fast Web Hosting for Your South African Business.</h1>
            <p className="text-lg md:text-xl mb-8">Focus on your business, we&apos;ll handle the rest.</p>
            <Link href="/hosting">
              <Button size="lg">View Hosting Plans</Button>
            </Link>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12">Why Choose Afrilink?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Managed Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We handle the technical details, so you can focus on your business. Enjoy automated updates, security monitoring, and performance optimization.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Expert Local Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Our team of experts is based in South Africa and ready to help you 24/7. Get friendly, professional support when you need it.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Robust Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Your website is protected with our advanced security suite, including free SSL certificates, malware scanning, and daily backups.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section id="hosting" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Hosting Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader><CardTitle>Starter</CardTitle></CardHeader>
                <CardContent>
                  <p className="mb-6">For individuals, hobbyists, and personal blogs.</p>
                  <ul className="text-left space-y-2 mb-6">
                    <li className="flex items-center"><CheckIcon className="h-5 w-5 text-green-500 mr-2"/>Host 1 Website</li>
                    <li className="flex items-center"><CheckIcon className="h-5 w-5 text-green-500 mr-2"/>5 GB SSD Storage</li>
                    <li className="flex items-center"><CheckIcon className="h-5 w-5 text-green-500 mr-2"/>50 GB Bandwidth</li>
                    <li className="flex items-center"><CheckIcon className="h-5 w-5 text-green-500 mr-2"/>Free SSL Certificate</li>
                  </ul>
                  <Button variant="secondary" className="w-full">Get Started</Button>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader><CardTitle>Business</CardTitle></CardHeader>
                <CardContent>
                  <p className="mb-6">For small businesses, freelancers, and startups.</p>
                  <ul className="text-left space-y-2 mb-6">
                    <li className="flex items-center"><CheckIcon className="h-5 w-5 text-green-500 mr-2"/>Host 5 Websites</li>
                    <li className="flex items-center"><CheckIcon className="h-5 w-5 text-green-500 mr-2"/>25 GB SSD Storage</li>
                    <li className="flex items-center"><CheckIcon className="h-5 w-5 text-green-500 mr-2"/>Unmetered Bandwidth</li>
                    <li className="flex items-center"><CheckIcon className="h-5 w-5 text-green-500 mr-2"/>Free .co.za Domain</li>
                  </ul>
                  <Button variant="secondary" className="w-full">Get Started</Button>
                </CardContent>
              </Card>
              <Card className="text-center border-2 border-primary relative shadow-lg">
                <CardHeader><CardTitle className="text-primary">Pro</CardTitle></CardHeader>
                <CardContent>
                  <p className="mb-6">For growing businesses and e-commerce stores.</p>
                  <ul className="text-left space-y-2 mb-6">
                    <li className="flex items-center"><CheckIcon className="h-5 w-5 text-green-500 mr-2"/>Host Unlimited Websites</li>
                    <li className="flex items-center"><CheckIcon className="h-5 w-5 text-green-500 mr-2"/>75 GB SSD Storage</li>
                    <li className="flex items-center"><CheckIcon className="h-5 w-5 text-green-500 mr-2"/>Daily Backups</li>
                    <li className="flex items-center"><CheckIcon className="h-5 w-5 text-green-500 mr-2"/>Priority Support</li>
                  </ul>
                  <Button className="w-full">Get Started</Button>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader><CardTitle>Elite</CardTitle></CardHeader>
                <CardContent>
                  <p className="mb-6">For agencies and high-traffic websites.</p>
                  <ul className="text-left space-y-2 mb-6">
                    <li className="flex items-center"><CheckIcon className="h-5 w-5 text-green-500 mr-2"/>Host Unlimited Websites</li>
                    <li className="flex items-center"><CheckIcon className="h-5 w-5 text-green-500 mr-2"/>150 GB SSD Storage</li>
                    <li className="flex items-center"><CheckIcon className="h-5 w-5 text-green-500 mr-2"/>Advanced Security</li>
                    <li className="flex items-center"><CheckIcon className="h-5 w-5 text-green-500 mr-2"/>Dedicated Support</li>
                  </ul>
                  <Button variant="secondary" className="w-full">Get Started</Button>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-12">
                <Link href="/hosting">
                    <Button variant="outline">Compare All Plans</Button>
                </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
