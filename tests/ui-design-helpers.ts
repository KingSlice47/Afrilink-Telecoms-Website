import { Page, expect, Locator } from '@playwright/test';

/**
 * UI Design Helper utilities for Playwright MCP
 * These helpers make it easier to test and iterate on UI designs
 */

export class UIDesignHelpers {
  constructor(private page: Page) {}

  /**
   * Capture element screenshot with annotations
   */
  async captureElementWithAnnotations(
    selector: string, 
    filename: string, 
    annotations?: { text: string; x: number; y: number }[]
  ) {
    const element = this.page.locator(selector);
    
    if (annotations) {
      // Add visual annotations before screenshot
      await this.page.evaluate((annotationsData) => {
        annotationsData.forEach((annotation, index) => {
          const div = document.createElement('div');
          div.textContent = annotation.text;
          div.style.position = 'absolute';
          div.style.left = `${annotation.x}px`;
          div.style.top = `${annotation.y}px`;
          div.style.background = 'rgba(255, 0, 0, 0.8)';
          div.style.color = 'white';
          div.style.padding = '4px 8px';
          div.style.borderRadius = '4px';
          div.style.fontSize = '12px';
          div.style.zIndex = '9999';
          div.setAttribute('data-playwright-annotation', `annotation-${index}`);
          document.body.appendChild(div);
        });
      }, annotations);
    }

    await expect(element).toHaveScreenshot(filename);

    // Clean up annotations
    if (annotations) {
      await this.page.evaluate(() => {
        document.querySelectorAll('[data-playwright-annotation]').forEach(el => el.remove());
      });
    }
  }

  /**
   * Test color scheme across multiple elements
   */
  async validateColorScheme(colorTests: { selector: string; property: string; expected: string }[]) {
    for (const test of colorTests) {
      const element = this.page.locator(test.selector);
      await expect(element).toHaveCSS(test.property, test.expected);
    }
  }

  /**
   * Test responsive breakpoints
   */
  async testResponsiveBreakpoints(breakpoints: { name: string; width: number; height: number }[]) {
    const results = [];
    
    for (const bp of breakpoints) {
      await this.page.setViewportSize({ width: bp.width, height: bp.height });
      await this.page.waitForTimeout(500); // Allow for responsive adjustments
      
      // Take screenshot for this breakpoint
      await expect(this.page).toHaveScreenshot(`responsive-${bp.name}.png`);
      
      results.push({
        breakpoint: bp.name,
        dimensions: `${bp.width}x${bp.height}`,
        tested: true
      });
    }
    
    return results;
  }

  /**
   * Measure element spacing and alignment
   */
  async measureSpacing(selector: string) {
    return await this.page.evaluate((sel) => {
      const element = document.querySelector(sel);
      if (!element) return null;
      
      const rect = element.getBoundingClientRect();
      const styles = window.getComputedStyle(element);
      
      return {
        margins: {
          top: parseInt(styles.marginTop),
          right: parseInt(styles.marginRight),
          bottom: parseInt(styles.marginBottom),
          left: parseInt(styles.marginLeft)
        },
        padding: {
          top: parseInt(styles.paddingTop),
          right: parseInt(styles.paddingRight),
          bottom: parseInt(styles.paddingBottom),
          left: parseInt(styles.paddingLeft)
        },
        dimensions: {
          width: rect.width,
          height: rect.height
        },
        position: {
          x: rect.left,
          y: rect.top
        }
      };
    }, selector);
  }

  /**
   * Test hover states and interactions
   */
  async testInteractiveStates(selector: string, states: string[] = ['hover', 'focus']) {
    const element = this.page.locator(selector);
    const results = [];

    for (const state of states) {
      switch (state) {
        case 'hover':
          await element.hover();
          await expect(element).toHaveScreenshot(`${selector.replace(/\s+/g, '-')}-hover.png`);
          results.push({ state: 'hover', tested: true });
          break;
        case 'focus':
          await element.focus();
          await expect(element).toHaveScreenshot(`${selector.replace(/\s+/g, '-')}-focus.png`);
          results.push({ state: 'focus', tested: true });
          break;
        case 'active':
          await element.click({ position: { x: 1, y: 1 } });
          await expect(element).toHaveScreenshot(`${selector.replace(/\s+/g, '-')}-active.png`);
          results.push({ state: 'active', tested: true });
          break;
      }
      await this.page.waitForTimeout(200); // Brief pause between states
    }

    return results;
  }

