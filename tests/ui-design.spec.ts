import { test, expect } from '@playwright/test';

test.describe('Homepage UI Design Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display hero section correctly', async ({ page }) => {
    // Check if hero section elements are visible
    await expect(page.locator('h1')).toContainText('Professional Web Hosting Solutions');
    await expect(page.locator('p')).toContainText('South Africa\'s Leading Web Hosting Provider');
    
    // Check if hero card is visible
    await expect(page.locator('text=Super Hosting')).toBeVisible();
    await expect(page.locator('text=R289.99/month')).toBeVisible();
  });

  test('should display pricing cards correctly', async ({ page }) => {
    // Scroll to pricing section
    await page.locator('#hosting').scrollIntoViewIfNeeded();
    
    // Check all pricing plan titles
    await expect(page.locator('text=Entry Hosting')).toBeVisible();
    await expect(page.locator('text=Basic Hosting')).toBeVisible();
    await expect(page.locator('text=Super Hosting')).toBeVisible();
    await expect(page.locator('text=Ultimate Hosting')).toBeVisible();
    
    // Check pricing
    await expect(page.locator('text=R119.99/mo')).toBeVisible();
    await expect(page.locator('text=R179.99/mo')).toBeVisible();
    await expect(page.locator('text=R289.99/mo')).toBeVisible();
    await expect(page.locator('text=R349.99/mo')).toBeVisible();
  });

  test('should have responsive design on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Check if header is still functional on mobile
    await expect(page.locator('text=Afrilink')).toBeVisible();
    
    // Check if hero section adapts to mobile
    await expect(page.locator('h1')).toBeVisible();
    
    // Check if pricing cards stack on mobile
    const pricingCards = page.locator('[class*="grid"]').locator('div').first();
    await expect(pricingCards).toBeVisible();
  });

  test('should have proper color scheme and branding', async ({ page }) => {
    // Check header background
    const header = page.locator('header');
    await expect(header).toHaveCSS('background-color', 'rgb(255, 255, 255)');
    
    // Check Afrilink logo/text
    await expect(page.locator('text=Afrilink')).toBeVisible();
    
    // Check if buttons have correct styling
    const buttons = page.locator('button, [role="button"]');
    await expect(buttons.first()).toBeVisible();
  });

  test('should have working navigation links', async ({ page }) => {
    // Check header navigation links
    await expect(page.locator('text=Hosting Plans')).toBeVisible();
    await expect(page.locator('text=Why Afrilink')).toBeVisible();
    await expect(page.locator('text=Support')).toBeVisible();
    
    // Check Client Login button
    await expect(page.locator('text=Client Login')).toBeVisible();
  });

  test('visual regression test - full page screenshot', async ({ page }) => {
    // Take a full page screenshot for visual regression testing
    await expect(page).toHaveScreenshot('homepage-full.png', { 
      fullPage: true,
      threshold: 0.2 // Allow 20% difference for minor rendering changes
    });
  });

  test('visual regression test - hero section', async ({ page }) => {
    const heroSection = page.locator('section').first();
    await expect(heroSection).toHaveScreenshot('hero-section.png', {
      threshold: 0.2
    });
  });

  test('visual regression test - pricing section', async ({ page }) => {
    await page.locator('#hosting').scrollIntoViewIfNeeded();
    const pricingSection = page.locator('#hosting');
    await expect(pricingSection).toHaveScreenshot('pricing-section.png', {
      threshold: 0.2
    });
  });
});