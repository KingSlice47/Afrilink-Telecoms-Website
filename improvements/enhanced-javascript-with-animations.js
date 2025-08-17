// ENHANCED JAVASCRIPT WITH ALL ORIGINAL ANIMATIONS PRESERVED

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize intersection observer for scroll animations
    initScrollAnimations();
    
    // Initialize all billing toggles (hero and main)
    initBillingToggles();
    
    // Initialize plan comparison functionality
    initPlanComparison();
    
    // Initialize live chat widget
    initChatWidget();
    
    // Initialize form validation
    initFormValidation();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize dynamic pricing animations
    initPricingAnimations();
    
    // Initialize card hover effects
    initCardEffects();
});

// Scroll-triggered animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Stagger animations for child elements
                const animatedChildren = entry.target.querySelectorAll('.animate-slideInUp, .animate-fadeInUp');
                animatedChildren.forEach((child, index) => {
                    setTimeout(() => {
                        child.style.animationDelay = `${index * 0.1}s`;
                        child.classList.add('animate-in');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
}

// Enhanced billing toggle functionality
function initBillingToggles() {
    // Main billing toggle
    const mainBillingToggle = document.getElementById('billing-toggle');
    const heroBillingToggle = document.getElementById('hero-billing-toggle');
    
    function updatePricing(isAnnual) {
        // Update main pricing section
        updatePricingSection(isAnnual);
        
        // Update hero pricing
        updateHeroPricing(isAnnual);
        
        // Update billing option styles
        updateBillingOptions(isAnnual);
        
        // Animate price changes
        animatePriceChanges();
    }
    
    function updatePricingSection(isAnnual) {
        const monthlyPrices = document.querySelectorAll('.monthly-price');
        const annualPrices = document.querySelectorAll('.annual-price');
        const annualSavings = document.querySelectorAll('.annual-savings');
        
        monthlyPrices.forEach(price => {
            price.style.display = isAnnual ? 'none' : 'inline';
        });
        
        annualPrices.forEach(price => {
            price.style.display = isAnnual ? 'inline' : 'none';
        });
        
        annualSavings.forEach(saving => {
            saving.style.display = isAnnual ? 'block' : 'none';
        });
    }
    
    function updateHeroPricing(isAnnual) {
        const heroMonthly = document.querySelector('.hero-content .monthly-price');
        const heroAnnual = document.querySelector('.hero-content .annual-price');
        const heroSavings = document.querySelector('.hero-content .annual-savings');
        
        if (heroMonthly && heroAnnual) {
            heroMonthly.style.display = isAnnual ? 'none' : 'inline';
            heroAnnual.style.display = isAnnual ? 'inline' : 'none';
        }
        
        if (heroSavings) {
            heroSavings.style.display = isAnnual ? 'block' : 'none';
        }
    }
    
    function updateBillingOptions(isAnnual) {
        const allMonthlyOptions = document.querySelectorAll('.billing-option.monthly, .billing-option-mini.monthly');
        const allAnnualOptions = document.querySelectorAll('.billing-option.annual, .billing-option-mini.annual');
        
        allMonthlyOptions.forEach(option => {
            option.classList.toggle('active', !isAnnual);
        });
        
        allAnnualOptions.forEach(option => {
            option.classList.toggle('active', isAnnual);
        });
    }
    
    function animatePriceChanges() {
        const priceElements = document.querySelectorAll('.amount');
        priceElements.forEach(element => {
            element.style.transform = 'scale(1.1)';
            element.style.transition = 'transform 0.3s ease';
            
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 200);
        });
    }
    
    // Sync both toggles
    if (mainBillingToggle) {
        mainBillingToggle.addEventListener('change', function() {
            const isAnnual = this.checked;
            if (heroBillingToggle) {
                heroBillingToggle.checked = isAnnual;
            }
            updatePricing(isAnnual);
        });
    }
    
    if (heroBillingToggle) {
        heroBillingToggle.addEventListener('change', function() {
            const isAnnual = this.checked;
            if (mainBillingToggle) {
                mainBillingToggle.checked = isAnnual;
            }
            updatePricing(isAnnual);
        });
    }
}

// Enhanced plan comparison functionality
function initPlanComparison() {
    const compareCheckboxes = document.querySelectorAll('.plan-compare');
    const selectedPlansContainer = document.getElementById('selected-plans');
    const selectedPlanTags = document.querySelector('.selected-plan-tags');
    const showComparisonBtn = document.getElementById('show-comparison');
    const comparisonModal = document.getElementById('comparison-modal');
    const modalClose = document.querySelector('.modal-close');
    
    let selectedPlans = [];
    
    compareCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const planName = this.dataset.plan;
            const planCard = this.closest('.card-pricing');
            
            if (this.checked) {
                if (selectedPlans.length < 3) {
                    selectedPlans.push(planName);
                    planCard.classList.add('selected-for-comparison');
                    
                    // Add selection animation
                    planCard.style.transform = 'scale(1.05)';
                    setTimeout(() => {
                        planCard.style.transform = '';
                    }, 300);
                } else {
                    this.checked = false;
                    showNotification('You can compare up to 3 plans only.', 'warning');
                    return;
                }
            } else {
                selectedPlans = selectedPlans.filter(plan => plan !== planName);
                planCard.classList.remove('selected-for-comparison');
            }
            
            updateSelectedPlansDisplay();
        });
    });
    
    function updateSelectedPlansDisplay() {
        if (selectedPlans.length > 0) {
            selectedPlansContainer.style.display = 'flex';
            selectedPlansContainer.classList.add('animate-slideInUp');
            
            selectedPlanTags.innerHTML = selectedPlans.map(plan => 
                `<span class="plan-tag animate-fadeInUp">${plan}</span>`
            ).join('');
        } else {
            selectedPlansContainer.style.display = 'none';
        }
    }
    
    if (showComparisonBtn) {
        showComparisonBtn.addEventListener('click', function() {
            if (selectedPlans.length < 2) {
                showNotification('Please select at least 2 plans to compare.', 'info');
                return;
            }
            showComparisonModal();
        });
    }
    
    function showComparisonModal() {
        const comparisonData = getComparisonData();
        const comparisonTable = document.querySelector('.comparison-table');
        
        comparisonTable.innerHTML = generateComparisonTable(comparisonData);
        comparisonModal.style.display = 'flex';
        comparisonModal.classList.add('show');
        
        // Animate table rows
        setTimeout(() => {
            const rows = comparisonTable.querySelectorAll('tr');
            rows.forEach((row, index) => {
                row.style.animationDelay = `${index * 0.1}s`;
                row.classList.add('animate-fadeInUp');
            });
        }, 100);
    }
    
    function getComparisonData() {
        const planData = {
            entry: {
                name: 'Entry Hosting',
                price: 'R 89.99',
                storage: '25 GB NVMe SSD',
                email: '25 Accounts',
                databases: '10 MySQL',
                ssl: 'Free SSL',
                domain: 'Free .co.za',
                support: 'Standard'
            },
            basic: {
                name: 'Basic Hosting',
                price: 'R 149.99',
                storage: '50 GB NVMe SSD',
                email: '50 Accounts',
                databases: '20 MySQL',
                ssl: 'Free SSL',
                domain: 'Free .co.za/.com',
                support: 'Standard + Builder'
            },
            super: {
                name: 'Super Hosting',
                price: 'R 249.99',
                storage: '100 GB NVMe SSD',
                email: '100 Accounts',
                databases: '30 MySQL',
                ssl: 'Free SSL',
                domain: 'Free Any TLD',
                support: 'Priority Support'
            },
            ultimate: {
                name: 'Ultimate Hosting',
                price: 'R 299.99',
                storage: '200 GB NVMe SSD',
                email: 'Unlimited',
                databases: '40 MySQL',
                ssl: 'Free SSL',
                domain: 'Free Premium',
                support: 'Dedicated Agent'
            }
        };
        
        return selectedPlans.map(plan => planData[plan]);
    }
    
    function generateComparisonTable(data) {
        const features = ['name', 'price', 'storage', 'email', 'databases', 'ssl', 'domain', 'support'];
        const featureLabels = {
            name: 'Plan',
            price: 'Price/Month',
            storage: 'Storage',
            email: 'Email Accounts',
            databases: 'Databases',
            ssl: 'SSL Certificate',
            domain: 'Free Domain',
            support: 'Support Level'
        };
        
        let html = '<table class="comparison-table-grid">';
        
        // Header row
        html += '<tr><th>Feature</th>';
        data.forEach(plan => {
            html += `<th>${plan.name}</th>`;
        });
        html += '</tr>';
        
        // Feature rows
        features.slice(1).forEach(feature => {
            html += `<tr><td class="feature-label">${featureLabels[feature]}</td>`;
            data.forEach(plan => {
                html += `<td>${plan[feature]}</td>`;
            });
            html += '</tr>';
        });
        
        html += '</table>';
        return html;
    }
    
    // Modal close functionality
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            closeModal();
        });
    }
    
    if (comparisonModal) {
        comparisonModal.addEventListener('click', function(e) {
            if (e.target === comparisonModal) {
                closeModal();
            }
        });
    }
    
    function closeModal() {
        comparisonModal.classList.remove('show');
        setTimeout(() => {
            comparisonModal.style.display = 'none';
        }, 300);
    }
}

