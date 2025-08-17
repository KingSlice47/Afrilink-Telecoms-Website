# Afrilink Telecoms Design System Guide

## Overview
This design system provides a comprehensive set of reusable components, styles, and utilities for the Afrilink Telecoms website. It ensures consistency, maintainability, and scalability across all pages.

## How to Use

### 1. Include the Design System CSS
Add this line to your HTML head:
```html
<link rel="stylesheet" href="css/design-system.css">
```

### 2. Color Palette

#### Primary Colors (Blue)
- `--color-primary-900` to `--color-primary-50`: Dark to light blue shades
- Main brand color: `--color-primary-600` (#1e3d59)

#### Secondary Colors (Orange)
- `--color-secondary-900` to `--color-secondary-50`: Dark to light orange shades
- Main accent: `--color-secondary-500` (#FF6B35)

#### Semantic Colors
- Success: `--color-success-500` (Green)
- Warning: `--color-warning-500` (Yellow)
- Error: `--color-error-500` (Red)
- Info: `--color-info-500` (Blue)

### 3. Typography

#### Heading Classes
```html
<h1 class="heading-display">Display Heading</h1>
<h1 class="heading-1">Heading 1</h1>
<h2 class="heading-2">Heading 2</h2>
<h3 class="heading-3">Heading 3</h3>
<h4 class="heading-4">Heading 4</h4>
<h5 class="heading-5">Heading 5</h5>
<h6 class="heading-6">Heading 6</h6>
```

#### Body Text Classes
```html
<p class="text-lead">Lead paragraph text</p>
<p class="text-large">Large body text</p>
<p class="text-base">Regular body text</p>
<p class="text-small">Small body text</p>
<span class="text-caption">Caption text</span>
<span class="text-label">LABEL TEXT</span>
<code class="text-code">Code snippet</code>
```

### 4. Button Components

#### Button Sizes
```html
<button class="btn btn-xs btn-primary">Extra Small</button>
<button class="btn btn-sm btn-primary">Small</button>
<button class="btn btn-md btn-primary">Medium</button>
<button class="btn btn-lg btn-primary">Large</button>
<button class="btn btn-xl btn-primary">Extra Large</button>
```

#### Button Variants
```html
<!-- Solid Buttons -->
<button class="btn btn-md btn-primary">Primary</button>
<button class="btn btn-md btn-secondary">Secondary</button>
<button class="btn btn-md btn-accent">Accent</button>
<button class="btn btn-md btn-success">Success</button>
<button class="btn btn-md btn-warning">Warning</button>
<button class="btn btn-md btn-error">Error</button>

<!-- Outline Buttons -->
<button class="btn btn-md btn-outline-primary">Outline Primary</button>
<button class="btn btn-md btn-outline-secondary">Outline Secondary</button>

<!-- Ghost Button -->
<button class="btn btn-md btn-ghost">Ghost Button</button>

<!-- Button States -->
<button class="btn btn-md btn-primary disabled">Disabled</button>
<button class="btn btn-md btn-primary btn-loading">Loading</button>
```

#### Button Group
```html
<div class="btn-group">
    <button class="btn btn-md btn-primary">Left</button>
    <button class="btn btn-md btn-primary">Middle</button>
    <button class="btn btn-md btn-primary">Right</button>
</div>
```

### 5. Card Components

#### Basic Card
```html
<div class="card card-default">
    <div class="card-header">
        <h3 class="card-title">Card Title</h3>
        <p class="card-subtitle">Card subtitle</p>
    </div>
    <div class="card-body">
        <p class="card-text">Card content goes here...</p>
    </div>
    <div class="card-footer">
        <button class="btn btn-sm btn-primary">Action</button>
    </div>
</div>
```

#### Card Variants
```html
<!-- Elevated Card -->
<div class="card card-elevated card-hover">
    <div class="card-body">
        <p>Elevated card with hover effect</p>
    </div>
</div>

<!-- Glass Card -->
<div class="card card-glass">
    <div class="card-body">
        <p>Glassmorphism card</p>
    </div>
</div>

<!-- Outlined Card -->
<div class="card card-outlined card-scale">
    <div class="card-body">
        <p>Outlined card with scale hover</p>
    </div>
</div>
```

#### Pricing Card
```html
<div class="card card-pricing">
    <h3 class="card-title">Plan Name</h3>
    <div class="price">
        <span class="currency">R</span>
        <span class="amount">299</span>
        <span class="period">/month</span>
    </div>
    <ul>
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
    </ul>
    <button class="btn btn-lg btn-primary">Get Started</button>
</div>
```

#### Feature Card
```html
<div class="card card-feature">
    <div class="card-feature-icon">
        <i class="fas fa-rocket"></i>
    </div>
    <h3 class="card-title">Feature Title</h3>
    <p class="card-text">Feature description...</p>
</div>
```

#### Testimonial Card
```html
<div class="card card-testimonial">
    <p class="card-testimonial-content">
        "This is an amazing service!"
    </p>
    <div class="card-testimonial-author">
        <img src="avatar.jpg" class="card-testimonial-avatar" alt="Author">
        <div>
            <div class="card-testimonial-name">John Doe</div>
            <div class="card-testimonial-role">CEO, Company</div>
        </div>
    </div>
</div>
```

### 6. Utility Classes

#### Layout
```html
<div class="container">Content in container</div>
<section class="section">Normal section padding</section>
<section class="section-lg">Large section padding</section>
```

#### Flexbox
```html
<div class="flex items-center justify-between gap-4">
    <div>Item 1</div>
    <div>Item 2</div>
</div>
```

#### Grid
```html
<div class="grid grid-cols-3 gap-6">
    <div>Column 1</div>
    <div>Column 2</div>
    <div>Column 3</div>
</div>
```

#### Spacing
```html
<div class="p-4 m-2">Padding 4, Margin 2</div>
<div class="px-6 py-4">Horizontal padding 6, Vertical padding 4</div>
<div class="mt-4 mb-8">Top margin 4, Bottom margin 8</div>
```

#### Text Alignment
```html
<p class="text-center">Centered text</p>
<p class="text-right">Right aligned</p>
<p class="font-bold uppercase">Bold uppercase text</p>
```

#### Colors
```html
<p class="text-primary">Primary text color</p>
<p class="text-secondary">Secondary text color</p>
<div class="bg-primary text-white">Primary background</div>
```

#### Borders & Shadows
```html
<div class="border rounded-lg">Bordered with large radius</div>
<div class="shadow-lg rounded-xl">Large shadow with XL radius</div>
```

### 7. Responsive Design

#### Responsive Utilities
```html
<!-- Hidden on mobile, shown on desktop -->
<div class="hidden md:block">Desktop only</div>

<!-- Different grid on different screens -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <!-- Responsive grid -->
</div>
```

### 8. Animation Classes

```html
<div class="animate-fadeIn">Fade in animation</div>
<div class="animate-fadeInUp">Fade in from bottom</div>
<div class="animate-slideInLeft">Slide in from left</div>
<div class="animate-pulse">Pulsing element</div>

<!-- Hover animations -->
<div class="card hover-lift">Lifts on hover</div>
<div class="card hover-grow">Grows on hover</div>
<div class="card hover-shadow">Shadow on hover</div>
<div class="card hover-glow">Glows on hover</div>
```

## Implementation Examples

### Example 1: Hero Section with CTA
```html
<section class="section-lg bg-primary">
    <div class="container text-center">
        <h1 class="heading-display text-white mb-4">Welcome to Afrilink</h1>
        <p class="text-lead text-white mb-8">Professional hosting solutions</p>
        <button class="btn btn-xl btn-secondary hover-lift">
            Get Started Now
        </button>
    </div>
</section>
```

### Example 2: Pricing Section
```html
<section class="section">
    <div class="container">
        <h2 class="heading-2 text-center mb-8">Our Plans</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="card card-pricing card-hover">
                <h3 class="card-title">Basic</h3>
                <div class="price">
                    <span class="currency">R</span>
                    <span class="amount">199</span>
                    <span class="period">/mo</span>
                </div>
                <button class="btn btn-lg btn-outline-primary">Choose Plan</button>
            </div>
            <!-- More pricing cards -->
        </div>
    </div>
</section>
```

### Example 3: Feature Grid
```html
<section class="section bg-gray-50">
    <div class="container">
        <h2 class="heading-2 text-center mb-8">Why Choose Us</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="card card-feature hover-lift">
                <div class="card-feature-icon">
                    <i class="fas fa-shield-alt"></i>
                </div>
                <h3 class="card-title">Secure</h3>
                <p class="card-text">Enterprise-level security</p>
            </div>
            <!-- More feature cards -->
        </div>
    </div>
</section>
```

## Best Practices

1. **Consistency**: Always use design system classes instead of custom CSS when possible
2. **Semantic HTML**: Use proper HTML elements (h1-h6, p, button, etc.)
3. **Accessibility**: Include proper ARIA labels and ensure color contrast ratios
4. **Performance**: Use utility classes to reduce CSS file size
5. **Responsive**: Always test on mobile, tablet, and desktop views
6. **Documentation**: Comment complex implementations for other developers

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Updates and Maintenance
- Version: 1.0.0
- Last Updated: 2024
- Maintained by: Afrilink Telecoms Development Team