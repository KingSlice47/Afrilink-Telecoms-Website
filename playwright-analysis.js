const { chromium } = require('playwright');

async function analyzeWebsite() {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    
    const results = {
        currentSite: {},
        competitors: {},
        insights: []
    };
    
    // Analyze current website
    try {
        console.log('Analyzing current website...');
        await page.goto('file://' + __dirname + '/index.html');
        
        results.currentSite = {
            title: await page.title(),
            lighthouse: await page.evaluate(() => {
                // Basic performance metrics
                return {
                    images: document.querySelectorAll('img').length,
                    scripts: document.querySelectorAll('script').length,
                    stylesheets: document.querySelectorAll('link[rel="stylesheet"]').length,
                    h1Tags: document.querySelectorAll('h1').length,
                    ctaButtons: document.querySelectorAll('.btn, button').length,
                    navigationItems: document.querySelectorAll('nav a').length
                };
            }),
            screenshot: 'current-homepage.png'
        };
        
        await page.screenshot({ path: 'current-homepage.png', fullPage: true });
        
    } catch (error) {
        console.error('Error analyzing current site:', error.message);
    }
    
    // Analyze competitors
    const competitors = [
        'https://hetzner.com',
        'https://www.one.com',
        'https://www.ovhcloud.com',
        'https://www.godaddy.com'
    ];
    
    for (let competitor of competitors) {
        try {
            console.log(`Analyzing ${competitor}...`);
            await page.goto(competitor, { waitUntil: 'networkidle' });
            
            const competitorData = await page.evaluate(() => {
                return {
                    title: document.title,
                    pricing: Array.from(document.querySelectorAll('[class*="price"], [class*="cost"], [data-price]'))
                        .slice(0, 5)
                        .map(el => el.textContent?.trim()),
                    features: Array.from(document.querySelectorAll('[class*="feature"], [class*="benefit"]'))
                        .slice(0, 10)
                        .map(el => el.textContent?.trim()),
                    ctaTexts: Array.from(document.querySelectorAll('button, .btn, [class*="cta"]'))
                        .slice(0, 5)
                        .map(el => el.textContent?.trim()),
                    navigationStructure: Array.from(document.querySelectorAll('nav a, header a'))
                        .slice(0, 10)
                        .map(el => el.textContent?.trim())
                };
            });
            
            results.competitors[competitor] = competitorData;
            
            // Take screenshot
            const filename = `competitor-${competitor.replace(/https?:\/\//, '').replace(/[^\w]/g, '-')}.png`;
            await page.screenshot({ path: filename, fullPage: true });
            
        } catch (error) {
            console.error(`Error analyzing ${competitor}:`, error.message);
            results.competitors[competitor] = { error: error.message };
        }
    }
    
    await browser.close();
    
    // Generate insights
    results.insights = generateInsights(results);
    
    // Save results
    require('fs').writeFileSync('website-analysis-results.json', JSON.stringify(results, null, 2));
    console.log('Analysis complete! Results saved to website-analysis-results.json');
    
    return results;
}

function generateInsights(results) {
    const insights = [];
    
    // Pricing analysis
    if (results.currentSite.lighthouse) {
        const { ctaButtons, navigationItems } = results.currentSite.lighthouse;
        
        if (ctaButtons < 3) {
            insights.push({
                category: 'Conversion',
                priority: 'High',
                issue: 'Insufficient call-to-action buttons',
                recommendation: 'Add more strategic CTA buttons throughout the page'
            });
        }
        
        if (navigationItems > 7) {
            insights.push({
                category: 'UX',
                priority: 'Medium',
                issue: 'Navigation may be too complex',
                recommendation: 'Consider simplifying navigation menu'
            });
        }
    }
    
    // Competitor comparison insights
    const competitorPricing = Object.values(results.competitors)
        .flatMap(comp => comp.pricing || [])
        .filter(price => price && price.includes('$') || price.includes('R'));
    
    if (competitorPricing.length > 0) {
        insights.push({
            category: 'Pricing',
            priority: 'High',
            issue: 'Competitive pricing analysis needed',
            recommendation: `Analyze competitor pricing: ${competitorPricing.slice(0, 3).join(', ')}`
        });
    }
    
    return insights;
}

// Run analysis
analyzeWebsite().catch(console.error);