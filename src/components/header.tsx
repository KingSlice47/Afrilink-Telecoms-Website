'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui';
import { Menu, X, ChevronDown, Server, Globe, Shield, HardDrive } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm shadow-md relative z-20 border-b border-border">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
          <Image 
            src="/images/Afrlink Telecoms suggested logo.png" 
            alt="Afrilink Telecoms Logo" 
            width={40} 
            height={40} 
            className="object-contain"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-primary leading-tight">Afrilink</span>
            <span className="text-xs text-muted-foreground leading-tight">Telecoms</span>
          </div>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          {/* Domains Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-1">
              Domains <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/domains/register" className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  Register Domain
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/domains/transfer" className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  Transfer Domain
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/domains/ai-generator" className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  AI Domain Generator
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/domains/whois" className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  Whois Search
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Hosting Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-1">
              Hosting <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/hosting/web-hosting" className="flex items-center gap-2">
                  <Server className="h-4 w-4" />
                  Web Hosting
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/hosting/vps-linux" className="flex items-center gap-2">
                  <HardDrive className="h-4 w-4" />
                  Linux VPS
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/hosting/vps-windows" className="flex items-center gap-2">
                  <HardDrive className="h-4 w-4" />
                  Windows VPS
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/hosting/email-hosting" className="flex items-center gap-2">
                  <Server className="h-4 w-4" />
                  Email Hosting
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Security Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-1">
              Security <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/ssl/domain-validated" className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Domain Validated SSL
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/ssl/organization-validated" className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Organization SSL
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/support" className="text-foreground hover:text-primary transition-colors font-medium">
            Support
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://www.afrilinktelecon.co.za/whmcs-bridge/?ccce=clientarea" target="_blank" rel="noopener noreferrer">
            <Button className="hidden sm:block">Client Login</Button>
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-accent rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border">
          <div className="container mx-auto px-6 py-4 space-y-4">
            {/* Mobile Domains Section */}
            <div className="space-y-2">
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Domains</div>
              <Link 
                href="/domains/register" 
                className="block text-foreground hover:text-primary transition-colors font-medium pl-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Register Domain
              </Link>
              <Link 
                href="/domains/transfer" 
                className="block text-foreground hover:text-primary transition-colors font-medium pl-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Transfer Domain
              </Link>
              <Link 
                href="/domains/ai-generator" 
                className="block text-foreground hover:text-primary transition-colors font-medium pl-2"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Domain Generator
              </Link>
            </div>
            
            {/* Mobile Hosting Section */}
            <div className="space-y-2">
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Hosting</div>
              <Link 
                href="/hosting/web-hosting" 
                className="block text-foreground hover:text-primary transition-colors font-medium pl-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Web Hosting
              </Link>
              <Link 
                href="/hosting/vps-linux" 
                className="block text-foreground hover:text-primary transition-colors font-medium pl-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Linux VPS
              </Link>
              <Link 
                href="/hosting/vps-windows" 
                className="block text-foreground hover:text-primary transition-colors font-medium pl-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Windows VPS
              </Link>
            </div>
            
            {/* Mobile Security Section */}
            <div className="space-y-2">
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Security</div>
              <Link 
                href="/ssl/domain-validated" 
                className="block text-foreground hover:text-primary transition-colors font-medium pl-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Domain Validated SSL
              </Link>
              <Link 
                href="/ssl/organization-validated" 
                className="block text-foreground hover:text-primary transition-colors font-medium pl-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Organization SSL
              </Link>
            </div>
            
            <Link 
              href="/support" 
              className="block text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Support
            </Link>
            <a 
              href="https://www.afrilinktelecon.co.za/whmcs-bridge/?ccce=clientarea" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block sm:hidden"
            >
              <Button className="w-full">Client Login</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