  /**
   * Compare design implementation with expected layout
   */
  async compareLayoutImplementation(elements: { name: string; selector: string; expectedPosition?: { x: number; y: number } }[]) {
    const results = [];

    for (const element of elements) {
      const spacing = await this.measureSpacing(element.selector);
      const isVisible = await this.page.locator(element.selector).isVisible();
      
      results.push({
        name: element.name,
        selector: element.selector,
        visible: isVisible,
        measurements: spacing,
        positionMatch: element.expectedPosition ? 
          Math.abs(spacing?.position.x - element.expectedPosition.x) < 10 &&
          Math.abs(spacing?.position.y - element.expectedPosition.y) < 10 : null
      });
    }

    return results;
  }

  /**
   * Generate design system audit report
   */
  async auditDesignSystem() {
    const audit = {
      colors: await this.auditColors(),
      typography: await this.auditTypography(),
      spacing: await this.auditSpacing(),
      components: await this.auditComponents()
    };

    return audit;
  }

  private async auditColors() {
    return await this.page.evaluate(() => {
      const elements = document.querySelectorAll('*');
      const colors = new Set();
      const backgroundColors = new Set();

      elements.forEach(el => {
        const styles = window.getComputedStyle(el);
        if (styles.color && styles.color !== 'rgba(0, 0, 0, 0)') {
          colors.add(styles.color);
        }
        if (styles.backgroundColor && styles.backgroundColor !== 'rgba(0, 0, 0, 0)') {
          backgroundColors.add(styles.backgroundColor);
        }
      });

      return {
        textColors: Array.from(colors),
        backgroundColors: Array.from(backgroundColors)
      };
    });
  }

  private async auditTypography() {
    return await this.page.evaluate(() => {
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      const paragraphs = document.querySelectorAll('p');
      
      const typography = {
        headings: [],
        paragraphs: []
      };

      headings.forEach((heading, index) => {
        const styles = window.getComputedStyle(heading);
        typography.headings.push({
          tag: heading.tagName.toLowerCase(),
          fontSize: styles.fontSize,
          fontWeight: styles.fontWeight,
          lineHeight: styles.lineHeight,
          index
        });
      });

      paragraphs.forEach((p, index) => {
        const styles = window.getComputedStyle(p);
        typography.paragraphs.push({
          fontSize: styles.fontSize,
          fontWeight: styles.fontWeight,
          lineHeight: styles.lineHeight,
          index
        });
      });

      return typography;
    });
  }

  private async auditSpacing() {
    return await this.page.evaluate(() => {
      const elements = document.querySelectorAll('section, div, header, footer, main');
      const spacings = [];

      elements.forEach((el, index) => {
        const styles = window.getComputedStyle(el);
        spacings.push({
          element: el.tagName.toLowerCase() + (el.className ? `.${el.className.split(' ')[0]}` : ''),
          marginTop: styles.marginTop,
          marginBottom: styles.marginBottom,
          paddingTop: styles.paddingTop,
          paddingBottom: styles.paddingBottom,
          index
        });
      });

      return spacings;
    });
  }

  private async auditComponents() {
    return await this.page.evaluate(() => {
      const buttons = document.querySelectorAll('button, [role="button"]');
      const cards = document.querySelectorAll('[class*="card"], .card');
      const inputs = document.querySelectorAll('input, textarea, select');

      return {
        buttonCount: buttons.length,
        cardCount: cards.length,
        inputCount: inputs.length
      };
    });
  }
}

/**
 * Design comparison utilities
 */
export class DesignComparison {
  static async compareScreenshots(
    page: Page,
    beforeSelector: string,
    afterSelector: string,
    comparisonName: string
  ) {
    // Take before screenshot
    await expect(page.locator(beforeSelector)).toHaveScreenshot(`${comparisonName}-before.png`);
    
    // Take after screenshot
    await expect(page.locator(afterSelector)).toHaveScreenshot(`${comparisonName}-after.png`);
    
    return {
      before: `${comparisonName}-before.png`,
      after: `${comparisonName}-after.png`
    };
  }

  static async generateDesignReport(page: Page, reportName: string = 'design-report') {
    const helpers = new UIDesignHelpers(page);
    const audit = await helpers.auditDesignSystem();
    
    // You could extend this to write to a JSON file or database
    console.log(`Design Report for ${reportName}:`, JSON.stringify(audit, null, 2));
    
    return audit;
  }
}