# Zuhoor Uddin — Portfolio Website

A modern, premium portfolio website built with **Next.js 15 (App Router)**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- **Animated Background** — Particle network + gradient orbs
- **Dark/Light Mode** — Toggle with smooth transitions  
- **Framer Motion** — Page-load stagger, scroll-triggered, hover animations
- **Glassmorphism UI** — Cards with backdrop-blur and subtle borders
- **Fully Responsive** — Mobile-first layout
- **SEO Optimized** — Metadata, OpenGraph, Twitter cards
- **TypeScript** — Full type safety

## 📁 Sections

| Section | Description |
|---------|-------------|
| `Hero` | Animated name, title, tagline, CTAs, tech orbit |
| `About` | Bio + 6 highlight cards |
| `Skills` | Animated progress bars, tech badge cloud |
| `Projects` | 5 rich cards with hover effects (PropTraderGuide, Chatbot Builder, eCommerce, Inventory, Cashbook) |
| `Services` | SaaS, AI, eCommerce, Automation service cards |
| `Contact` | Form with loading/success states |
| `Footer` | Nav links, social icons, back-to-top |

## 🚀 Setup

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📦 Tech Stack

- **Next.js 15** — App Router, Server Components
- **React 19** — Latest React
- **Tailwind CSS 3** — Utility-first styling
- **Framer Motion 11** — Animations
- **Lucide React** — Icon set
- **TypeScript** — Type safety

## 🗂️ Folder Structure

```
zuhoor-portfolio/
├── app/
│   ├── globals.css       # Global styles, CSS variables, animations
│   ├── layout.tsx        # Root layout + metadata + fonts
│   └── page.tsx          # Main page composition
├── components/
│   ├── AnimatedBackground.tsx  # Canvas particles + gradient orbs
│   ├── Navbar.tsx              # Sticky nav + mobile menu + theme toggle
│   ├── Hero.tsx                # Hero section with orbit visual
│   ├── About.tsx               # About bio + highlight cards
│   ├── Skills.tsx              # Skill bars + tech badge cloud
│   ├── Projects.tsx            # Project cards with hover effects
│   ├── Services.tsx            # Services + CTA banner
│   ├── Contact.tsx             # Contact form with validation
│   └── Footer.tsx              # Footer with social links
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── package.json
```

## 🎨 Design System

- **Primary Font**: Syne (headings)
- **Body Font**: DM Sans
- **Color Palette**:
  - Background: `#030812` (deep navy)
  - Accent: `#F0A500` (amber gold)
  - Secondary: `#22D3EE` (cyan)
  - Text: `#E8EAF5` / `#8896B3`
- **Effects**: Glassmorphism, gradient orbs, particle network, glow shadows

## 📝 Customization

1. **Update personal info** in `components/Hero.tsx`, `components/About.tsx`, `components/Footer.tsx`
2. **Edit projects** in `components/Projects.tsx` — each project has `name`, `description`, `tech`, `features`, `link`
3. **Adjust colors** in `tailwind.config.js` and `app/globals.css`
4. **Add real contact form** endpoint in `components/Contact.tsx` → replace the `setTimeout` mock with your API call

## 🌍 Deploy

Deploy instantly on **Vercel**:

```bash
npm install -g vercel
vercel
```
"# zuhoor-portfolio" 
