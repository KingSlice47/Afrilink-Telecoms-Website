// Types for pricing data
interface PricingPlan {
    name: string;
    price: number;
    storage: number;
    emails: number;
    databases: number;
}

// Header scroll effect
window.addEventListener('scroll', (): void => {
    const header = document.querySelector('.header') as HTMLElement;
    if (header) {
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#ffffff';
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        } else {
            header.style.backgroundColor = 'transparent';
            header.style.boxShadow = 'none';
        }
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e: Event) {
        e.preventDefault();
        const href = (this as HTMLAnchorElement).getAttribute('href');
        if (href) {
            document.querySelector(href)?.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu toggle
const setupMobileMenu = (): void => {
    const navLinks = document.querySelector('.nav-links');
    if (window.innerWidth <= 768 && navLinks) {
        navLinks.classList.add('mobile-menu');
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', (): void => {
    setupMobileMenu();
});

// Resize handler
window.addEventListener('resize', (): void => {
    setupMobileMenu();
});

// WHMCS Integration helper
const redirectToWHMCS = (plan: string): void => {
    const whmcsUrl = 'https://your-whmcs-url.com/order';
    window.location.href = `${whmcsUrl}?plan=${encodeURIComponent(plan)}`;
};

// Add click handlers to buy now buttons
document.querySelectorAll('.buy-now').forEach(button => {
    button.addEventListener('click', function(e: Event) {
        e.preventDefault();
        const plan = (this as HTMLElement).closest('.pricing-card')?.querySelector('h3')?.textContent?.toLowerCase() || '';
        redirectToWHMCS(plan);
    });
}); 