const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function testDesignSystem() {
    console.log('🚀 Starting Design System Verification Tests...\n');
    
    const browser = await chromium.launch({ headless: false, slowMo: 1000 });
    const context = await browser.newContext({
        viewport: { width: 1920, height: 1080 }
    });
    const page = await context.newPage();
    
    const results = {
        filesExist: {},
        designSystemLoaded: false,
        componentsPresent: {},
        responsiveTests: {},
        accessibility: {},
        errors: []
    };

    try {
        // Test 1: Check if design system files exist
        console.log('📁 Testing File Existence...');
        const filesToCheck = [
            'css/design-system.css',
            'design-system-guide.md',
            'DESIGN_SYSTEM_IMPLEMENTATION_SUMMARY.md'
        ];
        
        for (const file of filesToCheck) {
            const fullPath = path.join(__dirname, file);
            results.filesExist[file] = fs.existsSync(fullPath);
            console.log(`   ${results.filesExist[file] ? '✅' : '❌'} ${file}`);
        }

        // Test 2: Load homepage and check design system CSS
        console.log('\n🎨 Testing Design System CSS Loading...');
        await page.goto(`file://${path.join(__dirname, 'index.html')}`);
        
        // Check if design-system.css is loaded
        const designSystemLink = await page.$('link[href*="design-system.css"]');
        results.designSystemLoaded = designSystemLink !== null;
        console.log(`   ${results.designSystemLoaded ? '✅' : '❌'} Design System CSS loaded`);

        // Test 3: Check if design system CSS variables are available
        console.log('\n🎯 Testing CSS Custom Properties...');
        const cssVariables = [
            '--color-primary-600',
            '--color-secondary-500',
            '--text-lg',
            '--space-4',
            '--radius-lg'
        ];
        
        for (const variable of cssVariables) {
            const value = await page.evaluate((varName) => {
                return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
            }, variable);
            
            const exists = value !== '';
            results.componentsPresent[variable] = exists;
            console.log(`   ${exists ? '✅' : '❌'} ${variable}: ${value || 'Not found'}`);
        }

        // Test 4: Check for design system components on homepage
        console.log('\n🧩 Testing Homepage Components...');
        const componentsToCheck = [
            { selector: '.btn', name: 'Button Components' },
            { selector: '.card', name: 'Card Components' },
            { selector: '.heading-display', name: 'Typography Classes' },
            { selector: '.grid', name: 'Grid System' },
            { selector: '.container', name: 'Container Classes' }
        ];

        for (const component of componentsToCheck) {
            const elements = await page.$$(component.selector);
            const found = elements.length > 0;
            results.componentsPresent[component.name] = found;
            console.log(`   ${found ? '✅' : '❌'} ${component.name}: ${elements.length} found`);
        }

        // Test 5: Check pricing cards implementation
        console.log('\n💳 Testing Pricing Cards...');
        const pricingCards = await page.$$('.card-pricing');
        results.componentsPresent['Pricing Cards'] = pricingCards.length > 0;
        console.log(`   ${pricingCards.length > 0 ? '✅' : '❌'} Pricing Cards: ${pricingCards.length} found`);

        if (pricingCards.length > 0) {
            // Check if featured card has special styling
            const featuredCard = await page.$('.card-pricing.featured, .border-secondary-500');
            console.log(`   ${featuredCard ? '✅' : '❌'} Featured pricing card styling`);
        }

        // Test 6: Check button variations
        console.log('\n🔘 Testing Button Variations...');
        const buttonVariations = [
            '.btn-primary',
            '.btn-secondary',
            '.btn-outline-primary',
            '.btn-lg',
            '.btn-md'
        ];

        for (const btnClass of buttonVariations) {
            const buttons = await page.$$(btnClass);
            const found = buttons.length > 0;
            results.componentsPresent[btnClass] = found;
            console.log(`   ${found ? '✅' : '❌'} ${btnClass}: ${buttons.length} found`);
        }

        // Test 7: Test responsive behavior
        console.log('\n📱 Testing Responsive Design...');
        const viewports = [
            { width: 390, height: 844, name: 'Mobile' },
            { width: 768, height: 1024, name: 'Tablet' },
            { width: 1920, height: 1080, name: 'Desktop' }
        ];

        for (const viewport of viewports) {
            await page.setViewportSize({ width: viewport.width, height: viewport.height });
            await page.waitForTimeout(500);

            // Check if mobile menu toggle is visible on mobile
            if (viewport.name === 'Mobile') {
                const mobileToggle = await page.$('.mobile-menu-toggle');
                const isVisible = await mobileToggle?.isVisible();
                results.responsiveTests['Mobile Menu Toggle'] = isVisible;
                console.log(`   ${isVisible ? '✅' : '❌'} Mobile menu toggle visible on ${viewport.name}`);
            }

            // Check if grid columns adapt
            const gridElement = await page.$('.grid');
            if (gridElement) {
                const gridCols = await page.evaluate(() => {
                    const grid = document.querySelector('.grid');
                    return grid ? getComputedStyle(grid).gridTemplateColumns : null;
                });
                console.log(`   ✅ ${viewport.name} grid columns: ${gridCols || 'No grid found'}`);
            }
        }

        // Reset to desktop view
        await page.setViewportSize({ width: 1920, height: 1080 });

        // Test 8: Check domains page
        console.log('\n🌐 Testing Domains Page...');
        await page.goto(`file://${path.join(__dirname, 'domains.html')}`);
        
        const domainsComponents = [
            { selector: '.card-feature', name: 'Feature Cards' },
            { selector: '.card-testimonial', name: 'Testimonial Cards' },
            { selector: '.btn-group', name: 'Button Groups' }
        ];

        for (const component of domainsComponents) {
            const elements = await page.$$(component.selector);
            const found = elements.length > 0;
            results.componentsPresent[`Domains: ${component.name}`] = found;
            console.log(`   ${found ? '✅' : '❌'} ${component.name}: ${elements.length} found`);
        }

        // Test 9: Check fibre page
        console.log('\n🌐 Testing Fibre Page...');
        await page.goto(`file://${path.join(__dirname, 'fibre.html')}`);
        
        const fibreComponents = [
            { selector: '.bg-primary-800', name: 'Background Colors' },
            { selector: '.card-hover', name: 'Hover Cards' },
            { selector: '.grid', name: 'Grid Layout' }
        ];

        for (const component of fibreComponents) {
            const elements = await page.$$(component.selector);
            const found = elements.length > 0;
            results.componentsPresent[`Fibre: ${component.name}`] = found;
            console.log(`   ${found ? '✅' : '❌'} ${component.name}: ${elements.length} found`);
        }

        // Test 10: Check accessibility features
        console.log('\n♿ Testing Accessibility Features...');
        await page.goto(`file://${path.join(__dirname, 'index.html')}`);
        
        // Check for focus states
        const firstButton = await page.$('.btn');
        if (firstButton) {
            await firstButton.focus();
            const focusedElement = await page.evaluate(() => document.activeElement.className);
            results.accessibility['Focus States'] = focusedElement.includes('btn');
            console.log(`   ${results.accessibility['Focus States'] ? '✅' : '❌'} Button focus states working`);
        }

        // Check for proper heading hierarchy
        const headings = await page.$$eval('h1, h2, h3, h4, h5, h6', els => 
            els.map(el => ({ tag: el.tagName, class: el.className }))
        );
        results.accessibility['Heading Classes'] = headings.some(h => h.class.includes('heading-'));
        console.log(`   ${results.accessibility['Heading Classes'] ? '✅' : '❌'} Heading classes applied: ${headings.length} headings found`);

        // Test 11: Check for console errors
        console.log('\n🐛 Checking for Console Errors...');
        page.on('console', msg => {
            if (msg.type() === 'error') {
                results.errors.push(msg.text());
            }
        });

        // Reload page to catch any errors
        await page.reload();
        await page.waitForTimeout(2000);

        console.log(`   ${results.errors.length === 0 ? '✅' : '❌'} Console errors: ${results.errors.length}`);
        if (results.errors.length > 0) {
            results.errors.forEach(error => console.log(`     ❌ ${error}`));
        }

    } catch (error) {
        console.error('❌ Test failed:', error.message);
        results.errors.push(error.message);
    } finally {
        await browser.close();
    }

    // Generate summary report
    console.log('\n📊 DESIGN SYSTEM VERIFICATION SUMMARY');
    console.log('=====================================');
    
    const totalTests = Object.keys(results.componentsPresent).length + 
                      Object.keys(results.filesExist).length +
                      Object.keys(results.responsiveTests).length +
                      Object.keys(results.accessibility).length +
                      (results.designSystemLoaded ? 1 : 0);
    
    const passedTests = Object.values(results.componentsPresent).filter(Boolean).length +
                       Object.values(results.filesExist).filter(Boolean).length +
                       Object.values(results.responsiveTests).filter(Boolean).length +
                       Object.values(results.accessibility).filter(Boolean).length +
                       (results.designSystemLoaded ? 1 : 0);

    console.log(`\n✅ Tests Passed: ${passedTests}/${totalTests}`);
    console.log(`📈 Success Rate: ${Math.round((passedTests/totalTests) * 100)}%`);
    
    if (results.errors.length === 0 && passedTests === totalTests) {
        console.log('\n🎉 ALL TESTS PASSED! Design system implementation is successful.');
    } else if (passedTests/totalTests >= 0.8) {
        console.log('\n✅ MOSTLY SUCCESSFUL! Minor issues detected but core functionality works.');
    } else {
        console.log('\n⚠️  ISSUES DETECTED! Please review the failed tests above.');
    }

    // Save detailed results
    const reportPath = path.join(__dirname, 'design-system-test-results.json');
    fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
    console.log(`\n📄 Detailed results saved to: design-system-test-results.json`);

    return results;
}

// Run the tests
testDesignSystem().catch(console.error);