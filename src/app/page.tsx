import Header from '@/components/header';
import Footer from '@/components/Footer';
import { Card, Button, Badge } from '@/components/ui';
import ServerAnimation from '@/components/ServerAnimation';
import { CheckCircle, Server, Shield, Zap, Mail, Database, Globe, HardDrive, Cpu, MemoryStick, Settings, Code, Palette, MousePointer, Smartphone, Search } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative text-primary-foreground py-16 bg-gradient-to-br from-primary via-primary/90 to-accent">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>
          <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-center md:text-left space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-in fade-in slide-in-from-left-4 duration-1000">Professional Web Hosting Solutions</h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 animate-in fade-in slide-in-from-left-4 duration-1000 delay-200">South Africa&apos;s Leading Web Hosting Provider</p>
            </div>
            <div className="md:w-1/2">
              <Card className="bg-card/95 backdrop-blur-sm border border-border/50 text-card-foreground shadow-2xl animate-in fade-in slide-in-from-right-4 duration-1000 delay-300 p-6">
                <div className="text-center">
                  <span className="bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-bold px-4 py-2 rounded-full -mt-8 inline-block shadow-lg">Most Popular</span>
                  <h2 className="text-3xl font-bold mt-6 mb-2">Super Hosting</h2>
                  <div className="my-6">
                    <span className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">R289</span>
                    <span className="text-xl text-muted-foreground">.99/month</span>
                  </div>
                  <ul className="text-left space-y-3 mx-auto max-w-sm">
                    <li className="flex items-center group"><Server className="h-5 w-5 text-primary mr-3 group-hover:scale-110 transition-transform" /> 100 GB NVMe Storage</li>
                    <li className="flex items-center group"><Mail className="h-5 w-5 text-primary mr-3 group-hover:scale-110 transition-transform" /> 100 Email Accounts</li>
                    <li className="flex items-center group"><Database className="h-5 w-5 text-primary mr-3 group-hover:scale-110 transition-transform" /> 30 MySQL Databases</li>
                    <li className="flex items-center group"><Shield className="h-5 w-5 text-primary mr-3 group-hover:scale-110 transition-transform" /> Free SSL Certificates</li>
                    <li className="flex items-center group"><Zap className="h-5 w-5 text-primary mr-3 group-hover:scale-110 transition-transform" /> 99.9% Uptime Guarantee</li>
                  </ul>
                  <Button variant="primary" className="mt-8 w-full text-lg py-3">Get Started Now</Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Animated server section */}
        <section className="py-20 bg-gradient-to-b from-accent/20 to-muted/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16"></div>
            <div className="container mx-auto px-6 text-center relative z-10">
                <h2 className="text-4xl font-bold mb-8 text-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000">Powered by Cutting-Edge Infrastructure</h2>
                <div className="w-full max-w-2xl mx-auto h-64 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
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
              <Card className="text-center bg-card border-border p-6">
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">Entry Hosting</h3>
                <div className="mb-4"><span className="text-4xl font-bold text-primary">R119</span><span className="text-muted-foreground">.99/mo</span></div>
                
                <div className="text-left space-y-4 mb-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-primary uppercase tracking-wider">Top Features</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>5 Websites Allowed</li>
                      <li className="flex items-center text-sm"><HardDrive className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>25 GB NVMe Storage</li>
                      <li className="flex items-center text-sm"><Mail className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>25 Email Accounts</li>
                      <li className="flex items-center text-sm"><Database className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>10 MySQL Databases</li>
                      <li className="flex items-center text-sm"><Zap className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>Unlimited Traffic</li>
                      <li className="flex items-center text-sm"><Globe className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>Free Domain Registration*</li>
                      <li className="flex items-center text-sm"><Shield className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>Free SSL Certificates</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-primary uppercase tracking-wider">Resources</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm"><Globe className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0"/>25 Subdomains</li>
                      <li className="flex items-center text-sm"><Cpu className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0"/>1 CPU Core</li>
                      <li className="flex items-center text-sm"><MemoryStick className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0"/>2 GB Memory</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-primary uppercase tracking-wider">Development</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm"><Code className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0"/>PHP 8.x Support</li>
                      <li className="flex items-center text-sm"><Settings className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0"/>cPanel Control Panel</li>
                      <li className="flex items-center text-sm"><Server className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0"/>LiteSpeed Webserver</li>
                    </ul>
                  </div>
                </div>
                
                <Button variant="secondary" className="w-full">Buy Now</Button>
              </Card>
              <Card className="text-center bg-card border-border p-6">
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">Basic Hosting</h3>
                <div className="mb-4"><span className="text-4xl font-bold text-primary">R179</span><span className="text-muted-foreground">.99/mo</span></div>
                
                <div className="text-left space-y-4 mb-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-primary uppercase tracking-wider">Top Features</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>10 Websites Allowed</li>
                      <li className="flex items-center text-sm"><HardDrive className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>50 GB NVMe Storage</li>
                      <li className="flex items-center text-sm"><Mail className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>50 Email Accounts</li>
                      <li className="flex items-center text-sm"><Database className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>20 MySQL Databases</li>
                      <li className="flex items-center text-sm"><Zap className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>Unlimited Traffic</li>
                      <li className="flex items-center text-sm"><Globe className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>Free Domain Registration*</li>
                      <li className="flex items-center text-sm"><Shield className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>Free SSL Certificates</li>
                      <li className="flex items-center text-sm"><Server className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>Daily Off-Site Backups</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-primary uppercase tracking-wider">Resources</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm"><Globe className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0"/>100 Subdomains</li>
                      <li className="flex items-center text-sm"><Cpu className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0"/>2 CPU Core</li>
                      <li className="flex items-center text-sm"><MemoryStick className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0"/>3 GB Memory</li>
                      <li className="flex items-center text-sm"><HardDrive className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0"/>2048 IOPS</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-primary uppercase tracking-wider">Security</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm"><Shield className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0"/>DDoS Protection</li>
                      <li className="flex items-center text-sm"><Shield className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0"/>Web Application Firewall</li>
                      <li className="flex items-center text-sm"><Shield className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0"/>Imunify360 Protection</li>
                    </ul>
                  </div>
                </div>
                
                <Button variant="secondary" className="w-full">Buy Now</Button>
              </Card>
              <Card className="text-center border-2 border-primary relative shadow-2xl bg-gradient-to-b from-primary/5 to-accent/5 scale-105 p-6">
                 <span className="bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-bold px-4 py-2 rounded-full absolute -top-4 left-1/2 -translate-x-1/2 shadow-lg">Popular</span>
                <h3 className="text-2xl font-bold mb-4 text-primary mt-2">Super Hosting</h3>
                <div className="mb-4"><span className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">R289</span><span className="text-muted-foreground text-lg">.99/mo</span></div>
                <div className="text-left space-y-4 mb-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-primary uppercase tracking-wider">Top Features</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>20 Websites Allowed</li>
                      <li className="flex items-center text-sm"><HardDrive className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>100 GB NVMe Storage</li>
                      <li className="flex items-center text-sm"><Mail className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>100 Email Accounts</li>
                      <li className="flex items-center text-sm"><Database className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>30 MySQL Databases</li>
                      <li className="flex items-center text-sm"><Zap className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>Unlimited Traffic</li>
                      <li className="flex items-center text-sm"><Globe className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>Free Domain Registration*</li>
                      <li className="flex items-center text-sm"><Shield className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>Free SSL Certificates</li>
                      <li className="flex items-center text-sm"><Server className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>Free Website Migration</li>
                      <li className="flex items-center text-sm"><Server className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>Daily Off-Site Backups</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-primary uppercase tracking-wider">Resources</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm"><Globe className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0"/>150 Subdomains</li>
                      <li className="flex items-center text-sm"><Cpu className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0"/>3 CPU Core</li>
                      <li className="flex items-center text-sm"><MemoryStick className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0"/>4 GB Memory</li>
                      <li className="flex items-center text-sm"><HardDrive className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0"/>4096 IOPS</li>
                      <li className="flex items-center text-sm"><Zap className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0"/>384 MB/sec IO Throughput</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-primary uppercase tracking-wider">Development</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm"><Code className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0"/>PHP 8.x Support</li>
                      <li className="flex items-center text-sm"><Code className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0"/>WP Toolkit Deluxe</li>
                      <li className="flex items-center text-sm"><Settings className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0"/>WP-CLI and SSH</li>
                      <li className="flex items-center text-sm"><Database className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0"/>MariaDB 10.6</li>
                    </ul>
                  </div>
                </div>
                <Button variant="primary" className="w-full">Buy Now</Button>
              </Card>
              <Card className="text-center bg-card border-border p-6">
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">Ultimate Hosting</h3>
                <div className="mb-4"><span className="text-4xl font-bold text-primary">R349</span><span className="text-muted-foreground">.99/mo</span></div>
                
                <div className="text-left space-y-4 mb-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-primary uppercase tracking-wider">Top Features</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>30 Websites Allowed</li>
                      <li className="flex items-center text-sm"><HardDrive className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>200 GB NVMe Storage</li>
                      <li className="flex items-center text-sm"><Mail className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>200 Email Accounts</li>
                      <li className="flex items-center text-sm"><Database className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>40 MySQL Databases</li>
                      <li className="flex items-center text-sm"><Zap className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>Unlimited Traffic</li>
                      <li className="flex items-center text-sm"><Globe className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>Free Domain Registration*</li>
                      <li className="flex items-center text-sm"><Shield className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>Free SSL Certificates</li>
                      <li className="flex items-center text-sm"><Server className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>Free Website Migration</li>
                      <li className="flex items-center text-sm"><Server className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>Daily Off-Site Backups</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-primary uppercase tracking-wider">Resources</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm"><Globe className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0"/>200 Subdomains</li>
                      <li className="flex items-center text-sm"><Cpu className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0"/>4 CPU Core</li>
                      <li className="flex items-center text-sm"><MemoryStick className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0"/>5 GB Memory</li>
                      <li className="flex items-center text-sm"><HardDrive className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0"/>8192 IOPS</li>
                      <li className="flex items-center text-sm"><Zap className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0"/>512 MB/sec IO Throughput</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-primary uppercase tracking-wider">Security</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm"><Shield className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0"/>DDoS Protection</li>
                      <li className="flex items-center text-sm"><Shield className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0"/>FortiGate Firewalls</li>
                      <li className="flex items-center text-sm"><Shield className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0"/>Monarx Malware Protect</li>
                      <li className="flex items-center text-sm"><Shield className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0"/>SpamExperts Security</li>
                    </ul>
                  </div>
                </div>
                
                <Button variant="secondary" className="w-full">Buy Now</Button>
              </Card>
            </div>
            
            {/* Pricing Disclaimer */}
            <div className="mt-12 text-center space-y-2">
              <p className="text-sm text-muted-foreground">• Free Domain Registration applies to the following extensions only - .co.za, .org.za, .net.za, .web.za, .site, .online</p>
              <p className="text-sm text-muted-foreground">• Free Domain Registration is only applicable at time of purchase</p>
              <p className="text-sm text-muted-foreground">• All listed prices exclude premium domain names • All Prices Include VAT</p>
            </div>
          </div>
        </section>
        
        {/* Website Builder Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-semibold">NEW FEATURE</Badge>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Build a stunning website with our DIY Website Builder</h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Create your professional website in minutes with our powerful drag-and-drop builder. No coding experience required!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <div className="text-center group">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Palette className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">200+ Professional Templates</h3>
                  <p className="text-sm text-muted-foreground">Choose from hundreds of beautiful, mobile-ready templates</p>
                </div>
                
                <div className="text-center group">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Smartphone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Responsive Design</h3>
                  <p className="text-sm text-muted-foreground">Your website looks perfect on all devices automatically</p>
                </div>
                
                <div className="text-center group">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <MousePointer className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Drag and Drop</h3>
                  <p className="text-sm text-muted-foreground">Easily customize your site with our intuitive editor</p>
                </div>
                
                <div className="text-center group">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Search className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">SEO-Friendly</h3>
                  <p className="text-sm text-muted-foreground">Built-in SEO tools to help your site rank higher</p>
                </div>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-8 mb-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-left">
                    <h3 className="text-2xl font-bold mb-2">Website Builder Add-on</h3>
                    <p className="text-muted-foreground mb-4">Simply add Website Builder when ordering your Web Hosting plan.</p>
                    <div className="flex items-center gap-4">
                      <Badge variant="outline">Easy Setup</Badge>
                      <Badge variant="outline">No Coding Required</Badge>
                      <Badge variant="outline">Professional Results</Badge>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <Button size="lg" className="text-lg px-8">Try our Demo</Button>
                    <p className="text-sm text-muted-foreground">See how easy it is to build your website</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Key Features Highlight Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-foreground">Web Hosting Features</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                As a leading Web Hosting provider in South Africa, we have optimised and tweaked our Web Hosting Servers to provide unmatched performance, security and stability.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Free Domain Registration */}
              <Card className="text-center p-6 border-border hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Free Domain Registration</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get a free domain name registration when taking out one of our Web Hosting plans. Free domain extensions include .co.za, .org.za, .net.za, .web.za, .site, .online.
                </p>
              </Card>
              
              {/* Free SSL Certificates */}
              <Card className="text-center p-6 border-border hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Free SSL Certificates</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Assure your customers that you are serious about their security with our Free LetsEncrypt SSL Certificates on all websites hosted on our Web Hosting plans.
                </p>
              </Card>
              
              {/* Free Website Migration */}
              <Card className="text-center p-6 border-border hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Server className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Free Website Migration</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Don&apos;t be concerned about migrating your website to us. Our expert staff will be able to migrate your primary website from another provider at no charge.
                </p>
              </Card>
              
              {/* cPanel Control Panel */}
              <Card className="text-center p-6 border-border hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">cPanel Control Panel</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  The best Web Hosting in South Africa needs the best control panel. Manage your hosting account easily with the industry-standard cPanel interface.
                </p>
              </Card>
            </div>
            
            {/* Additional Features Grid */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-12 text-foreground">Additional Features & Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-start gap-3 p-4">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">LiteSpeed Webserver</h4>
                    <p className="text-sm text-muted-foreground">Ultra-fast web server technology for optimal performance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Daily Off-Site Backups</h4>
                    <p className="text-sm text-muted-foreground">Your data is safe with automated daily backups</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">DDoS Protection</h4>
                    <p className="text-sm text-muted-foreground">Advanced protection against malicious attacks</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Softaculous Apps</h4>
                    <p className="text-sm text-muted-foreground">One-click installation of popular applications</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">PHP 8.x Support</h4>
                    <p className="text-sm text-muted-foreground">Latest PHP version with version selector</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">99.9% Uptime SLA</h4>
                    <p className="text-sm text-muted-foreground">Guaranteed reliability for your website</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* VPS Hosting Section */}
        <section className="py-20 bg-gradient-to-b from-accent/10 to-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-foreground">VPS Hosting Solutions</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ultra-fast VPS hosting with full root access, SSD storage, and guaranteed resources for your applications.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Linux VPS */}
              <Card className="p-8 border-border hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Server className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2 text-card-foreground">Linux VPS Hosting</h3>
                  <p className="text-muted-foreground mb-4">UltraFast VPS Hosting from</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-primary">R209</span>
                    <span className="text-xl text-muted-foreground">/mo</span>
                  </div>
                </div>
                
                <div className="text-left space-y-4 mb-8">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-primary uppercase tracking-wider">Included Features</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>Full Root Access</li>
                      <li className="flex items-center text-sm"><HardDrive className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>SSD Storage</li>
                      <li className="flex items-center text-sm"><Zap className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>Guaranteed Resources</li>
                      <li className="flex items-center text-sm"><Shield className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>DDoS Protection</li>
                      <li className="flex items-center text-sm"><Settings className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>Multiple Linux Distros</li>
                      <li className="flex items-center text-sm"><Server className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>99.9% Uptime SLA</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-primary uppercase tracking-wider">Popular Configurations</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between items-center text-sm bg-muted/30 p-2 rounded">
                        <span>1 CPU, 1GB RAM, 25GB SSD</span>
                        <span className="font-semibold">R209/mo</span>
                      </li>
                      <li className="flex justify-between items-center text-sm bg-muted/30 p-2 rounded">
                        <span>2 CPU, 2GB RAM, 50GB SSD</span>
                        <span className="font-semibold">R389/mo</span>
                      </li>
                      <li className="flex justify-between items-center text-sm bg-muted/30 p-2 rounded">
                        <span>4 CPU, 4GB RAM, 100GB SSD</span>
                        <span className="font-semibold">R679/mo</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Button className="w-full text-lg">Configure Linux VPS</Button>
              </Card>
              
              {/* Windows VPS */}
              <Card className="p-8 border-border hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <HardDrive className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2 text-card-foreground">Windows VPS Hosting</h3>
                  <p className="text-muted-foreground mb-4">UltraFast VPS Hosting from</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-primary">R1139</span>
                    <span className="text-xl text-muted-foreground">/mo</span>
                  </div>
                </div>
                
                <div className="text-left space-y-4 mb-8">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-primary uppercase tracking-wider">Included Features</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>Full Administrator Access</li>
                      <li className="flex items-center text-sm"><HardDrive className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>SSD Storage</li>
                      <li className="flex items-center text-sm"><Zap className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>Guaranteed Resources</li>
                      <li className="flex items-center text-sm"><Shield className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>Windows Server License</li>
                      <li className="flex items-center text-sm"><Settings className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>Remote Desktop Access</li>
                      <li className="flex items-center text-sm"><Server className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>99.9% Uptime SLA</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-primary uppercase tracking-wider">Popular Configurations</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between items-center text-sm bg-muted/30 p-2 rounded">
                        <span>2 CPU, 2GB RAM, 50GB SSD</span>
                        <span className="font-semibold">R1139/mo</span>
                      </li>
                      <li className="flex justify-between items-center text-sm bg-muted/30 p-2 rounded">
                        <span>4 CPU, 4GB RAM, 100GB SSD</span>
                        <span className="font-semibold">R1789/mo</span>
                      </li>
                      <li className="flex justify-between items-center text-sm bg-muted/30 p-2 rounded">
                        <span>6 CPU, 8GB RAM, 200GB SSD</span>
                        <span className="font-semibold">R2489/mo</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Button className="w-full text-lg">Configure Windows VPS</Button>
              </Card>
            </div>
            
            {/* VPS Features Comparison */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold text-center mb-8">Why Choose Our VPS Hosting?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">High Performance</h4>
                  <p className="text-sm text-muted-foreground">Enterprise-grade SSD storage and high-speed network connectivity</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Secure & Protected</h4>
                  <p className="text-sm text-muted-foreground">Advanced security features and DDoS protection included</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <Settings className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Full Control</h4>
                  <p className="text-sm text-muted-foreground">Root/Administrator access with ability to install any software</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <Server className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Scalable</h4>
                  <p className="text-sm text-muted-foreground">Easy resource upgrades as your needs grow</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* SSL Certificates Section */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-foreground">SSL Certificates</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Secure your website and gain your visitors&apos; trust with our SSL certificates. Choose from Domain Validated or Organization Validated certificates.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Domain Validated SSL */}
              <Card className="p-8 border-border hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2 text-card-foreground">Domain Validated SSL</h3>
                  <p className="text-muted-foreground mb-4">Basic SSL protection from</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-primary">FREE</span>
                    <p className="text-sm text-muted-foreground mt-1">with hosting plans</p>
                  </div>
                </div>
                
                <div className="text-left space-y-4 mb-8">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-primary uppercase tracking-wider">Included Features</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>Domain Validation</li>
                      <li className="flex items-center text-sm"><Shield className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>256-bit Encryption</li>
                      <li className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>Browser Trust Seal</li>
                      <li className="flex items-center text-sm"><Zap className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>Instant Issuance</li>
                      <li className="flex items-center text-sm"><Globe className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>99.9% Browser Recognition</li>
                      <li className="flex items-center text-sm"><Server className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>Auto-Renewal Available</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-primary uppercase tracking-wider">Perfect For</h4>
                    <ul className="space-y-1">
                      <li className="text-sm text-muted-foreground">• Personal websites</li>
                      <li className="text-sm text-muted-foreground">• Blogs and portfolios</li>
                      <li className="text-sm text-muted-foreground">• Small business sites</li>
                      <li className="text-sm text-muted-foreground">• Basic e-commerce</li>
                    </ul>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full text-lg">Get Free SSL</Button>
              </Card>
              
              {/* Organization Validated SSL */}
              <Card className="p-8 border-2 border-primary relative hover:shadow-xl transition-shadow">
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">Recommended</Badge>
                <div className="text-center mb-6">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2 text-card-foreground">Organization Validated SSL</h3>
                  <p className="text-muted-foreground mb-4">Business SSL protection from</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-primary">R899</span>
                    <span className="text-xl text-muted-foreground">/year</span>
                  </div>
                </div>
                
                <div className="text-left space-y-4 mb-8">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-primary uppercase tracking-wider">Included Features</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>Organization Validation</li>
                      <li className="flex items-center text-sm"><Shield className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>256-bit Encryption</li>
                      <li className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>Enhanced Trust Seal</li>
                      <li className="flex items-center text-sm"><Settings className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>Company Details Displayed</li>
                      <li className="flex items-center text-sm"><Globe className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>99.9% Browser Recognition</li>
                      <li className="flex items-center text-sm"><Shield className="h-4 w-4 text-primary mr-2 flex-shrink-0"/>$1M Warranty</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-primary uppercase tracking-wider">Perfect For</h4>
                    <ul className="space-y-1">
                      <li className="text-sm text-muted-foreground">• Business websites</li>
                      <li className="text-sm text-muted-foreground">• E-commerce sites</li>
                      <li className="text-sm text-muted-foreground">• Client portals</li>
                      <li className="text-sm text-muted-foreground">• Corporate sites</li>
                    </ul>
                  </div>
                </div>
                
                <Button className="w-full text-lg">Order Organization SSL</Button>
              </Card>
            </div>
            
            {/* SSL Benefits */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold text-center mb-8">Why You Need SSL Certificates</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center mt-1">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Data Encryption</h4>
                    <p className="text-sm text-muted-foreground">Protect sensitive data transmitted between your website and visitors</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center mt-1">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Trust & Credibility</h4>
                    <p className="text-sm text-muted-foreground">Show visitors that your site is secure and trustworthy</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center mt-1">
                    <Search className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">SEO Benefits</h4>
                    <p className="text-sm text-muted-foreground">Google gives ranking preference to SSL-secured websites</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center mt-1">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Browser Compatibility</h4>
                    <p className="text-sm text-muted-foreground">Avoid browser warnings and security notifications</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center mt-1">
                    <Server className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Easy Installation</h4>
                    <p className="text-sm text-muted-foreground">Our team handles the technical setup for you</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center mt-1">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Fast Issuance</h4>
                    <p className="text-sm text-muted-foreground">Get your SSL certificate activated within minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Domain Services Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-foreground">Domain Services</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Register your perfect domain today or transfer your existing domains to us. It&apos;s quick, easy, and affordable.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Domain Registration */}
              <Card className="p-6 border-border hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Register Domains</h3>
                <p className="text-muted-foreground mb-4">
                  Register your perfect domain today. Choose from popular extensions like .co.za, .com, .net, and many more.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">.co.za</span>
                    <span className="font-semibold">R76/year</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">.com</span>
                    <span className="font-semibold">R189/year</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">.org.za</span>
                    <span className="font-semibold">R76/year</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">Search Domains</Button>
              </Card>
              
              {/* AI Domain Generator */}
              <Card className="p-6 border-border hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">AI Domain Generator</h3>
                <p className="text-muted-foreground mb-4">
                  Use our AI-powered domain name generator to create the perfect domain name for your business or project.
                </p>
                <div className="space-y-2 mb-6">
                  <Badge variant="secondary">AI-Powered</Badge>
                  <Badge variant="secondary">Creative Suggestions</Badge>
                  <Badge variant="secondary">Instant Availability</Badge>
                </div>
                <Button variant="outline" className="w-full">Try AI Generator</Button>
              </Card>
              
              {/* Domain Transfer */}
              <Card className="p-6 border-border hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Transfer Domains</h3>
                <p className="text-muted-foreground mb-4">
                  Transfer your domains to us in a few easy steps. Enjoy better service, competitive pricing, and expert support.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Easy transfer process
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    No downtime
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Free year extension
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Start Transfer</Button>
              </Card>
            </div>
            
            {/* Additional Domain Services */}
            <div className="mt-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <h3 className="text-lg font-bold mb-4">Bulk Domain Services</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Bulk Domain Registration</p>
                        <p className="text-sm text-muted-foreground">Register multiple domains at once</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Server className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Bulk Domain Transfer</p>
                        <p className="text-sm text-muted-foreground">Transfer multiple domains quickly</p>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-lg font-bold mb-4">Domain Management Tools</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Search className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Whois Search</p>
                        <p className="text-sm text-muted-foreground">View whois information on any domain</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Whois Privacy</p>
                        <p className="text-sm text-muted-foreground">Protect your personal information</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;