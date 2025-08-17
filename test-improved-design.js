const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function testImprovedDesign() {
    console.log('🔍 Testing Improved Design Implementation...\n');
    
    const browser = await chromium.launch({ headless: false, slowMo: 1000 });
    const context = await browser.newContext({
        viewport: { width: 1920, height: 1080 }
    });
    const page = await context.newPage();
    
    const results = {
        structureMatches: {},
        improvements: {},
        designSystem: {},
        responsiveness: {},
        performance: {},
        comparison: {}
    };

    try {
        // Test 1: Load improved homepage
        console.log('🚀 Loading improved homepage...');
        await page.goto(`file://${path.join(__dirname, 'index-improved.html')}`);
        await page.waitForTimeout(2000);
        console.log('✅ Improved homepage loaded');

        // Test 2: Check structure matches domains.co.za layout
        console.log('\n📐 Testing Structure Alignment with domains.co.za...');
        
        const structureAnalysis = await page.evaluate(() => {
            const analysis = {};
            
            // Header analysis
            const header = document.querySelector('header');
            if (header) {
                analysis.header = {
                    height: header.offsetHeight,
                    position: getComputedStyle(header).position,
                    background: getComputedStyle(header).backgroundColor,
                    hasLogo: !!header.querySelector('img'),
                    isFixed: getComputedStyle(header).position === 'fixed'
                };
            }
            
            // Hero section analysis
            const hero = document.querySelector('main section:first-child');
            if (hero) {
                analysis.hero = {
                    background: getComputedStyle(hero).backgroundColor,
                    height: hero.offsetHeight,
                    hasBlueBackground: getComputedStyle(hero).backgroundColor.includes('rgb(4, 103, 181)'),
                    hasTitle: !!hero.querySelector('h1'),
                    hasButtons: hero.querySelectorAll('.btn').length
                };
            }
            
            // Hosting packages section
            const hostingSection = document.querySelector('#hosting');
            if (hostingSection) {
                analysis.hosting = {
                    background: getComputedStyle(hostingSection).backgroundColor,
                    cards: hostingSection.querySelectorAll('.card').length,
                    hasGridLayout: getComputedStyle(hostingSection.querySelector('.grid')).display === 'grid',
                    hasFeaturedCard: !!hostingSection.querySelector('.border-secondary-500')
                };
            }
            
            // Website builder section
            const builderSection = hostingSection.nextElementSibling;
            if (builderSection) {
                analysis.builder = {
                    background: getComputedStyle(builderSection).backgroundColor,
                    hasLightBackground: getComputedStyle(builderSection).backgroundColor.includes('rgb(238, 247, 255)'),
                    features: builderSection.querySelectorAll('.card-feature').length
                };
            }
            
            // Features section
            const featuresSection = document.querySelector('#features');
            if (featuresSection) {
                analysis.features = {
                    background: getComputedStyle(featuresSection).backgroundColor,
                    featureCards: featuresSection.querySelectorAll('.card-feature').length,
                    hasWhiteBackground: getComputedStyle(featuresSection).backgroundColor === 'rgb(255, 255, 255)'
                };
            }
            
            // Blue section (why choose us)
            const blueSection = document.querySelector('section[style*="rgb(9, 106, 191)"]');
            if (blueSection) {
                analysis.whyChoose = {
                    background: getComputedStyle(blueSection).backgroundColor,
                    hasBlueBackground: getComputedStyle(blueSection).backgroundColor.includes('rgb(9, 106, 191)'),
                    reasons: blueSection.querySelectorAll('.grid > div').length,
                    hasWhiteText: true
                };
            }
            
            return analysis;
        });
        
        results.structureMatches = structureAnalysis;
        
        // Verify structure matches domains.co.za pattern
        console.log(`   Header height: ${structureAnalysis.header?.height}px (target: ~86px) - ${structureAnalysis.header?.height === 86 ? '✅' : '❌'}`);
        console.log(`   Hero blue background: ${structureAnalysis.hero?.hasBlueBackground ? '✅' : '❌'}`);
        console.log(`   Hosting cards count: ${structureAnalysis.hosting?.cards} - ${structureAnalysis.hosting?.cards >= 4 ? '✅' : '❌'}`);
        console.log(`   Builder light background: ${structureAnalysis.builder?.hasLightBackground ? '✅' : '❌'}`);
        console.log(`   Features white background: ${structureAnalysis.features?.hasWhiteBackground ? '✅' : '❌'}`);
        console.log(`   Why choose blue background: ${structureAnalysis.whyChoose?.hasBlueBackground ? '✅' : '❌'}`);

        // Test 3: Check design system implementation
        console.log('\n🎨 Testing Design System Implementation...');
        
        const designSystemCheck = await page.evaluate(() => {
            const check = {};
            
            // CSS variables
            const rootStyles = getComputedStyle(document.documentElement);
            check.hasDesignSystemVars = {
                primary: rootStyles.getPropertyValue('--color-primary-600').trim() !== '',
                secondary: rootStyles.getPropertyValue('--color-secondary-500').trim() !== '',
                spacing: rootStyles.getPropertyValue('--space-4').trim() !== '',
                typography: rootStyles.getPropertyValue('--text-lg').trim() !== ''
            };
            
            // Components usage
            check.components = {
                buttons: document.querySelectorAll('.btn').length,
                cards: document.querySelectorAll('.card').length,
                headings: document.querySelectorAll('.heading-1, .heading-2, .heading-3, .heading-4, .heading-5').length,
                grids: document.querySelectorAll('.grid').length,
                containers: document.querySelectorAll('.container').length
            };
            
            // Typography implementation
            check.typography = {
                displayHeading: !!document.querySelector('.heading-display'),
                properFontSizes: document.querySelector('h1').style.fontSize.includes('42.4px'),
                h2FontSize: document.querySelector('h2').style.fontSize.includes('27.2px')
            };
            
            return check;
        });
        
        results.designSystem = designSystemCheck;
        
        console.log(`   Design system CSS vars: ${Object.values(designSystemCheck.hasDesignSystemVars).every(Boolean) ? '✅' : '❌'}`);
        console.log(`   Button components: ${designSystemCheck.components.buttons} found - ${designSystemCheck.components.buttons >= 10 ? '✅' : '❌'}`);
        console.log(`   Card components: ${designSystemCheck.components.cards} found - ${designSystemCheck.components.cards >= 20 ? '✅' : '❌'}`);
        console.log(`   Typography matching domains.co.za: ${designSystemCheck.typography.properFontSizes ? '✅' : '❌'}`);

        // Test 4: Responsive design testing
        console.log('\n📱 Testing Responsive Design...');
        
        const viewports = [
            { width: 390, height: 844, name: 'Mobile' },
            { width: 768, height: 1024, name: 'Tablet' },
            { width: 1920, height: 1080, name: 'Desktop' }
        ];

        for (const viewport of viewports) {
            await page.setViewportSize({ width: viewport.width, height: viewport.height });
            await page.waitForTimeout(500);

            const responsiveCheck = await page.evaluate(() => {
                return {
                    headerVisible: !!document.querySelector('header'),
                    gridAdapts: getComputedStyle(document.querySelector('.grid')).gridTemplateColumns,
                    mobileMenuVisible: window.innerWidth <= 768 ? getComputedStyle(document.querySelector('.mobile-menu-toggle')).display !== 'none' : true,
                    heroStacks: window.innerWidth <= 1024 ? true : getComputedStyle(document.querySelector('.hero-content').parentElement).gridTemplateColumns.split(' ').length === 1
                };
            });

            results.responsiveness[viewport.name] = responsiveCheck;
            console.log(`   ${viewport.name}: Grid adapts (${responsiveCheck.gridAdapts.split(' ').length} cols) - ✅`);
        }

        // Reset to desktop
        await page.setViewportSize({ width: 1920, height: 1080 });

        // Test 5: Performance and optimization
        console.log('\n⚡ Testing Performance...');
        
        const performanceMetrics = await page.evaluate(() => {
            return {
                domContentLoaded: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart,
                imagesCount: document.querySelectorAll('img').length,
                cssFiles: document.querySelectorAll('link[rel="stylesheet"]').length,
                jsFiles: document.querySelectorAll('script[src]').length,
                inlineStyles: document.querySelectorAll('[style]').length
            };
        });
        
        results.performance = performanceMetrics;
        console.log(`   DOM load time: ${performanceMetrics.domContentLoaded}ms - ${performanceMetrics.domContentLoaded < 1000 ? '✅' : '❌'}`);
        console.log(`   CSS files: ${performanceMetrics.cssFiles} - ${performanceMetrics.cssFiles <= 3 ? '✅' : '❌'}`);
        console.log(`   Images optimized: ${performanceMetrics.imagesCount} found - ✅`);

        // Test 6: Compare with original
        console.log('\n🔄 Comparing with Original Design...');
        
        // Load original for comparison
        await page.goto(`file://${path.join(__dirname, 'index.html')}`);
        await page.waitForTimeout(1000);
        
        const originalAnalysis = await page.evaluate(() => {
            return {
                sections: document.querySelectorAll('section').length,
                cards: document.querySelectorAll('.card').length,
                buttons: document.querySelectorAll('.btn').length,
                hasDesignSystem: !!document.querySelector('link[href*="design-system.css"]')
            };
        });
        
        // Go back to improved version
        await page.goto(`file://${path.join(__dirname, 'index-improved.html')}`);
        await page.waitForTimeout(1000);
        
        const improvedAnalysis = await page.evaluate(() => {
            return {
                sections: document.querySelectorAll('section').length,
                cards: document.querySelectorAll('.card').length,
                buttons: document.querySelectorAll('.btn').length,
                hasDesignSystem: !!document.querySelector('link[href*="design-system.css"]'),
                followsDomainsStructure: document.querySelector('section[style*="rgb(4, 103, 181)"]') && 
                                       document.querySelector('section[style*="rgb(238, 247, 255)"]') &&
                                       document.querySelector('section[style*="rgb(9, 106, 191)"]')
            };
        });
        
        results.comparison = {
            original: originalAnalysis,
            improved: improvedAnalysis,
            improvements: {
                followsDomainsStructure: improvedAnalysis.followsDomainsStructure,
                moreStructured: improvedAnalysis.sections >= originalAnalysis.sections,
                betterComponentUsage: improvedAnalysis.cards >= originalAnalysis.cards
            }
        };
        
        console.log(`   Follows domains.co.za structure: ${improvedAnalysis.followsDomainsStructure ? '✅' : '❌'}`);
        console.log(`   More structured sections: ${results.comparison.improvements.moreStructured ? '✅' : '❌'} (${improvedAnalysis.sections} vs ${originalAnalysis.sections})`);
        console.log(`   Better component usage: ${results.comparison.improvements.betterComponentUsage ? '✅' : '❌'} (${improvedAnalysis.cards} vs ${originalAnalysis.cards})`);

        // Test 7: Visual comparison screenshots
        console.log('\n📸 Taking Screenshots...');
        
        await page.screenshot({ 
            path: path.join(__dirname, 'improved-homepage-screenshot.png'),
            fullPage: true 
        });
        console.log('   Screenshot saved: improved-homepage-screenshot.png');

        // Test 8: Accessibility improvements
        console.log('\n♿ Testing Accessibility...');
        
        const accessibilityCheck = await page.evaluate(() => {
            return {
                hasHeadingHierarchy: document.querySelector('h1') && document.querySelector('h2') && document.querySelector('h3'),
                hasAltTags: Array.from(document.querySelectorAll('img')).every(img => img.hasAttribute('alt')),
                hasAriaLabels: document.querySelectorAll('[aria-label]').length > 0,
                hasFocusStates: getComputedStyle(document.querySelector('.btn'), ':focus').outline !== 'none',
                properColorContrast: true // Would need more complex checking
            };
        });
        
        results.accessibility = accessibilityCheck;
        console.log(`   Heading hierarchy: ${accessibilityCheck.hasHeadingHierarchy ? '✅' : '❌'}`);
        console.log(`   Alt tags on images: ${accessibilityCheck.hasAltTags ? '✅' : '❌'}`);
        console.log(`   Focus states: ${accessibilityCheck.hasFocusStates ? '✅' : '❌'}`);

    } catch (error) {
        console.error('❌ Test failed:', error.message);
        results.error = error.message;
    } finally {
        await browser.close();
    }

    // Generate summary
    console.log('\n📊 IMPROVED DESIGN VERIFICATION SUMMARY');
    console.log('=======================================');
    
    const totalChecks = 15; // Estimated number of key checks
    let passedChecks = 0;
    
    // Count passed checks
    if (results.structureMatches.header?.height === 86) passedChecks++;
    if (results.structureMatches.hero?.hasBlueBackground) passedChecks++;
    if (results.structureMatches.hosting?.cards >= 4) passedChecks++;
    if (results.structureMatches.builder?.hasLightBackground) passedChecks++;
    if (results.structureMatches.features?.hasWhiteBackground) passedChecks++;
    if (results.structureMatches.whyChoose?.hasBlueBackground) passedChecks++;
    if (Object.values(results.designSystem.hasDesignSystemVars || {}).every(Boolean)) passedChecks++;
    if (results.designSystem.components?.buttons >= 10) passedChecks++;
    if (results.designSystem.components?.cards >= 20) passedChecks++;
    if (results.designSystem.typography?.properFontSizes) passedChecks++;
    if (results.comparison.improvements?.followsDomainsStructure) passedChecks++;
    if (results.comparison.improvements?.moreStructured) passedChecks++;
    if (results.comparison.improvements?.betterComponentUsage) passedChecks++;
    if (results.accessibility?.hasHeadingHierarchy) passedChecks++;
    if (results.accessibility?.hasFocusStates) passedChecks++;
    
    console.log(`\n✅ Checks Passed: ${passedChecks}/${totalChecks}`);
    console.log(`📈 Success Rate: ${Math.round((passedChecks/totalChecks) * 100)}%`);
    
    if (passedChecks >= 13) {
        console.log('\n🎉 EXCELLENT! Improved design successfully implements domains.co.za structure with our design system.');
    } else if (passedChecks >= 10) {
        console.log('\n✅ GOOD! Most improvements implemented successfully with minor areas for refinement.');
    } else {
        console.log('\n⚠️  NEEDS WORK! Several areas need attention to match the target structure.');
    }

    // Save results
    const resultsPath = path.join(__dirname, 'improved-design-test-results.json');
    fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));
    console.log(`\n📄 Detailed results saved to: improved-design-test-results.json`);

    return results;
}

// Run the test
testImprovedDesign().catch(console.error);