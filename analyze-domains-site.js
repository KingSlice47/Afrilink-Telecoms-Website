const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function analyzeDomainsSite() {
    console.log('🔍 Analyzing domains.co.za design structure...\n');
    
    const browser = await chromium.launch({ headless: false, slowMo: 1000 });
    const context = await browser.newContext({
        viewport: { width: 1920, height: 1080 }
    });
    const page = await context.newPage();
    
    const analysis = {
        layout: {},
        components: {},
        sections: [],
        colors: {},
        typography: {},
        spacing: {},
        navigation: {},
        content: {}
    };

    try {
        console.log('🌐 Loading domains.co.za website...');
        await page.goto('https://www.domains.co.za/web-hosting-south-africa', { 
            waitUntil: 'networkidle',
            timeout: 30000 
        });
        
        // Wait for page to fully load
        await page.waitForTimeout(3000);
        
        console.log('✅ Website loaded successfully');

        // Analyze page structure
        console.log('\n📐 Analyzing Layout Structure...');
        
        // Get overall page structure
        const pageStructure = await page.evaluate(() => {
            const structure = {};
            
            // Header analysis
            const header = document.querySelector('header, .header, nav, .nav');
            if (header) {
                structure.header = {
                    height: header.offsetHeight,
                    position: getComputedStyle(header).position,
                    background: getComputedStyle(header).backgroundColor,
                    hasLogo: !!header.querySelector('img, .logo'),
                    navItems: header.querySelectorAll('a, button').length
                };
            }
            
            // Main content sections
            const sections = Array.from(document.querySelectorAll('section, .section, main > div, .container')).map(section => {
                return {
                    tagName: section.tagName,
                    className: section.className,
                    height: section.offsetHeight,
                    background: getComputedStyle(section).backgroundColor,
                    hasHeading: !!section.querySelector('h1, h2, h3'),
                    childCount: section.children.length
                };
            }).filter(s => s.height > 50); // Filter out small sections
            
            structure.sections = sections;
            
            // Hero section analysis
            const hero = document.querySelector('.hero, .banner, .jumbotron, section:first-of-type, main > div:first-child');
            if (hero) {
                structure.hero = {
                    height: hero.offsetHeight,
                    background: getComputedStyle(hero).backgroundColor,
                    hasImage: !!hero.querySelector('img'),
                    hasButton: !!hero.querySelector('button, .btn, a[class*="button"]'),
                    textContent: hero.textContent.substring(0, 200)
                };
            }
            
            return structure;
        });
        
        analysis.layout = pageStructure;
        console.log(`   Header height: ${pageStructure.header?.height}px`);
        console.log(`   Sections found: ${pageStructure.sections?.length}`);
        console.log(`   Hero section: ${pageStructure.hero ? 'Found' : 'Not found'}`);

        // Analyze color scheme
        console.log('\n🎨 Analyzing Color Scheme...');
        const colors = await page.evaluate(() => {
            const colorMap = {};
            const elements = document.querySelectorAll('*');
            
            elements.forEach(el => {
                const styles = getComputedStyle(el);
                const bg = styles.backgroundColor;
                const color = styles.color;
                
                if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
                    colorMap[bg] = (colorMap[bg] || 0) + 1;
                }
                if (color && color !== 'rgba(0, 0, 0, 0)') {
                    colorMap[color] = (colorMap[color] || 0) + 1;
                }
            });
            
            // Get most common colors
            return Object.entries(colorMap)
                .sort(([,a], [,b]) => b - a)
                .slice(0, 10)
                .map(([color, count]) => ({ color, count }));
        });
        
        analysis.colors = colors;
        colors.forEach(c => console.log(`   ${c.color}: used ${c.count} times`));

        // Analyze typography
        console.log('\n📝 Analyzing Typography...');
        const typography = await page.evaluate(() => {
            const headings = {};
            ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(tag => {
                const elements = document.querySelectorAll(tag);
                if (elements.length > 0) {
                    const firstEl = elements[0];
                    const styles = getComputedStyle(firstEl);
                    headings[tag] = {
                        count: elements.length,
                        fontSize: styles.fontSize,
                        fontWeight: styles.fontWeight,
                        color: styles.color,
                        textContent: firstEl.textContent.substring(0, 100)
                    };
                }
            });
            
            return headings;
        });
        
        analysis.typography = typography;
        Object.entries(typography).forEach(([tag, info]) => {
            console.log(`   ${tag}: ${info.fontSize}, weight: ${info.fontWeight}, count: ${info.count}`);
        });

        // Analyze components
        console.log('\n🧩 Analyzing Components...');
        const components = await page.evaluate(() => {
            const comp = {};
            
            // Buttons
            const buttons = document.querySelectorAll('button, .btn, a[class*="button"], input[type="submit"]');
            comp.buttons = Array.from(buttons).map(btn => ({
                text: btn.textContent.trim(),
                className: btn.className,
                background: getComputedStyle(btn).backgroundColor,
                color: getComputedStyle(btn).color,
                padding: getComputedStyle(btn).padding
            })).slice(0, 10);
            
            // Cards/containers
            const cards = document.querySelectorAll('.card, .box, .panel, [class*="product"], [class*="plan"], [class*="package"]');
            comp.cards = Array.from(cards).map(card => ({
                className: card.className,
                background: getComputedStyle(card).backgroundColor,
                border: getComputedStyle(card).border,
                borderRadius: getComputedStyle(card).borderRadius,
                boxShadow: getComputedStyle(card).boxShadow,
                height: card.offsetHeight
            })).slice(0, 5);
            
            // Forms
            const forms = document.querySelectorAll('form, .form');
            comp.forms = Array.from(forms).map(form => ({
                inputs: form.querySelectorAll('input, select, textarea').length,
                className: form.className
            }));
            
            return comp;
        });
        
        analysis.components = components;
        console.log(`   Buttons found: ${components.buttons.length}`);
        console.log(`   Cards found: ${components.cards.length}`);
        console.log(`   Forms found: ${components.forms.length}`);

        // Analyze navigation
        console.log('\n🧭 Analyzing Navigation...');
        const navigation = await page.evaluate(() => {
            const nav = {};
            const navElement = document.querySelector('nav, .nav, .navigation, header ul');
            
            if (navElement) {
                const links = navElement.querySelectorAll('a');
                nav.structure = Array.from(links).map(link => ({
                    text: link.textContent.trim(),
                    href: link.getAttribute('href'),
                    className: link.className
                }));
                
                nav.style = {
                    display: getComputedStyle(navElement).display,
                    justifyContent: getComputedStyle(navElement).justifyContent,
                    alignItems: getComputedStyle(navElement).alignItems,
                    background: getComputedStyle(navElement).backgroundColor
                };
            }
            
            return nav;
        });
        
        analysis.navigation = navigation;
        console.log(`   Navigation links: ${navigation.structure?.length || 0}`);

        // Analyze content sections
        console.log('\n📄 Analyzing Content Sections...');
        const contentSections = await page.evaluate(() => {
            const sections = [];
            
            // Find main content sections
            const mainSections = document.querySelectorAll('section, .section, main > div, .container');
            
            mainSections.forEach((section, index) => {
                if (section.offsetHeight > 100) { // Only significant sections
                    const heading = section.querySelector('h1, h2, h3');
                    const buttons = section.querySelectorAll('button, .btn, a[class*="button"]');
                    const images = section.querySelectorAll('img');
                    const lists = section.querySelectorAll('ul, ol');
                    
                    sections.push({
                        index,
                        heading: heading ? heading.textContent.trim() : 'No heading',
                        paragraphs: section.querySelectorAll('p').length,
                        buttons: buttons.length,
                        images: images.length,
                        lists: lists.length,
                        className: section.className,
                        background: getComputedStyle(section).backgroundColor,
                        height: section.offsetHeight
                    });
                }
            });
            
            return sections;
        });
        
        analysis.sections = contentSections;
        contentSections.forEach((section, i) => {
            console.log(`   Section ${i}: "${section.heading}" (${section.height}px)`);
        });

        // Take screenshot for reference
        console.log('\n📸 Taking screenshot...');
        await page.screenshot({ 
            path: path.join(__dirname, 'domains-reference-screenshot.png'),
            fullPage: true 
        });
        console.log('   Screenshot saved as domains-reference-screenshot.png');

        // Save analysis results
        const analysisPath = path.join(__dirname, 'domains-site-analysis.json');
        fs.writeFileSync(analysisPath, JSON.stringify(analysis, null, 2));
        console.log(`   Analysis saved to: domains-site-analysis.json`);

    } catch (error) {
        console.error('❌ Analysis failed:', error.message);
        analysis.error = error.message;
    } finally {
        await browser.close();
    }

    return analysis;
}

