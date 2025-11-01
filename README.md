# SaaS Product Landing Page

A modern, responsive landing page for SaaS products built with Next.js and TypeScript with TailwindCSS and motion (formerly, Framer Motion). This project is designed to help startups and businesses showcase their products, features, pricing, testimonials, and more with a beautiful, conversion-focused design.

## Features

- Built with [Next.js](https://nextjs.org/) and [TypeScript](https://www.typescriptlang.org/)
- Customizable sections: Hero, Product Showcase, Pricing, Testimonials, Call to Action, Footer, and more
- Fully responsive design for mobile, tablet, and desktop
- SVG icons and assets for a clean, professional look
- Easy to extend and adapt for your own SaaS product
- Modular code structure for maintainability

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
	```sh
	git clone https://github.com/Darasimi010/saas-product-landing-page.git
	cd saas-product-landing-page
	```
2. **Install dependencies:**
	```sh
	npm install
	# or
	yarn install
	```
3. **Run the development server:**
	```sh
	npm run dev
	# or
	yarn dev
	```
4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the landing page.

## Project Structure

```
saas-product-landing-page/
├── src/
│   ├── app/                # Main app entry, global styles, layout, page
│   ├── assets/             # Static assets (images, icons)
│   ├── icons/              # SVG icon components
│   └── sections/           # Page sections (Hero, Pricing, etc.)
├── package.json            # Project metadata and scripts
├── tsconfig.json           # TypeScript configuration
├── next.config.ts          # Next.js configuration
└── README.md               # Project documentation
```

## Customization

- Edit section components in `src/sections/` to update content and layout.
- Update global styles in `src/app/globals.css`.

## Author

- [Darasimi010](https://github.com/Darasimi010)

---
