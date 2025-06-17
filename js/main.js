// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
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
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Mobile menu toggle
const setupMobileMenu = function() {
    const navLinks = document.querySelector('.nav-links');
    if (window.innerWidth <= 768 && navLinks) {
        navLinks.classList.add('mobile-menu');
    }
};

// WHMCS Integration helper
const redirectToWHMCS = function(plan) {
    const whmcsUrl = 'https://www.afrilinktelecon.co.za/whmcs-bridge/?ccce=cart&a=add';
    window.location.href = `${whmcsUrl}&pid=${encodeURIComponent(plan)}`;
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    setupMobileMenu();
    
    // Add click handlers to buy now buttons
    document.querySelectorAll('.buy-now').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.pricing-card');
            const planTitle = card ? card.querySelector('h3') : null;
            const plan = planTitle ? planTitle.textContent.toLowerCase().replace(' ', '') : '';
            redirectToWHMCS(plan);
        });
    });
});

// Resize handler
window.addEventListener('resize', function() {
    setupMobileMenu();
});

// Contact form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = {};
            for (let [key, value] of formData.entries()) {
                data[key] = value;
            }
            
            // Show success message (in a real implementation, you'd send this to your server)
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
}); 