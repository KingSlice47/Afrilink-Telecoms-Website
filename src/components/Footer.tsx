import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p>Randburg, Johannesburg</p>
            <p>South Africa</p>
            <p>Email: support@afrilink.co.za</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul>
              <li><Link href="/#hosting"><a className="hover:text-gray-300">Hosting Plans</a></Link></li>
              <li><Link href="/#features"><a className="hover:text-gray-300">About Us</a></Link></li>
              <li><a href="https://www.afrilinktelecon.co.za/whmcs-bridge/?ccce=clientarea" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">Client Area</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Afrilink Telecoms (Pty) Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
