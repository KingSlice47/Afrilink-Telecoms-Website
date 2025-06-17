// Modern JavaScript for Enhanced User Experience

// Utility functions
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// Constants
const WHMCS_BASE_URL = 'https://www.afrilinktelecon.co.za/whmcs-bridge/?ccce=cart&a=add';

// State management
const state = {
    isScrolled: false,
    isFormSubmitting: false,
    notifications: []
};

// Notification system
class NotificationManager {
    constructor() {
        this.container = this.createContainer();
    }

    createContainer() {
        const container = document.createElement('div');
        container.className = 'notification-container';
        container.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            z-index: 10000;
            display: flex;
            flex-direction: column;
            gap: 10px;
        `;
        document.body.appendChild(container);
        return container;
    }

    show(message, type = 'info', duration = 5000) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            background: ${this.getBackgroundColor(type)};
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 350px;
            font-weight: 500;
        `;
        notification.textContent = message;

        this.container.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Auto remove
        setTimeout(() => {
            this.remove(notification);
        }, duration);

        return notification;
    }

    getBackgroundColor(type) {
        const colors = {
            success: 'linear-gradient(135deg, #27AE60, #2ECC71)',
            error: 'linear-gradient(135deg, #E74C3C, #C0392B)',
            warning: 'linear-gradient(135deg, #F39C12, #E67E22)',
            info: 'linear-gradient(135deg, #3498DB, #2980B9)'
        };
        return colors[type] || colors.info;
    }

    remove(notification) {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }
}

const notify = new NotificationManager();

// Enhanced header scroll effect with performance optimization
const initializeHeaderScroll = () => {
    const header = $('.header');
    if (!header) return;

    let ticking = false;

    const updateHeader = () => {
        const scrolled = window.scrollY > 50;
        
        if (scrolled !== state.isScrolled) {
            state.isScrolled = scrolled;
            header.classList.toggle('scrolled', scrolled);
        }
        ticking = false;
    };

    const onScroll = () => {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
};

// Enhanced smooth scrolling with offset for fixed header
const initializeSmoothScrolling = () => {
    $$('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            if (href === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }

            const target = $(href);
            if (target) {
                const headerHeight = $('.header')?.offsetHeight || 80;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
};

// Enhanced Mobile menu functionality with sliding animation
const initializeMobileMenu = () => {
    const navLinks = $('.nav-links');
    const mobileToggle = $('.mobile-menu-toggle');
    
    if (!navLinks || !mobileToggle) return;

    let isMenuOpen = false;

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
        navLinks.classList.toggle('active', isMenuOpen);
        mobileToggle.classList.toggle('active', isMenuOpen);
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        
        // Announce state change for accessibility
        mobileToggle.setAttribute('aria-expanded', isMenuOpen);
    };

    const closeMenu = () => {
        if (isMenuOpen) {
            isMenuOpen = false;
            navLinks.classList.remove('active');
            mobileToggle.classList.remove('active');
            document.body.style.overflow = '';
            mobileToggle.setAttribute('aria-expanded', 'false');
        }
    };

    // Toggle menu on hamburger click
    mobileToggle.addEventListener('click', toggleMenu);

    // Close menu when clicking on nav links
    $$('.nav-links a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (isMenuOpen && !navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
            closeMenu();
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isMenuOpen) {
            closeMenu();
        }
    });

    // Close menu on window resize to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && isMenuOpen) {
            closeMenu();
        }
    });

    // Set initial ARIA attributes
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileToggle.setAttribute('aria-label', 'Toggle navigation menu');
};

// Enhanced WHMCS integration
const initializeWHMCSIntegration = () => {
    const redirectToWHMCS = (plan) => {
        const url = `${WHMCS_BASE_URL}&pid=${encodeURIComponent(plan)}`;
        
        // Show loading state
        notify.show('Redirecting to checkout...', 'info', 2000);
        
        // Delay redirect slightly for better UX
        setTimeout(() => {
            window.location.href = url;
        }, 500);
    };

    // Handle buy now buttons
    $$('.buy-now').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const card = this.closest('.pricing-card');
            const planTitle = card?.querySelector('h3');
            
            if (planTitle) {
                const plan = planTitle.textContent.toLowerCase().replace(/\s+/g, '');
                
                // Add loading state to button
                const originalText = this.textContent;
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
                this.disabled = true;
                
                // Reset button after delay
                setTimeout(() => {
                    this.textContent = originalText;
                    this.disabled = false;
                }, 3000);
                
                redirectToWHMCS(plan);
            }
        });
    });
};

