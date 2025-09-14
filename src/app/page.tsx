import Header from '@/components/header';
import Footer from '@/components/Footer';
import { Card, Button } from '@/components/ui';
import ServerAnimation from '@/components/ServerAnimation';
import CheckIcon from '@/components/icons/CheckIcon';

const HomePage = () => {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative text-white py-20" style={{ backgroundImage: "url('/images/hero-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Professional Web Hosting Solutions</h1>
              <p className="text-lg md:text-xl mb-8">South Africa's Leading Web Hosting Provider</p>
            </div>
            <div className="md:w-1/2">
              <Card className="bg-gray-800 bg-opacity-75 border border-gray-700 text-white">
                <div className="text-center">
                  <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full -mt-10 inline-block">Most Popular</span>
                  <h2 className="text-3xl font-bold mt-4">Super Hosting</h2>
                  <div className="my-4">
                    <span className="text-4xl font-bold">R289</span>
                    <span className="text-lg">.99/month</span>
                  </div>
                  <ul className="text-left space-y-2 mx-auto max-w-xs">
                    <li className="flex items-center"><CheckIcon className="h-6 w-6 text-green-500 mr-2" /> 100 GB NVMe Storage</li>
                    <li className="flex items-center"><CheckIcon className="h-6 w-6 text-green-500 mr-2" /> 100 Email Accounts</li>
                    <li className="flex items-center"><CheckIcon className="h-6 w-6 text-green-500 mr-2" /> 30 MySQL Databases</li>
                    <li className="flex items-center"><CheckIcon className="h-6 w-6 text-green-500 mr-2" /> Free SSL Certificates</li>
                    <li className="flex items-center"><CheckIcon className="h-6 w-6 text-green-500 mr-2" /> 99.9% Uptime Guarantee</li>
                  </ul>
                  <Button variant="primary" className="mt-6 w-full">Get Started Now</Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Animated server section */}
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Powered by Cutting-Edge Infrastructure</h2>
                <div className="w-full max-w-xl mx-auto h-56">
                    <ServerAnimation />
                </div>
            </div>
        </section>

        {/* Pricing Section */}
        <section id="hosting" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Hosting Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Pricing Cards */}
              <Card className="text-center">
                <h3 className="text-2xl font-bold mb-4">Entry Hosting</h3>
                <div className="mb-4"><span className="text-4xl font-bold">R119</span><span className="text-gray-500">.99/mo</span></div>
                <ul className="text-left space-y-2 mb-6">
                  <li><CheckIcon className="h-5 w-5 text-green-500 mr-2 inline-block"/>25 GB NVMe Storage</li>
                  <li><CheckIcon className="h-5 w-5 text-green-500 mr-2 inline-block"/>25 Email Accounts</li>
                  <li><CheckIcon className="h-5 w-5 text-green-500 mr-2 inline-block"/>10 MySQL Databases</li>
                  <li><CheckIcon className="h-5 w-5 text-green-500 mr-2 inline-block"/>Free SSL Certificates</li>
                </ul>
                <Button variant="secondary" className="w-full">Buy Now</Button>
              </Card>
              <Card className="text-center">
                <h3 className="text-2xl font-bold mb-4">Basic Hosting</h3>
                <div className="mb-4"><span className="text-4xl font-bold">R179</span><span className="text-gray-500">.99/mo</span></div>
                <ul className="text-left space-y-2 mb-6">
                  <li><CheckIcon className="h-5 w-5 text-green-500 mr-2 inline-block"/>50 GB NVMe Storage</li>
                  <li><CheckIcon className="h-5 w-5 text-green-500 mr-2 inline-block"/>50 Email Accounts</li>
                  <li><CheckIcon className="h-5 w-5 text-green-500 mr-2 inline-block"/>20 MySQL Databases</li>
                  <li><CheckIcon className="h-5 w-5 text-green-500 mr-2 inline-block"/>Free SSL Certificates</li>
                </ul>
                <Button variant="secondary" className="w-full">Buy Now</Button>
              </Card>
              <Card className="text-center border-2 border-blue-500 relative shadow-lg">
                 <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full absolute -top-4 left-1/2 -translate-x-1/2">Popular</span>
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Super Hosting</h3>
                <div className="mb-4"><span className="text-4xl font-bold">R289</span><span className="text-gray-500">.99/mo</span></div>
                <ul className="text-left space-y-2 mb-6">
                  <li><CheckIcon className="h-5 w-5 text-green-500 mr-2 inline-block"/>100 GB NVMe Storage</li>
                  <li><CheckIcon className="h-5 w-5 text-green-500 mr-2 inline-block"/>100 Email Accounts</li>
                  <li><CheckIcon className="h-5 w-5 text-green-500 mr-2 inline-block"/>30 MySQL Databases</li>
                  <li><CheckIcon className="h-5 w-5 text-green-500 mr-2 inline-block"/>Free SSL Certificates</li>
                </ul>
                <Button variant="primary" className="w-full">Buy Now</Button>
              </Card>
              <Card className="text-center">
                <h3 className="text-2xl font-bold mb-4">Ultimate Hosting</h3>
                <div className="mb-4"><span className="text-4xl font-bold">R349</span><span className="text-gray-500">.99/mo</span></div>
                <ul className="text-left space-y-2 mb-6">
                  <li><CheckIcon className="h-5 w-5 text-green-500 mr-2 inline-block"/>200 GB NVMe Storage</li>
                  <li><CheckIcon className="h-5 w-5 text-green-500 mr-2 inline-block"/>200 Email Accounts</li>
                  <li><CheckIcon className="h-5 w-5 text-green-500 mr-2 inline-block"/>40 MySQL Databases</li>
                  <li><CheckIcon className="h-5 w-5 text-green-500 mr-2 inline-block"/>Free SSL Certificates</li>
                </ul>
                <Button variant="secondary" className="w-full">Buy Now</Button>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Placeholder for other sections */}
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-4">More Features Coming Soon</h2>
                <p className="text-gray-600">Website Builder, Why Choose Us, and Contact sections will be implemented here.</p>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;