// Generate implementation suggestions
async function generateImplementationSuggestions(analysis) {
    console.log('\n🛠️  GENERATING IMPLEMENTATION SUGGESTIONS');
    console.log('==========================================');
    
    const suggestions = {
        layout: [],
        components: [],
        styling: [],
        content: []
    };

    // Layout suggestions
    if (analysis.layout.header) {
        suggestions.layout.push(`Header height: ${analysis.layout.header.height}px - consider similar height for our header`);
    }
    
    if (analysis.layout.hero) {
        suggestions.layout.push(`Hero section height: ${analysis.layout.hero.height}px - adjust our hero section accordingly`);
    }

    // Color suggestions
    if (analysis.colors.length > 0) {
        suggestions.styling.push('Dominant colors found:');
        analysis.colors.slice(0, 3).forEach(color => {
            suggestions.styling.push(`  - ${color.color} (used ${color.count} times)`);
        });
    }

    // Typography suggestions
    Object.entries(analysis.typography).forEach(([tag, info]) => {
        suggestions.styling.push(`${tag.toUpperCase()}: ${info.fontSize} font-size, ${info.fontWeight} weight`);
    });

    // Component suggestions
    if (analysis.components.buttons.length > 0) {
        suggestions.components.push(`Button styles found: ${analysis.components.buttons.length} variations`);
        analysis.components.buttons.slice(0, 3).forEach(btn => {
            suggestions.components.push(`  - "${btn.text}": ${btn.background} background`);
        });
    }

    if (analysis.components.cards.length > 0) {
        suggestions.components.push(`Card components: ${analysis.components.cards.length} found`);
        suggestions.components.push(`  - Border radius: ${analysis.components.cards[0]?.borderRadius || 'none'}`);
        suggestions.components.push(`  - Box shadow: ${analysis.components.cards[0]?.boxShadow || 'none'}`);
    }

    // Content structure suggestions
    analysis.sections.forEach((section, i) => {
        suggestions.content.push(`Section ${i}: "${section.heading}" - ${section.paragraphs}p, ${section.buttons}btn, ${section.images}img`);
    });

    // Print suggestions
    Object.entries(suggestions).forEach(([category, items]) => {
        console.log(`\n${category.toUpperCase()}:`);
        items.forEach(item => console.log(`  ${item}`));
    });

    return suggestions;
}

// Main execution
async function main() {
    try {
        const analysis = await analyzeDomainsSite();
        const suggestions = await generateImplementationSuggestions(analysis);
        
        console.log('\n✅ Analysis complete! Check the generated files:');
        console.log('   - domains-site-analysis.json');
        console.log('   - domains-reference-screenshot.png');
        console.log('\nNext step: Use this analysis to create an improved homepage design.');
        
        return { analysis, suggestions };
    } catch (error) {
        console.error('Error in main execution:', error);
    }
}

main().catch(console.error);