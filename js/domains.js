document.addEventListener('DOMContentLoaded', () => {
    // Domain search elements
    const searchInput = document.getElementById('domainSearch');
    const searchBtn = document.querySelector('.search-btn');
    const searchResult = document.getElementById('searchResult');
    const selectedTld = document.querySelector('.selected-tld');
    const tldOptions = document.querySelectorAll('.tld-option');

    // Pricing tabs elements
    const tabBtns = document.querySelectorAll('.tab-btn');
    const pricingTabs = document.querySelectorAll('.pricing-tab');

    // Bulk checker elements
    const bulkDomains = document.getElementById('bulkDomains');
    const checkBtn = document.querySelector('.check-btn');
    const bulkResults = document.getElementById('bulkResults');

    // TLD Selection
    tldOptions.forEach(option => {
        option.addEventListener('click', () => {
            selectedTld.textContent = option.textContent;
            const price = option.getAttribute('data-price');
            updatePriceDisplay(price);
        });
    });

    // Handle search button click
    searchBtn.addEventListener('click', () => {
        performDomainSearch();
    });

    // Handle enter key press
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performDomainSearch();
        }
    });

    function performDomainSearch() {
        const domain = searchInput.value.trim();
        const tld = selectedTld.textContent;

        if (domain) {
            // Show loading state
            searchBtn.innerHTML = '<span class="loading"></span>';
            searchResult.style.display = 'none';

            // Simulate API call with setTimeout
            setTimeout(() => {
                const isAvailable = Math.random() > 0.5; // Simulate random availability
                displaySearchResult(domain + tld, isAvailable);
                searchBtn.textContent = 'Search';
            }, 1000);
        } else {
            searchInput.placeholder = 'Please enter a domain name';
            searchInput.classList.add('error');
            setTimeout(() => {
                searchInput.classList.remove('error');
                searchInput.placeholder = 'Find your perfect domain name';
            }, 2000);
        }
    }

    function displaySearchResult(domain, isAvailable) {
        searchResult.className = 'search-result ' + (isAvailable ? 'available' : 'unavailable');
        searchResult.innerHTML = `
            <div class="result-content">
                <strong>${domain}</strong> is ${isAvailable ? 'available!' : 'not available'}
                ${isAvailable ? 
                    `<button class="register-btn" onclick="window.location.href='https://www.afrilinktelecon.co.za/whmcs-bridge/?ccce=cart&a=add&domain=register&query=${domain}'">
                        Register Now
                    </button>` : 
                    '<p>Try another domain name or check suggestions below</p>'}
            </div>
        `;
        searchResult.style.display = 'block';
    }

    // Pricing Tabs
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.getAttribute('data-tab');
            
            // Update active states
            tabBtns.forEach(b => b.classList.remove('active'));
            pricingTabs.forEach(t => t.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(tab).classList.add('active');
        });
    });

    // Bulk Domain Checker
    checkBtn.addEventListener('click', () => {
        const domains = bulkDomains.value.trim().split('\n').filter(d => d.length > 0);
        
        if (domains.length === 0) {
            alert('Please enter at least one domain to check');
            return;
        }

        if (domains.length > 10) {
            alert('Please enter no more than 10 domains at a time');
            return;
        }

        // Show loading state
        checkBtn.innerHTML = '<span class="loading"></span>';
        bulkResults.innerHTML = '';

        // Process each domain with a delay
        domains.forEach((domain, index) => {
            setTimeout(() => {
                const isAvailable = Math.random() > 0.5; // Simulate random availability
                addBulkResult(domain, isAvailable);
                
                if (index === domains.length - 1) {
                    checkBtn.textContent = 'Check Availability';
                }
            }, index * 500);
        });
    });

    function addBulkResult(domain, isAvailable) {
        const resultDiv = document.createElement('div');
        resultDiv.className = `domain-result ${isAvailable ? 'available' : 'unavailable'}`;
        resultDiv.innerHTML = `
            <span>${domain}</span>
            <span>${isAvailable ? 'Available' : 'Not Available'}</span>
            ${isAvailable ? 
                `<button class="register-btn" onclick="window.location.href='https://www.afrilinktelecon.co.za/whmcs-bridge/?ccce=cart&a=add&domain=register&query=${domain}'">
                    Register
                </button>` : 
                ''}
        `;
        bulkResults.appendChild(resultDiv);
    }

    // Input validation
    searchInput.addEventListener('input', () => {
        let value = searchInput.value;
        
        // Remove spaces and special characters except hyphen
        value = value.replace(/[^a-zA-Z0-9-]/g, '').toLowerCase();
        
        // Ensure no consecutive hyphens
        value = value.replace(/-+/g, '-');
        
        // Ensure doesn't start or end with hyphen
        value = value.replace(/^-/, '').replace(/-$/, '');
        
        searchInput.value = value;
    });

    // Domain Transfer functionality
    const transferBtn = document.querySelector('.transfer-btn');
    const transferInput = document.getElementById('transferDomain');
    
    if (transferBtn && transferInput) {
        transferBtn.addEventListener('click', () => {
            const domain = transferInput.value.trim();
            
            if (domain) {
                // Show loading state
                transferBtn.innerHTML = '<span class="loading"></span>';
                
                // Simulate transfer check
                setTimeout(() => {
                    // In a real implementation, this would check with your domain API
                    alert(`Transfer check initiated for ${domain}. Please check your email for further instructions.`);
                    transferBtn.textContent = 'Check Transfer';
                    transferInput.value = '';
                }, 1500);
            } else {
                transferInput.placeholder = 'Please enter a domain name';
                transferInput.classList.add('error');
                setTimeout(() => {
                    transferInput.classList.remove('error');
                    transferInput.placeholder = 'Enter domain name to transfer';
                }, 2000);
            }
        });
        
        transferInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                transferBtn.click();
            }
        });
    }
}); 