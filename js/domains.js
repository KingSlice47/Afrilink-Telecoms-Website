// Modern Domains JavaScript - Enhanced UX and Functionality

document.addEventListener('DOMContentLoaded', () => {
    // Utility functions
    const $ = (selector) => document.querySelector(selector);
    const $$ = (selector) => document.querySelectorAll(selector);
    
    // Configuration
    const config = {
        whmcsUrl: 'https://www.afrilinktelecon.co.za/whmcs-bridge/?ccce=cart',
        simulateApiDelay: 1500,
        maxBulkDomains: 10
    };

    // Domain search elements
    const searchInput = $('#domainSearch');
    const searchBtn = $('.search-btn');
    const searchResult = $('#searchResult');
    const selectedTld = $('.selected-tld');
    const tldOptions = $$('.tld-option');
    const tldDropdown = $('.tld-dropdown');

    // Pricing tabs elements
    const tabBtns = $$('.tab-btn');
    const pricingTabs = $$('.pricing-tab');

    // Bulk checker elements
    const bulkDomains = $('#bulkDomains');
    const checkBtn = $('.check-btn');
    const bulkResults = $('#bulkResults');

    // Domain Transfer elements
    const transferBtn = $('.transfer-btn');
    const transferInput = $('#transferDomain');

    // Enhanced notification system (use from main.js if available)
    const notify = window.AfrilinkTelecomsApp?.notify || {
        show: (message, type) => {
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 100px;
                right: 20px;
                background: ${type === 'success' ? '#27AE60' : type === 'error' ? '#E74C3C' : '#3498DB'};
                color: white;
                padding: 15px 20px;
                border-radius: 8px;
                z-index: 10000;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                transform: translateX(100%);
                transition: transform 0.3s ease;
            `;
            notification.textContent = message;
            document.body.appendChild(notification);
            
            setTimeout(() => notification.style.transform = 'translateX(0)', 100);
            setTimeout(() => notification.remove(), 5000);
        }
    };

    // State management
    const state = {
        selectedTldPrice: 'R99.99',
        isSearching: false,
        isBulkChecking: false,
        searchHistory: [],
        currentTld: '.co.za'
    };

    // Domain validation utilities
    const domainValidation = {
        isValidDomain: (domain) => {
            const domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*$/;
            return domainRegex.test(domain) && domain.length >= 2 && domain.length <= 63;
        },

        cleanDomain: (domain) => {
            return domain
                .toLowerCase()
                .replace(/[^a-zA-Z0-9-]/g, '')
                .replace(/-+/g, '-')
                .replace(/^-+|-+$/g, '');
        },

        extractDomain: (input) => {
            // Remove www., http://, https://, and TLD if present
            return input.replace(/^(https?:\/\/)?(www\.)?/, '').split('.')[0];
        }
    };

    // Enhanced TLD Selection with animations
    const initializeTldSelector = () => {
        if (!selectedTld || !tldOptions.length) return;

        // Set initial state
        updateSelectedTld('.co.za', 'R99.99');

        // Enhanced dropdown functionality
        tldOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const tld = option.textContent;
                const price = option.getAttribute('data-price');
                
                updateSelectedTld(tld, price);
                
                // Add selection animation
                option.style.background = 'var(--secondary-orange)';
                option.style.color = 'white';
                setTimeout(() => {
                    option.style.background = '';
                    option.style.color = '';
                }, 300);
                
                // Hide dropdown
                if (tldDropdown) {
                    tldDropdown.style.display = 'none';
                }
            });
        });

        // Show dropdown on click/hover
        selectedTld.addEventListener('click', () => {
            if (tldDropdown) {
                tldDropdown.style.display = tldDropdown.style.display === 'block' ? 'none' : 'block';
            }
        });

        // Hide dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.tld-selector') && tldDropdown) {
                tldDropdown.style.display = 'none';
            }
        });
    };

    const updateSelectedTld = (tld, price) => {
        state.currentTld = tld;
        state.selectedTldPrice = price;
        
        if (selectedTld) {
            selectedTld.textContent = tld;
            selectedTld.style.animation = 'pulse 0.3s ease';
            setTimeout(() => selectedTld.style.animation = '', 300);
        }
        
        updatePriceDisplay(price);
    };

    const updatePriceDisplay = (price) => {
        const priceElements = $$('.price-display, .selected-price');
        priceElements.forEach(el => {
            el.textContent = price;
            el.style.color = 'var(--secondary-orange)';
        });
    };

    // Enhanced domain search with better UX
    const initializeDomainSearch = () => {
        if (!searchInput || !searchBtn) return;

        // Input validation and formatting
        searchInput.addEventListener('input', (e) => {
            let value = domainValidation.cleanDomain(e.target.value);
            e.target.value = value;
            
            // Real-time validation feedback
            const isValid = value.length === 0 || domainValidation.isValidDomain(value);
            e.target.classList.toggle('error', !isValid && value.length > 0);
            
            // Update search button state
            if (searchBtn) {
                searchBtn.disabled = !isValid || value.length === 0;
                searchBtn.classList.toggle('disabled', searchBtn.disabled);
            }
        });

        // Enhanced search functionality
        const performSearch = () => {
            const domain = searchInput.value.trim();
            const fullDomain = domain + state.currentTld;
            
            if (!domain || !domainValidation.isValidDomain(domain)) {
                showError('Please enter a valid domain name');
                return;
            }

            if (state.isSearching) return;

            startSearch(fullDomain);
        };

        // Event listeners
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !searchBtn.disabled) {
                performSearch();
            }
        });
    };

    const startSearch = (fullDomain) => {
        state.isSearching = true;
        
        // Add to search history
        if (!state.searchHistory.includes(fullDomain)) {
            state.searchHistory.unshift(fullDomain);
            state.searchHistory = state.searchHistory.slice(0, 10); // Keep last 10
        }

        // Update UI to loading state
        searchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Searching...';
        searchBtn.disabled = true;
        
        if (searchResult) {
            searchResult.style.display = 'none';
        }

        // Simulate API call with realistic delay
        setTimeout(() => {
            const isAvailable = simulateDomainAvailability(fullDomain);
            displaySearchResult(fullDomain, isAvailable);
            
            // Reset button
            searchBtn.innerHTML = '<i class="fas fa-search"></i> Search';
            searchBtn.disabled = false;
            state.isSearching = false;
            
            // Show success message
            notify.show(`Domain search completed for ${fullDomain}`, 'info');
            
        }, config.simulateApiDelay);
    };

    const simulateDomainAvailability = (domain) => {
        // More realistic simulation based on domain characteristics
        const commonDomains = ['google', 'facebook', 'youtube', 'amazon', 'twitter'];
        const isCommon = commonDomains.some(common => domain.toLowerCase().includes(common));
        
        if (isCommon) return false;
        
        // Random availability with bias towards availability for shorter domains
        const availability = domain.length < 6 ? Math.random() > 0.7 : Math.random() > 0.3;
        return availability;
    };

    const displaySearchResult = (domain, isAvailable) => {
        if (!searchResult) return;

        const resultClass = isAvailable ? 'available' : 'unavailable';
        const statusText = isAvailable ? 'is available!' : 'is not available';
        const price = state.selectedTldPrice;
        
        searchResult.className = `search-result ${resultClass}`;
        searchResult.innerHTML = `
            <div class="result-content">
                <div class="result-header">
                    <i class="fas fa-${isAvailable ? 'check-circle' : 'times-circle'}"></i>
                    <strong>${domain}</strong> ${statusText}
                </div>
                ${isAvailable ? `
                    <div class="result-price">
                        <span class="price-text">Register for ${price}/year</span>
                    </div>
                    <div class="result-actions">
                        <button class="register-btn btn-primary" onclick="registerDomain('${domain}')">
                            <i class="fas fa-shopping-cart"></i> Register Now
                        </button>
                        <button class="add-to-cart-btn btn-secondary" onclick="addToCart('${domain}')">
                            <i class="fas fa-plus"></i> Add to Cart
                        </button>
                    </div>
                ` : `
                    <div class="suggestions">
                        <p>Try these alternatives:</p>
                        <div class="suggestion-list">
                            ${generateSuggestions(domain).map(suggestion => `
                                <button class="suggestion-btn" onclick="searchSuggestion('${suggestion}')">
                                    ${suggestion}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                `}
            </div>
        `;
        
        // Animate in
        searchResult.style.display = 'block';
        searchResult.style.animation = 'fadeInUp 0.5s ease';
    };

    const generateSuggestions = (domain) => {
        const baseDomain = domain.split('.')[0];
        const suggestions = [
            baseDomain + 'online.co.za',
            baseDomain + 'sa.co.za',
            baseDomain + 'pro.co.za',
            'get' + baseDomain + '.co.za',
            baseDomain + '24.co.za'
        ];
        return suggestions.slice(0, 3);
    };

    // Enhanced pricing tabs with smooth transitions
    const initializePricingTabs = () => {
        if (!tabBtns.length || !pricingTabs.length) return;

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tab = btn.getAttribute('data-tab');
                
                // Update active states with animation
                tabBtns.forEach(b => {
                    b.classList.remove('active');
                    b.style.transform = 'scale(1)';
                });
                
                pricingTabs.forEach(t => {
                    t.classList.remove('active');
                    t.style.opacity = '0';
                });
                
                // Activate selected tab
                btn.classList.add('active');
                btn.style.transform = 'scale(1.05)';
                
                setTimeout(() => {
                    const targetTab = document.getElementById(tab);
                    if (targetTab) {
                        targetTab.classList.add('active');
                        targetTab.style.opacity = '1';
                        targetTab.style.animation = 'fadeInUp 0.3s ease';
                    }
                    btn.style.transform = 'scale(1)';
                }, 150);
                
                notify.show(`Showing ${tab} domains`, 'info', 2000);
            });
        });
    };

    // Enhanced bulk domain checker
    const initializeBulkChecker = () => {
        if (!bulkDomains || !checkBtn) return;

        // Input validation and formatting
        bulkDomains.addEventListener('input', (e) => {
            const lines = e.target.value.split('\n').filter(line => line.trim());
            const validLines = lines.filter(line => {
                const domain = domainValidation.extractDomain(line.trim());
                return domainValidation.isValidDomain(domain);
            });
            
            // Update placeholder with count
            const placeholder = `Enter up to ${config.maxBulkDomains} domain names to check\nValid domains: ${validLines.length}/${lines.length}`;
            e.target.setAttribute('placeholder', placeholder);
            
            // Update button state
            checkBtn.disabled = validLines.length === 0;
            checkBtn.classList.toggle('disabled', checkBtn.disabled);
        });

        checkBtn.addEventListener('click', () => {
            if (state.isBulkChecking) return;
            
            const domains = bulkDomains.value.trim().split('\n')
                .filter(d => d.trim().length > 0)
                .map(d => d.trim());
            
            if (domains.length === 0) {
                notify.show('Please enter at least one domain to check', 'error');
                return;
            }

            if (domains.length > config.maxBulkDomains) {
                notify.show(`Please enter no more than ${config.maxBulkDomains} domains at a time`, 'error');
                return;
            }

            performBulkCheck(domains);
        });
    };

    const performBulkCheck = (domains) => {
        state.isBulkChecking = true;
        
        // Update UI
        checkBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Checking...';
        checkBtn.disabled = true;
        bulkResults.innerHTML = '<div class="checking-message">Checking domains...</div>';

        // Process each domain with staggered timing
        domains.forEach((domain, index) => {
            setTimeout(() => {
                const cleanDomain = domainValidation.extractDomain(domain);
                const isValid = domainValidation.isValidDomain(cleanDomain);
                
                if (!isValid) {
                    addBulkResult(domain, false, 'Invalid domain format');
                } else {
                    const isAvailable = simulateDomainAvailability(domain);
                    addBulkResult(domain, isAvailable);
                }
                
                // Reset button when done
                if (index === domains.length - 1) {
                    setTimeout(() => {
                        checkBtn.innerHTML = '<i class="fas fa-search"></i> Check Availability';
                        checkBtn.disabled = false;
                        state.isBulkChecking = false;
                        notify.show('Bulk domain check completed!', 'success');
                    }, 500);
                }
            }, index * 400); // Stagger by 400ms
        });
    };

    const addBulkResult = (domain, isAvailable, errorMessage = null) => {
        // Remove checking message on first result
        const checkingMessage = bulkResults.querySelector('.checking-message');
        if (checkingMessage) {
            checkingMessage.remove();
        }

        const resultDiv = document.createElement('div');
        resultDiv.className = `domain-result ${isAvailable ? 'available' : 'unavailable'}`;
        
        if (errorMessage) {
            resultDiv.innerHTML = `
                <span class="domain-name">${domain}</span>
                <span class="status error">${errorMessage}</span>
            `;
        } else {
            resultDiv.innerHTML = `
                <span class="domain-name">${domain}</span>
                <span class="status">${isAvailable ? 'Available' : 'Not Available'}</span>
                ${isAvailable ? `
                    <button class="register-btn btn-primary" onclick="registerDomain('${domain}')">
                        <i class="fas fa-shopping-cart"></i> Register
                    </button>
                ` : ''}
            `;
        }
        
        // Animate in
        resultDiv.style.opacity = '0';
        resultDiv.style.transform = 'translateY(20px)';
        bulkResults.appendChild(resultDiv);
        
        setTimeout(() => {
            resultDiv.style.opacity = '1';
            resultDiv.style.transform = 'translateY(0)';
            resultDiv.style.transition = 'all 0.3s ease';
        }, 100);
    };

    // Enhanced domain transfer functionality
    const initializeDomainTransfer = () => {
        if (!transferBtn || !transferInput) return;

        // Input validation
        transferInput.addEventListener('input', (e) => {
            const domain = e.target.value.trim();
            const isValid = domain.includes('.') && domainValidation.isValidDomain(domain.split('.')[0]);
            
            e.target.classList.toggle('error', !isValid && domain.length > 0);
            transferBtn.disabled = !isValid;
        });

        transferBtn.addEventListener('click', () => {
            const domain = transferInput.value.trim();
            
            if (!domain) {
                showError('Please enter a domain name');
                return;
            }

            if (!domain.includes('.')) {
                showError('Please enter a complete domain name (e.g., example.com)');
                return;
            }

            performDomainTransfer(domain);
        });

        transferInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !transferBtn.disabled) {
                transferBtn.click();
            }
        });
    };

    const performDomainTransfer = (domain) => {
        // Show loading state
        const originalText = transferBtn.textContent;
        transferBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Checking...';
        transferBtn.disabled = true;
        
        // Simulate transfer check
        setTimeout(() => {
            const canTransfer = Math.random() > 0.3; // 70% can transfer
            
            if (canTransfer) {
                notify.show(`Transfer check successful for ${domain}. Check your email for instructions.`, 'success');
            } else {
                notify.show(`Transfer not available for ${domain}. Please contact support.`, 'warning');
            }
            
            transferBtn.textContent = originalText;
            transferBtn.disabled = false;
            transferInput.value = '';
        }, 2000);
    };

    // Global functions for onclick events
    window.registerDomain = (domain) => {
        const url = `${config.whmcsUrl}&domain=register&query=${encodeURIComponent(domain)}`;
        notify.show('Redirecting to registration...', 'info', 2000);
        setTimeout(() => window.location.href = url, 500);
    };

    window.addToCart = (domain) => {
        notify.show(`${domain} added to cart!`, 'success');
        // Implement cart functionality here
    };

    window.searchSuggestion = (domain) => {
        searchInput.value = domain.split('.')[0];
        updateSelectedTld('.' + domain.split('.').slice(1).join('.'), state.selectedTldPrice);
        searchBtn.click();
    };

    // Utility functions
    const showError = (message) => {
        notify.show(message, 'error');
        
        if (searchInput) {
            searchInput.classList.add('error');
            setTimeout(() => searchInput.classList.remove('error'), 3000);
        }
    };

    // Initialize all functionality
    const init = () => {
        initializeTldSelector();
        initializeDomainSearch();
        initializePricingTabs();
        initializeBulkChecker();
        initializeDomainTransfer();
        
        // Show welcome message
        setTimeout(() => {
            notify.show('Domain search ready! Find your perfect domain name.', 'info', 3000);
        }, 500);
    };

    // Start initialization
    init();
}); 