// Enhanced contact form with validation and feedback
const initializeContactForm = () => {
    const form = $('.contact-form form');
    if (!form) return;

    // Form validation rules
    const validators = {
        required: (value) => value.trim() !== '',
        email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        minLength: (min) => (value) => value.length >= min
    };

    // Validate field
    const validateField = (field) => {
        const value = field.value;
        const rules = field.dataset.validate?.split('|') || [];
        
        for (const rule of rules) {
            if (rule === 'required' && !validators.required(value)) {
                return 'This field is required';
            }
            if (rule === 'email' && value && !validators.email(value)) {
                return 'Please enter a valid email address';
            }
        }
        return null;
    };

    // Show field error
    const showFieldError = (field, message) => {
        field.classList.add('error');
        
        let errorDiv = field.parentNode.querySelector('.field-error');
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.className = 'field-error';
            errorDiv.style.cssText = 'color: #E74C3C; font-size: 0.875rem; margin-top: 5px;';
            field.parentNode.appendChild(errorDiv);
        }
        errorDiv.textContent = message;
    };

    // Clear field error
    const clearFieldError = (field) => {
        field.classList.remove('error');
        const errorDiv = field.parentNode.querySelector('.field-error');
        if (errorDiv) {
            errorDiv.remove();
        }
    };

    // Add validation attributes
    const nameInput = form.querySelector('input[placeholder*="Name"]');
    const emailInput = form.querySelector('input[type="email"], input[placeholder*="Email"]');
    const messageTextarea = form.querySelector('textarea');
    
    if (nameInput) nameInput.dataset.validate = 'required';
    if (emailInput) emailInput.dataset.validate = 'required|email';
    if (messageTextarea) messageTextarea.dataset.validate = 'required';

    // Real-time validation
    $$('.contact-form input, .contact-form textarea, .contact-form select').forEach(field => {
        field.addEventListener('blur', () => {
            const error = validateField(field);
            if (error) {
                showFieldError(field, error);
            } else {
                clearFieldError(field);
            }
        });

        field.addEventListener('input', () => {
            if (field.classList.contains('error')) {
                const error = validateField(field);
                if (!error) {
                    clearFieldError(field);
                }
            }
        });
    });

    // Form submission
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        if (state.isFormSubmitting) return;
        
        // Validate all fields
        const fields = $$('.contact-form input, .contact-form textarea, .contact-form select');
        let hasErrors = false;
        
        fields.forEach(field => {
            const error = validateField(field);
            if (error) {
                showFieldError(field, error);
                hasErrors = true;
            } else {
                clearFieldError(field);
            }
        });
        
        if (hasErrors) {
            notify.show('Please fix the errors in the form', 'error');
            return;
        }
        
        // Submit form
        state.isFormSubmitting = true;
        const submitBtn = form.querySelector('.contact-btn');
        const originalText = submitBtn.textContent;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Success
            notify.show('Thank you! Your message has been sent successfully.', 'success');
            form.reset();
            
        } catch (error) {
            notify.show('Sorry, there was an error sending your message. Please try again.', 'error');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            state.isFormSubmitting = false;
        }
    });
};

// Intersection Observer for animations
const initializeAnimations = () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    $$('.pricing-card, .feature-card, .domain-feature-card, .builder-feature, .feature').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });
};

// Enhanced loading states for all interactive elements
const initializeLoadingStates = () => {
    $$('button, .btn-primary, .btn-secondary').forEach(button => {
        if (!button.dataset.loadingInitialized) {
            button.dataset.loadingInitialized = 'true';
            
            button.addEventListener('click', function() {
                if (this.classList.contains('loading')) return;
                
                this.classList.add('loading');
                const originalContent = this.innerHTML;
                
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
                
                setTimeout(() => {
                    this.innerHTML = originalContent;
                    this.classList.remove('loading');
                }, 2000);
            });
        }
    });
};

// Performance monitoring
const initializePerformanceMonitoring = () => {
    // Log Core Web Vitals
    if ('web-vital' in window) {
        import('https://unpkg.com/web-vitals@3/dist/web-vitals.js')
            .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
                getCLS(console.log);
                getFID(console.log);
                getFCP(console.log);
                getLCP(console.log);
                getTTFB(console.log);
            });
    }
};

// Main initialization
const initialize = () => {
    // Core functionality
    initializeHeaderScroll();
    initializeSmoothScrolling();
    initializeMobileMenu();
    initializeWHMCSIntegration();
    initializeContactForm();
    
    // Enhancements
    initializeAnimations();
    initializeLoadingStates();
    initializePerformanceMonitoring();
    
    // Show welcome message
    setTimeout(() => {
        notify.show('Welcome to Afrilink Telecoms! 🚀', 'success', 3000);
    }, 1000);
};

// DOM Content Loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
} else {
    initialize();
}

// Window load event for additional optimizations
window.addEventListener('load', () => {
    // Preload critical resources
    const criticalResources = [
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
    ];
    
    criticalResources.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = url;
        document.head.appendChild(link);
    });
});

// Error handling
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
    notify.show('Something went wrong. Please refresh the page.', 'error');
});

// Export for external use
window.AfrilinkTelecomsApp = {
    notify,
    state,
    initialize
}; 