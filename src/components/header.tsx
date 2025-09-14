import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold text-gray-800 cursor-pointer">Afrilink</span>
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/hosting"><span className="text-gray-800 cursor-pointer">Hosting Plans</span></Link>
          <Link href="/why-afrilink"><span className="text-gray-800 cursor-pointer">Why Afrilink</span></Link>
          <Link href="/support"><span className="text-gray-800 cursor-pointer">Support</span></Link>
        </div>
        <div className="flex items-center">
          <a href="https://www.afrilinktelecon.co.za/whmcs-bridge/?ccce=clientarea" target="_blank" rel="noopener noreferrer">
            <Button>Client Login</Button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