// Enhanced live chat widget
function initChatWidget() {
    const chatWidget = document.createElement('div');
    chatWidget.id = 'chat-widget';
    chatWidget.className = 'chat-widget animate-slideInUp';
    chatWidget.innerHTML = `
        <div class="chat-bubble animate-bounce">
            <i class="fas fa-comments"></i>
            <span>Need help?</span>
            <div class="chat-pulse"></div>
        </div>
        <div class="chat-popup" style="display: none;">
            <div class="chat-header">
                <h4>How can we help?</h4>
                <button class="chat-close">&times;</button>
            </div>
            <div class="chat-body">
                <p>Choose how you'd like to get support:</p>
                <div class="chat-options">
                    <a href="tel:+27123456789" class="chat-option">
                        <i class="fas fa-phone"></i>
                        <span>Call Now</span>
                    </a>
                    <a href="mailto:support@afrilink.co.za" class="chat-option">
                        <i class="fas fa-envelope"></i>
                        <span>Email Us</span>
                    </a>
                    <a href="#contact" class="chat-option">
                        <i class="fas fa-message"></i>
                        <span>Send Message</span>
                    </a>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(chatWidget);
    
    // Animate chat widget entry
    setTimeout(() => {
        chatWidget.style.animationDelay = '2s';
        chatWidget.classList.add('animate-in');
    }, 2000);
    
    // Chat widget functionality
    const chatBubble = chatWidget.querySelector('.chat-bubble');
    const chatPopup = chatWidget.querySelector('.chat-popup');
    const chatClose = chatWidget.querySelector('.chat-close');
    
    chatBubble.addEventListener('click', function() {
        const isVisible = chatPopup.style.display !== 'none';
        
        if (isVisible) {
            chatPopup.classList.remove('animate-slideInUp');
            chatPopup.classList.add('animate-fadeOut');
            setTimeout(() => {
                chatPopup.style.display = 'none';
            }, 300);
        } else {
            chatPopup.style.display = 'block';
            chatPopup.classList.remove('animate-fadeOut');
            chatPopup.classList.add('animate-slideInUp');
        }
    });
    
    chatClose.addEventListener('click', function() {
        chatPopup.classList.add('animate-fadeOut');
        setTimeout(() => {
            chatPopup.style.display = 'none';
        }, 300);
    });
}

// Enhanced form validation
function initFormValidation() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (!validateForm(this)) {
                e.preventDefault();
                
                // Shake animation for invalid form
                this.classList.add('shake');
                setTimeout(() => {
                    this.classList.remove('shake');
                }, 600);
            }
        });
    });
    
    function validateForm(form) {
        const inputs = form.querySelectorAll('[data-validate]');
        let isValid = true;
        
        inputs.forEach(input => {
            const rules = input.dataset.validate.split('|');
            const value = input.value.trim();
            
            // Clear previous errors with animation
            input.classList.remove('error');
            const errorMsg = input.parentNode.querySelector('.error-message');
            if (errorMsg) {
                errorMsg.classList.add('animate-fadeOut');
                setTimeout(() => errorMsg.remove(), 300);
            }
            
            rules.forEach(rule => {
                if (rule === 'required' && !value) {
                    showError(input, 'This field is required');
                    isValid = false;
                } else if (rule === 'email' && value && !isValidEmail(value)) {
                    showError(input, 'Please enter a valid email address');
                    isValid = false;
                }
            });
        });
        
        return isValid;
    }
    
    function showError(input, message) {
        input.classList.add('error');
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message animate-fadeInUp';
        errorElement.textContent = message;
        input.parentNode.appendChild(errorElement);
    }
    
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
}

// Enhanced mobile menu
function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const isOpen = navLinks.classList.contains('mobile-open');
            
            if (isOpen) {
                navLinks.classList.remove('mobile-open');
                navLinks.classList.add('mobile-closing');
                setTimeout(() => {
                    navLinks.classList.remove('mobile-closing');
                }, 300);
            } else {
                navLinks.classList.add('mobile-open');
                navLinks.classList.add('animate-slideInRight');
            }
            
            this.classList.toggle('active');
        });
    }
}

// Smooth scrolling enhancement
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Add highlight animation to target
                target.classList.add('highlight-target');
                setTimeout(() => {
                    target.classList.remove('highlight-target');
                }, 2000);
            }
        });
    });
}

// Dynamic pricing animations
function initPricingAnimations() {
    const pricingCards = document.querySelectorAll('.card-pricing');
    
    pricingCards.forEach((card, index) => {
        // Stagger card animations
        card.style.animationDelay = `${index * 0.1}s`;
        
        // Add hover animations
        card.addEventListener('mouseenter', function() {
            this.classList.add('animate-glow');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('animate-glow');
        });
    });
}

// Enhanced card effects
function initCardEffects() {
    const cards = document.querySelectorAll('.card-feature');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.card-feature-icon i');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(10deg)';
                icon.style.color = 'var(--primary-500)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.card-feature-icon i');
            if (icon) {
                icon.style.transform = '';
                icon.style.color = '';
            }
        });
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type} animate-slideInRight`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">&times;</button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove notification
    setTimeout(() => {
        notification.classList.add('animate-slideOutRight');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
    
    // Manual close
    notification.querySelector('.notification-close').addEventListener('click', function() {
        notification.classList.add('animate-slideOutRight');
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
}

function getNotificationIcon(type) {
    const icons = {
        info: 'info-circle',
        warning: 'exclamation-triangle',
        success: 'check-circle',
        error: 'times-circle'
    };
    return icons[type] || 'info-circle';
}

// Performance optimization - lazy load animations
function optimizeAnimations() {
    // Reduce animations on slower devices
    if (navigator.hardwareConcurrency < 4) {
        document.body.classList.add('reduced-animations');
    }
    
    // Pause animations when tab is not visible
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            document.body.classList.add('paused-animations');
        } else {
            document.body.classList.remove('paused-animations');
        }
    });
}

// Initialize performance optimizations
optimizeAnimations();