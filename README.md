# 🚀 MD. Ainal Haque Rony — Developer Portfolio

A pixel-perfect, high-performance portfolio website built for **MD. Ainal Haque Rony** (Shopify Developer & Client Solutions Associate). Features 1:1 visual fidelity to the original design, enhanced 60 FPS Framer Motion animations, clean and commented TypeScript code, and a 100% free backend email dispatch system.

---

## 🌟 Key Highlights

- **1:1 Pixel-Perfect UI**: Exact reproduction of geometry, typography (Inter), colors (`#7028f5`), skewed backdrops, orbit rings, and badges.
- **Enhanced Modern Animations**:
  - Smooth staggered entrance on hero headline and action buttons.
  - Floating 3D orbital ellipse and pulsing lavender glow behind the portrait.
  - Interactive 3D tilt and elevation on skill cards (Shopify, Liquid, JavaScript, TypeScript, React.js, Next.js, Figma).
  - Project cards with smooth image zoom and hover shine.
  - Animated glowing timeline nodes with expanding ripple effect.
  - Dynamic paper-plane takeoff animation on hover and click.
  - Confetti celebration burst upon sending a contact inquiry.
- **100% Free Email Backend (`/api/contact`)**:
  - Built-in Next.js App Router API route.
  - Free email delivery using **Nodemailer with Gmail App Password** (or Resend free tier).
  - In-memory rate limiting (max 5 requests per 10 minutes per IP) to prevent spam attacks.
  - Honeypot anti-spam trap to silently block bots without CAPTCHAs.
  - Input validation and HTML escaping to protect against XSS.
- **Clean Architecture & Comprehensive Comments**: Every single component, function, and style contains detailed inline documentation explaining *what* it does and *why*.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org) with React 19
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict type safety)
- **Styling**: Modern CSS variables & [Tailwind CSS](https://tailwindcss.com)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev) & Custom SVG skill icons
- **Email Dispatch**: [Nodemailer](https://nodemailer.com) (Free Gmail SMTP)
- **Interactive Effects**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)

---

## 📂 Project Structure

```
ptf/
├── public/
│   ├── assets/
│   │   ├── hero-portrait.png           # Transparent hero portrait
│   │   ├── about-workspace.png         # Workspace desk photo
│   │   ├── project-store.png           # E-commerce store preview
│   │   ├── project-bundle.png          # Product bundle builder preview
│   │   ├── project-storefront.png      # Modern storefront preview
│   │   ├── experience-illustration.png # Shopify laptop art
│   │   └── testimonial-avatar.png      # Client avatar
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts        # Backend contact API route (free email)
│   │   ├── globals.css                 # Exact design styles, CSS variables, & responsive breakpoints
│   │   ├── layout.tsx                  # Root HTML layout with Inter font and SEO metadata
│   │   └── page.tsx                    # Main portfolio page orchestration
│   └── components/
│       ├── Header.tsx                  # Brand mark, desktop navigation, and mobile menu
│       ├── Hero.tsx                    # Headline, CTA buttons, floating orbit & portrait
│       ├── About.tsx                   # Workspace photo, 1+ yrs badge, quick facts
│       ├── Skills.tsx                  # 7 interactive skill cards with hover physics
│       ├── SkillIcons.tsx              # Crisp SVG icons for Shopify, Liquid, React, etc.
│       ├── Projects.tsx                # 3 project preview cards with zoom & external links
│       ├── Experience.tsx              # Career timeline with glowing nodes & agency roles
│       ├── BottomPanels.tsx            # Academic background (CGPA 3.57) & testimonial
│       ├── ContactBanner.tsx           # Navy CTA banner with flying paper-plane animation
│       ├── ContactModal.tsx            # Interactive contact dialog with confetti & validation
│       └── Footer.tsx                  # Footer brand, navigation, and copyright
├── .env.example                        # Template for Gmail SMTP configuration
├── package.json                        # Dependencies and scripts
└── tsconfig.json                       # TypeScript compiler settings
```

---

## ⚡ Quick Start

### 1. Install Dependencies
```bash
pnpm install
# or
npm install
```

### 2. Configure 100% Free Email (Optional but Recommended)
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Open `.env.local` and add your Gmail credentials:
```env
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your16charpassword"
CONTACT_RECEIVER_EMAIL="your-email@gmail.com"
```

> **How to get a free Google App Password in 60 seconds:**
> 1. Visit your Google Account: [myaccount.google.com/security](https://myaccount.google.com/security)
> 2. Ensure **2-Step Verification** is turned ON.
> 3. Search for **App Passwords** in the search bar.
> 4. Create an app password named `"Portfolio"`.
> 5. Copy the 16-character code and paste it into `SMTP_PASS`.

*(Note: If you run without `.env.local`, the contact form automatically operates in Demo Mode, logging submissions to the terminal console so testing works immediately!)*

### 3. Run Development Server
```bash
pnpm dev
# or
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
pnpm build
pnpm start
```

---

## 🚀 One-Click Free Deployment

This project is ready to deploy on **Vercel** or **Netlify**:
1. Push this repository to your GitHub account (`github.com/ah-rony/portfolio`).
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Add your environment variables (`SMTP_USER`, `SMTP_PASS`) under **Settings > Environment Variables**.
5. Click **Deploy** — your portfolio is live worldwide with SSL and high-speed edge CDN!
