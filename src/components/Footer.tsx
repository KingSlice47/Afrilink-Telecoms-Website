import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-muted text-muted-foreground border-t border-border">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-4 text-foreground">Contact Us</h3>
            <p>Randburg, Johannesburg</p>
            <p>South Africa</p>
            <p>Email: support@afrilink.co.za</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-4 text-foreground">Quick Links</h3>
            <ul>
              <li><Link href="/#hosting" className="hover:text-primary transition-colors">Hosting Plans</Link></li>
              <li><Link href="/#features" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><a href="https://www.afrilinktelecon.co.za/whmcs-bridge/?ccce=clientarea" className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">Client Area</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-muted/80 border-t border-border py-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">&copy; {new Date().getFullYear()} Afrilink Telecoms (Pty) Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
