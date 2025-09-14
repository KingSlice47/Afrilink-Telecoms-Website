/* ========================================
   IMAGE ENHANCEMENT & OPTIMIZATION
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Curated high-quality Unsplash images for hosting/technology theme
    const imageLibrary = {
        servers: [
            'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1566223417581-4c7b6f4e2b5e?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&auto=format&fit=crop'
        ],
        dataCenter: [
            'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&auto=format&fit=crop'
        ],
        networking: [
            'https://images.unsplash.com/photo-1516996087931-5ae405802f9f?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1545987796-200677ee1011?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&auto=format&fit=crop'
        ],
        coding: [
            'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop'
        ],
        cloud: [
            'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop'
        ],
        security: [
            'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop'
        ],
        support: [
            'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&auto=format&fit=crop'
        ],
        team: [
            'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop'
        ]
    };
    
    // Background patterns for sections
    const backgroundPatterns = {
        hero: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1600&auto=format&fit=crop',
        features: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&auto=format&fit=crop',
        pricing: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&auto=format&fit=crop',
        contact: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=1600&auto=format&fit=crop'
    };
    
    // Initialize image enhancement
    initializeImageEnhancement();
    
    function initializeImageEnhancement() {
        addSectionBackgrounds();
        enhanceFeatureCards();
        createImageGallery();
        addStatsContainer();
        addTestimonialSection();
        setupLazyLoading();
        setupImageOptimization();
    }
    
    function addSectionBackgrounds() {
        // Add background to hero section
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.style.backgroundImage = `url(${backgroundPatterns.hero})`;
            heroSection.style.backgroundBlendMode = 'overlay';
            heroSection.style.backgroundSize = 'cover';
            heroSection.style.backgroundPosition = 'center';
        }
        
        // Add subtle patterns to other sections
        const sections = document.querySelectorAll('.section');
        sections.forEach((section, index) => {
            if (!section.classList.contains('hero')) {
                section.classList.add('section-container', 'has-pattern');
            }
        });
    }
    
    function enhanceFeatureCards() {
        const featureCards = document.querySelectorAll('.card-feature');
        
        featureCards.forEach((card, index) => {
            // Determine image category based on card content
            const cardText = card.textContent.toLowerCase();
            let imageCategory = 'servers';
            
            if (cardText.includes('support') || cardText.includes('help')) {
                imageCategory = 'support';
            } else if (cardText.includes('security') || cardText.includes('ssl') || cardText.includes('backup')) {
                imageCategory = 'security';
            } else if (cardText.includes('cloud') || cardText.includes('storage')) {
                imageCategory = 'cloud';
            } else if (cardText.includes('network') || cardText.includes('cdn')) {
                imageCategory = 'networking';
            } else if (cardText.includes('code') || cardText.includes('developer')) {
                imageCategory = 'coding';
            }
            
            // Add image to card
            const images = imageLibrary[imageCategory];
            const imageUrl = images[index % images.length];
            
            // Create image element
            const imageDiv = document.createElement('div');
            imageDiv.className = 'feature-card-image';
            imageDiv.innerHTML = `<img src="${imageUrl}" alt="Feature illustration" loading="lazy">`;
            
            // Insert image at the beginning of card
            card.classList.add('feature-card-enhanced');
            card.insertBefore(imageDiv, card.firstChild);
            
            // Wrap existing content
            const existingContent = Array.from(card.children).slice(1);
            const contentDiv = document.createElement('div');
            contentDiv.className = 'feature-card-content';
            
            existingContent.forEach(element => {
                contentDiv.appendChild(element);
            });
            
            card.appendChild(contentDiv);
        });
    }
    
    function createImageGallery() {
        // Add image gallery to showcase section
        const showcaseSection = document.querySelector('.section:last-of-type');
        if (showcaseSection && !showcaseSection.querySelector('.gallery-container')) {
            const galleryHTML = `
                <div class="container">
                    <h2 class="heading-2 text-center mb-12">Our Infrastructure</h2>
                    <div class="gallery-container">
                        <div class="gallery-item" data-category="datacenter">
                            <img src="${imageLibrary.dataCenter[0]}" alt="State-of-the-art data center" loading="lazy">
                            <div class="gallery-overlay">
                                <div>
                                    <h4>Enterprise Data Centers</h4>
                                    <p>99.9% uptime guarantee</p>
                                </div>
                            </div>
                        </div>
                        <div class="gallery-item" data-category="servers">
                            <img src="${imageLibrary.servers[1]}" alt="High-performance servers" loading="lazy">
                            <div class="gallery-overlay">
                                <div>
                                    <h4>High-Performance Servers</h4>
                                    <p>Latest generation hardware</p>
                                </div>
                            </div>
                        </div>
                        <div class="gallery-item" data-category="networking">
                            <img src="${imageLibrary.networking[0]}" alt="Network infrastructure" loading="lazy">
                            <div class="gallery-overlay">
                                <div>
                                    <h4>Advanced Networking</h4>
                                    <p>Lightning-fast connectivity</p>
                                </div>
                            </div>
                        </div>
                        <div class="gallery-item" data-category="security">
                            <img src="${imageLibrary.security[0]}" alt="Security measures" loading="lazy">
                            <div class="gallery-overlay">
                                <div>
                                    <h4>Enterprise Security</h4>
                                    <p>Multi-layered protection</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            const gallerySection = document.createElement('section');
            gallerySection.className = 'section section-container';
            gallerySection.innerHTML = galleryHTML;
            
            // Insert before contact section
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                contactSection.parentNode.insertBefore(gallerySection, contactSection);
            }
        }
    }
    
    function addStatsContainer() {
        // Add stats section with images
        const heroSection = document.querySelector('.hero');
        if (heroSection && !document.querySelector('.stats-container')) {
            const statsHTML = `
                <section class="section section-container bg-white">
                    <div class="container">
                        <div class="stats-container">
                            <div class="stat-card-enhanced">
                                <div class="stat-icon">
                                    <i class="fas fa-server"></i>
                                </div>
                                <div class="stat-number">99.9%</div>
                                <div class="stat-label">Uptime Guarantee</div>
                            </div>
                            <div class="stat-card-enhanced">
                                <div class="stat-icon">
                                    <i class="fas fa-users"></i>
                                </div>
                                <div class="stat-number">5,000+</div>
                                <div class="stat-label">Happy Customers</div>
                            </div>
                            <div class="stat-card-enhanced">
                                <div class="stat-icon">
                                    <i class="fas fa-globe"></i>
                                </div>
                                <div class="stat-number">10+</div>
                                <div class="stat-label">Data Centers</div>
                            </div>
                            <div class="stat-card-enhanced">
                                <div class="stat-icon">
                                    <i class="fas fa-headset"></i>
                                </div>
                                <div class="stat-number">24/7</div>
                                <div class="stat-label">Expert Support</div>
                            </div>
                        </div>
                    </div>
                </section>
            `;
            
            // Insert after hero section
            heroSection.insertAdjacentHTML('afterend', statsHTML);
        }
    }
    
    function addTestimonialSection() {
        // Add testimonial section with background image
        const featuresSection = document.querySelector('.section:nth-of-type(3)');
        if (featuresSection && !document.querySelector('.testimonial-container')) {
            const testimonialHTML = `
                <section class="section section-container">
                    <div class="container">
                        <div class="testimonial-container">
                            <div class="testimonial-background">
                                <img src="${imageLibrary.team[0]}" alt="Team background" loading="lazy">
                            </div>
                            <div class="testimonial-content">
                                <div class="testimonial-quote">
                                    "Afrilink Telecoms has been our hosting partner for over 3 years. Their reliability and support are unmatched in South Africa. We've never experienced any significant downtime."
                                </div>
                                <div class="testimonial-author">
                                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&crop=face" alt="John Smith" class="author-avatar" loading="lazy">
                                    <div class="author-info">
                                        <h4>John Smith</h4>
                                        <p>CTO, TechCorp Solutions</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            `;
            
            // Insert after features section
            featuresSection.insertAdjacentHTML('afterend', testimonialHTML);
        }
    }
    
    function setupLazyLoading() {
        // Implement intersection observer for lazy loading
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        // Observe all lazy images
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    function setupImageOptimization() {
        // Add WebP support detection and fallback
        function supportsWebP(callback) {
            const webP = new Image();
            webP.onload = webP.onerror = function () {
                callback(webP.height === 2);
            };
            webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
        }
        
        supportsWebP(function(supported) {
            if (supported) {
                // Replace image URLs with WebP versions
                const images = document.querySelectorAll('img');
                images.forEach(img => {
                    if (img.src && img.src.includes('unsplash.com')) {
                        img.src = img.src + '&fm=webp';
                    }
                });
            }
        });
    }
    
    // Add loading animations
    function addLoadingAnimations() {
        const containers = document.querySelectorAll('.feature-card-enhanced, .stat-card-enhanced, .gallery-item');
        
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                    entry.target.classList.add('animate-slideInUp');
                    animationObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        containers.forEach(container => {
            animationObserver.observe(container);
        });
    }
    
    // Initialize animations
    addLoadingAnimations();
    
    // Performance monitoring
    function monitorImagePerformance() {
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                list.getEntries().forEach((entry) => {
                    if (entry.entryType === 'navigation') {
                        console.log('Image loading performance:', {
                            loadTime: entry.loadEventEnd - entry.loadEventStart,
                            domContentLoaded: entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart
                        });
                    }
                });
            });
            
            observer.observe({ entryTypes: ['navigation'] });
        }
    }
    
    monitorImagePerformance();
});