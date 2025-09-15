import Header from '@/components/header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { Check, X } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Hosting Plans | Afrilink Telecoms',
    description: 'Compare our affordable, high-performance web hosting plans. Find the perfect solution for your South African business.',
};

const plans = [
    {
        name: 'Starter',
        price: '119',
        features: {
            'Websites': '1',
            'SSD Storage': '5 GB',
            'Bandwidth': '50 GB',
            'Free .co.za Domain': false,
            'Business Email': false,
            'Daily Backups': false,
            'Priority Support': false,
            'Advanced Security': false,
            'Staging Environment': false,
            'Dedicated Support': false,
        }
    },
    {
        name: 'Business',
        price: '179',
        features: {
            'Websites': '5',
            'SSD Storage': '25 GB',
            'Bandwidth': 'Unmetered',
            'Free .co.za Domain': true,
            'Business Email': true,
            'Daily Backups': false,
            'Priority Support': false,
            'Advanced Security': false,
            'Staging Environment': false,
            'Dedicated Support': false,
        }
    },
    {
        name: 'Pro',
        price: '289',
        features: {
            'Websites': 'Unlimited',
            'SSD Storage': '75 GB',
            'Bandwidth': 'Unmetered',
            'Free .co.za Domain': true,
            'Business Email': true,
            'Daily Backups': true,
            'Priority Support': true,
            'Advanced Security': false,
            'Staging Environment': false,
            'Dedicated Support': false,
        }
    },
    {
        name: 'Elite',
        price: '349',
        features: {
            'Websites': 'Unlimited',
            'SSD Storage': '150 GB',
            'Bandwidth': 'Unmetered',
            'Free .co.za Domain': true,
            'Business Email': true,
            'Daily Backups': true,
            'Priority Support': true,
            'Advanced Security': true,
            'Staging Environment': true,
            'Dedicated Support': true,
        }
    }
];

const allFeatures = [
    'Websites',
    'SSD Storage',
    'Bandwidth',
    'Free .co.za Domain',
    'Business Email',
    'Daily Backups',
    'Priority Support',
    'Advanced Security',
    'Staging Environment',
    'Dedicated Support',
];


const HostingPage = () => {
    return (
        <div className="bg-white text-gray-800">
            <Header />
            <main className="container mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Find the Perfect Hosting Plan</h1>
                    <p className="text-lg md:text-xl text-gray-600">Scalable solutions for every stage of your business growth.</p>
                </div>
                <div className="overflow-x-auto rounded-lg border">
                    <table className="w-full min-w-[900px]">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="p-6 text-left text-lg font-semibold">Features</th>
                                {plans.map(plan => (
                                    <th key={plan.name} className="p-6 border-l w-1/5">
                                        <h2 className="text-2xl font-bold">{plan.name}</h2>
                                        <p className="text-3xl font-bold my-2">R{plan.price}<span className="text-lg font-normal text-gray-500">/mo</span></p>
                                        <Button className="mt-4 w-full">Get Started</Button>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {allFeatures.map(feature => (
                                <tr key={feature}>
                                    <td className="p-4 font-medium">{feature}</td>
                                    {plans.map(plan => (
                                        <td key={plan.name} className="p-4 text-center border-l">
                                            {typeof plan.features[feature] === 'boolean' ? (
                                                plan.features[feature] ? <Check className="h-6 w-6 text-green-500 mx-auto" /> : <X className="h-6 w-6 text-red-500 mx-auto" />
                                            ) : (
                                                <span className="font-semibold">{plan.features[feature]}</span>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                         <tfoot>
                            <tr className="bg-gray-50">
                                <td></td>
                                {plans.map(plan => (
                                    <td key={plan.name} className="p-4 border-l">
                                        <Button className="w-full">Get Started</Button>
                                    </td>
                                ))}
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default HostingPage;
