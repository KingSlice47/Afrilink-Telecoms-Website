# Front-End Architecture: Afrilink Telecoms Website

**Author:** Winston, Architect 🏗️

## 1. Purpose
This document provides the official front-end technical architecture for the Afrilink Telecoms website redevelopment project. It serves as the blueprint for the development team to ensure the final product is scalable, maintainable, and performant, in alignment with the project's PRD.

## 2. Technology Stack
The chosen technology stack represents a modern, best-in-class approach for building high-performance, custom websites.

- **Framework:** Next.js (v14+ with App Router)
- **Language:** TypeScript
- **UI Library:** React
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Deployment:** Netlify (via GitHub integration)

## 3. Project Structure
The project will use a `src` directory to house all application code, maintaining a clean root directory. The folder structure is as follows:

```
/src
├── app/              # All pages and layouts (Next.js App Router)
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/         # Custom, reusable React components
│   ├── header.tsx      # Example: Site-wide header
│   └── pricing-table.tsx # Example: Interactive pricing table
├── components/ui/      # Unstyled components from shadcn/ui
│   ├── button.tsx      # Example: Button component
│   └── card.tsx        # Example: Card component
└── lib/                # Utility functions and helper code
    └── utils.ts        # General utility functions (e.g., class name merging)
```

## 4. Component Strategy
Our component strategy is designed for maximum reusability, customization, and developer efficiency.

- **UI Components (`/components/ui`):** These are the foundational building blocks of our UI, sourced from `shadcn/ui`. They are headless, unstyled, and fully accessible. Developers should use these as the base for creating any visual element.

- **Custom Components (`/components`):** These are larger, application-specific components that solve a particular business need. They are built by composing UI components and other custom components. The `Header.tsx` is the first example of such a component. This is where the majority of our custom component development will happen.

## 5. Routing
Routing will be handled by the Next.js App Router. Routes are defined by the folder structure within `/src/app`. For example, `/src/app/hosting/page.tsx` will create the `/hosting` page. This file-system-based routing is intuitive and simplifies page creation.

## 6. State Management
For the initial scope of this project, a complex global state management library (like Redux or Zustand) is unnecessary. We will adhere to the principle of progressive complexity.

- **Local State:** Use React's built-in `useState` hook for component-level state.
- **Shared State:** Use React's `useContext` hook for sharing state between a small number of components where prop drilling becomes inconvenient.

## 7. Styling
Styling will be handled exclusively by **Tailwind CSS**. Developers should use utility classes directly in their JSX. This approach ensures consistency, eliminates the need for separate CSS files, and makes building responsive layouts straightforward. All `shadcn/ui` components are designed to be styled with Tailwind CSS, allowing for complete visual customization.

## 8. Code Quality & Conventions
To ensure a clean and maintainable codebase, the project will be configured with:

- **ESLint:** For identifying and fixing problems in the code.
- **Prettier:** For automated, consistent code formatting.

A pre-commit hook will be set up to automatically format code before it is committed to the repository.
