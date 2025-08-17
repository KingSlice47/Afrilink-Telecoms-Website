// ENHANCED JAVASCRIPT FOR IMPROVED FUNCTIONALITY

// Billing Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const billingToggle = document.getElementById('billing-toggle');
    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const annualPrices = document.querySelectorAll('.annual-price');
    const monthlyPeriods = document.querySelectorAll('.monthly-period');
    const annualPeriods = document.querySelectorAll('.annual-period');
    const annualSavings = document.querySelectorAll('.annual-savings');
    const billingOptions = document.querySelectorAll('.billing-option');
    
    if (billingToggle) {
        billingToggle.addEventListener('change', function() {
            const isAnnual = this.checked;
            
            // Toggle prices
            monthlyPrices.forEach(price => {
                price.style.display = isAnnual ? 'none' : 'inline';
            });
            
            annualPrices.forEach(price => {
                price.style.display = isAnnual ? 'inline' : 'none';
            });
            
            // Toggle periods
            monthlyPeriods.forEach(period => {
                period.style.display = isAnnual ? 'none' : 'inline';
            });
            
            annualPeriods.forEach(period => {
                period.style.display = isAnnual ? 'inline' : 'none';
            });
            
            // Toggle savings indicators
            annualSavings.forEach(saving => {
                saving.style.display = isAnnual ? 'block' : 'none';
            });
            
            // Update billing option styles
            billingOptions.forEach((option, index) => {
                if ((index === 0 && !isAnnual) || (index === 1 && isAnnual)) {
                    option.classList.add('active');
                } else {
                    option.classList.remove('active');
                }
            });
        });
    }
    
    // Plan Comparison Functionality
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
            
            if (this.checked) {
                if (selectedPlans.length < 3) {
                    selectedPlans.push(planName);
                } else {
                    this.checked = false;
                    alert('You can compare up to 3 plans only.');
                    return;
                }
            } else {
                selectedPlans = selectedPlans.filter(plan => plan !== planName);
            }
            
            updateSelectedPlansDisplay();
        });
    });
    
    function updateSelectedPlansDisplay() {
        if (selectedPlans.length > 0) {
            selectedPlansContainer.style.display = 'flex';
            selectedPlanTags.innerHTML = selectedPlans.map(plan => 
                `<span class="plan-tag">${plan}</span>`
            ).join('');
        } else {
            selectedPlansContainer.style.display = 'none';
        }
    }
    
    if (showComparisonBtn) {
        showComparisonBtn.addEventListener('click', function() {
            if (selectedPlans.length < 2) {
                alert('Please select at least 2 plans to compare.');
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
            comparisonModal.style.display = 'none';
        });
    }
    
    if (comparisonModal) {
        comparisonModal.addEventListener('click', function(e) {
            if (e.target === comparisonModal) {
                comparisonModal.style.display = 'none';
            }
        });
    }
    
    // Live Chat Widget
    createChatWidget();
    
    function createChatWidget() {
        const chatWidget = document.createElement('div');
        chatWidget.id = 'chat-widget';
        chatWidget.className = 'chat-widget';
        chatWidget.innerHTML = `
            <div class="chat-bubble">
                <i class="fas fa-comments"></i>
                <span>Need help?</span>
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
        
        // Chat widget functionality
        const chatBubble = chatWidget.querySelector('.chat-bubble');
        const chatPopup = chatWidget.querySelector('.chat-popup');
        const chatClose = chatWidget.querySelector('.chat-close');
        
        chatBubble.addEventListener('click', function() {
            chatPopup.style.display = chatPopup.style.display === 'none' ? 'block' : 'none';
        });
        
        chatClose.addEventListener('click', function() {
            chatPopup.style.display = 'none';
        });
    }
    
    // Enhanced Mobile Menu
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('mobile-open');
            this.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Form validation enhancement
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (!validateForm(this)) {
                e.preventDefault();
            }
        });
    });
    
    function validateForm(form) {
        const inputs = form.querySelectorAll('[data-validate]');
        let isValid = true;
        
        inputs.forEach(input => {
            const rules = input.dataset.validate.split('|');
            const value = input.value.trim();
            
            // Clear previous errors
            input.classList.remove('error');
            const errorMsg = input.parentNode.querySelector('.error-message');
            if (errorMsg) errorMsg.remove();
            
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
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        input.parentNode.appendChild(errorElement);
    }
    
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});

// Additional CSS for chat widget and comparison table
const additionalStyles = `
<style>
.chat-widget {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
}

.chat-bubble {
    background: var(--primary-500);
    color: white;
    padding: 16px 20px;
    border-radius: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
}

.chat-bubble:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.3);
}

.chat-popup {
    position: absolute;
    bottom: 70px;
    right: 0;
    background: white;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    width: 280px;
    border: 1px solid var(--gray-200);
}

.chat-header {
    padding: 16px 20px;
    border-bottom: 1px solid var(--gray-200);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.chat-close {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: var(--text-secondary);
}

.chat-body {
    padding: 20px;
}

.chat-options {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 16px;
}

.chat-option {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    border: 1px solid var(--gray-200);
    border-radius: 8px;
    text-decoration: none;
    color: var(--text-primary);
    transition: all 0.2s ease;
}

.chat-option:hover {
    background: var(--primary-50);
    border-color: var(--primary-200);
}

.comparison-table-grid {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

.comparison-table-grid th,
.comparison-table-grid td {
    padding: 12px 16px;
    text-align: left;
    border-bottom: 1px solid var(--gray-200);
}

.comparison-table-grid th {
    background: var(--gray-50);
    font-weight: 600;
    color: var(--text-primary);
}

.feature-label {
    font-weight: 500;
    background: var(--gray-25);
}

.mobile-menu-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}

.mobile-menu-toggle.active span:nth-child(2) {
    opacity: 0;
}

.mobile-menu-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
}

.nav-links.mobile-open {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    padding: 20px;
    gap: 16px;
}

.error-message {
    color: var(--danger-500);
    font-size: 12px;
    margin-top: 4px;
}

.error {
    border-color: var(--danger-500) !important;
}

@media (max-width: 768px) {
    .chat-popup {
        width: 260px;
        right: -20px;
    }
    
    .comparison-table-grid {
        font-size: 14px;
    }
    
    .comparison-table-grid th,
    .comparison-table-grid td {
        padding: 8px 12px;
    }
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', additionalStyles);