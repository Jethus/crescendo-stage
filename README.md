# Pixelboost Client Repo: Crescendo Stage

This repository contains the source code for the Crescendo Stage website, a high-performance project built by Pixelboost. It is developed using the Astro framework to ensure exceptional speed, excellent Core Web Vitals, and strong technical SEO out of the box.

## 🚀 Project Overview

*   **Client:** Crescendo Stage
*   **Project Type:** SaaS
*   **Live URL:** [Crescendo Stage](https://crescendostage.com/)
*   **Staging URL:** N/A (Not using Netlify nameservers)

This project is built according to Pixelboost's high standards for quality, focusing on delivering measurable business outcomes for small businesses in Ontario through superior web performance and a custom-tailored user experience.

## ✨ Tech Stack

*   **Framework:** [Astro](https://astro.build/)
*   **Styling:** [SCSS](https://sass-lang.com/)
*   **Deployment:** [Netlify](https://www.netlify.com/)
*   **Analytics:** [Plausible](https://plausible.io/)
*   **Additional Packages:**
    *   `astro-seo`: For managing SEO metadata.
    *   `@astrojs/sitemap`: For automatic sitemap generation.

## 🛠️ Getting Started

### Prerequisites

*   Node.js (Version specified in `.nvmrc` file, e.g., v20.x.x)
*   npm (or pnpm/yarn)

### Setup

1.  **Clone the repository:**
    ```
    git clone https://github.com/Jethus/crescendo-stage.git
    cd /crescendo-stage
    ```

2.  **Install dependencies:**
    ```
    npm i
    ```

3.  **Run the development server:**
    ```
    npm run dev
    ```
    The site will be available at `http://localhost:4321`.

## 📦 Available Scripts

*   `npm run dev`: Starts the local development server with Hot Module Replacement (HMR).
*   `npm run build`: Creates a production-ready build in the `/dist` directory.
*   `npm run preview`: Starts a local server to preview the production build.
*   `npm run lint`: Lints the codebase for errors and formatting issues.
*   `npm run format`: Formats all code using Prettier.

## 📁 Project Structure

This project follows the standard Astro directory structure:

*   `/src/pages/`: Contains all pages and API endpoints. Each `.astro` file becomes a page route.
*   `/src/layouts/`: Contains master layout components for pages.
*   `/src/components/`: Contains reusable UI components (e.g., Header, Footer, Cards).
*   `/src/styles/`: Contains global styles.
*   `/src/content/`: For content collections (e.g., blog posts, case studies) if using Astro Content.
*   `/public/`: For static assets that do not need processing (e.g., `favicon.ico`, `robots.txt`).

## ☁️ Deployment

This project and repo is configured for continuous deployment on Netlify.

*   **Production Branch:** `main`
*   **Build Command:** `npm run build`
*   **Output Directory:** `dist`

Any push or merge to the `main` branch will automatically trigger a new production deployment.

## ✅ Pixelboost Quality Standards

This project must adhere to the following baseline metrics to ensure a high-quality deliverable:

*   **Performance:** Achieve a Google PageSpeed Insights score of **95+ on mobile** for key pages.
*   **Core Web Vitals:** The site is architected to pass all three Core Web Vitals (LCP, INP, CLS) at the 75th percentile for real users, per Google's official benchmark.
*   **Accessibility:** Comply with WCAG 2.1 Level AA guidelines.
*   **Best Practices & SEO:** Score 100 in the Best Practices, Accessibility and SEO categories in Lighthouse audits.

---
*This README was last updated on October 07, 2025.*
