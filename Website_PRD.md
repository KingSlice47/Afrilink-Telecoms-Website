# PRD: Afrilink Telecoms (Pty) Ltd Website Redevelopment

## 1. Introduction
This document outlines the requirements for the complete redevelopment of the Afrilink Telecoms website. The goal is to create a modern, high-performance website that establishes the company as a premium, value-added web hosting partner for South African businesses.

## 2. Strategic Goals
- **Positioning:** Establish the brand as a premium, service-oriented hosting partner, not just a reseller.
- **Differentiation:** Stand out from competitors by emphasizing managed services, expert local support, and peace of mind, rather than competing on price.
- **User Experience:** Create a modern, clean, fast, and trustworthy user experience that is intuitive for non-technical business owners.

## 3. Target Audience
The primary target audience is South African small-to-medium enterprises (SMEs), entrepreneurs, and freelancers who:
- Are serious about their online presence.
- Are not hosting experts and prefer a "done-for-you" solution.
- Value reliability, security, and expert support over the absolute lowest price.

## 4. Technology Stack
- **Framework:** Next.js (with React and TypeScript)
- **Deployment:** Continuous deployment via GitHub and Netlify.
- **Backend Integration:** The website will link out to the existing WHMCS portal for client login, billing, and service management. The WHMCS portal itself is out of scope for this redevelopment project.

## 5. Website Structure (Sitemap)
- **`/` (Homepage):** First impression, brand positioning, and overview of services.
- **`/hosting` (Hosting Plans):** Detailed, easy-to-compare pricing table of the four tiers.
- **`/why-afrilink` (Why Choose Us):** A key differentiator page detailing our value proposition (Managed Service, Expert Support, Robust Security).
- **`/support`:** A hub for customer support, including contact information, a form, and a link to a future knowledge base.
- **`/about`:** The company story, mission, and values.

## 6. Design Inspiration & Differentiation

### 6.1. Competitive Analysis Summary
- **Xneelo:** Targets technical users with a professional, stable, and infrastructure-focused brand.
- **Afrihost:** Targets the mass-market with a consumer-friendly, value-driven brand focused on deals and social proof.

### 6.2. Our Design Principles
- **Professional & Trustworthy:** We will adopt a clean, uncluttered, and professional aesthetic similar to Xneelo to build trust. We will use a clear visual hierarchy and high-quality typography.
- **Personable & Supportive:** Unlike the corporate feel of Xneelo, our language will be customer-centric and supportive. We will use visuals that convey partnership and guidance.
- **Value-Oriented, Not Cheap:** Unlike the deal-focused approach of Afrihost, we will focus on the tangible business value of our features (e.g., "Daily backups provide peace of mind," "Managed performance lets you focus on your customers").
- **Action-Oriented:** The user journey will be intuitive, guiding business owners to the right solution for their needs with clear calls-to-action.

## 7. Key Features & Functionality
- **Interactive Pricing Table (`/hosting`):** An easy-to-use component to compare the four hosting tiers.
- **Support Form (`/support`):** A simple form to allow potential and existing customers to contact support.
- **WHMCS Integration (`/` and client areas):** A clear, well-marked "Client Login" link that directs users to the existing WHMCS portal.

## 9. Success Metrics
- **Conversion Rate:** Percentage of visitors to the `/hosting` page who click through to the purchase funnel (WHMCS).
- **Lead Generation:** Number of inquiries submitted through the `/support` form.
- **User Engagement:** Low bounce rate on key pages like the Homepage and `/hosting`.
