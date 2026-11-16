/**
 * ==============================================================================
 * CENTRALIZED PORTFOLIO DATA — MD. AINAL HAQUE RONY
 * ==============================================================================
 * Comprehensive, modular data layer matching the Picto / Khurram design standard.
 */

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
}

export interface SkillItem {
  name: string;
  category: string;
  icon: string;
  glowColor: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProcessItem {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export const portfolioData = {
  // Core Personal Branding
  personal: {
    name: "MD. Ainal Haque Rony",
    shortName: "Rony",
    title: "Shopify Developer & UI Engineer",
    subtitle: "Client Solutions Associate",
    tagline:
      "A technology professional specializing in Shopify theme development, e-commerce solutions, and modern frontend web engineering.",
    aboutHeading: "Turning Ideas into Scalable Digital Solutions",
    aboutText:
      "I'm a Shopify developer with a passion for building fast, user-friendly, and conversion-focused online stores. I enjoy working at the intersection of modern frontend engineering (React, Next.js, TypeScript), Shopify theme architecture (Liquid, Storefront API), and business design to create meaningful digital commerce experiences.",
    location: "Dhaka, Bangladesh",
    degree: "B.Sc. in Computer Science & Engineering",
    university:
      "International University of Business Agriculture and Technology (IUBAT)",
    degreeShort: "B.Sc. in CSE, IUBAT",
    cgpa: "3.57",
    experienceYears: "1+ Years",
    experienceLabel: "of Experience",
    avatar: "/assets/hero-portrait.png",
    workspaceImage: "/assets/about-workspace.png",
    experienceIllustration: "/assets/experience-illustration.png",
    email: "ah.rony.dev@gmail.com",
    socials: {
      github: "https://github.com/ah-rony",
      linkedin: "https://www.linkedin.com/",
      website: "https://rafsanahmed.dev/",
    },
  },

  // Hero Stats Row
  stats: [
    { value: "1+", label: "Years Experience" },
    { value: "15+", label: "Stores & Apps Built" },
    { value: "3.57", label: "Academic CGPA" },
    { value: "100%", label: "Client Satisfaction" },
  ],

  // Work Process (matching Khurram / Picto design)
  process: [
    {
      step: "01",
      title: "Research & Discovery",
      description:
        "Analyzing brand objectives, store requirements, catalog structure, and conversion goals.",
      icon: "search",
    },
    {
      step: "02",
      title: "Architecture & UI/UX",
      description:
        "Translating Figma mockups into clean component hierarchies and modular theme sections.",
      icon: "layout",
    },
    {
      step: "03",
      title: "Liquid & React Engineering",
      description:
        "Crafting high-speed custom Liquid templates, reactive widgets, and Storefront API integrations.",
      icon: "code",
    },
    {
      step: "04",
      title: "Testing & Launch",
      description:
        "Rigorous cross-device QA, Core Web Vitals optimization, and smooth zero-downtime deployment.",
      icon: "rocket",
    },
  ] as ProcessItem[],

  // Services ("What I Do?" with purple left-border hover effect)
  services: [
    {
      id: "srv-1",
      number: "01",
      title: "Custom Shopify Theme Development",
      description:
        "Pixel-perfect translation of Figma designs into high-performance, modular Shopify Liquid themes built with Theme App Extensions.",
      icon: "shopping-bag",
    },
    {
      id: "srv-2",
      number: "02",
      title: "Headless E-Commerce & Storefront API",
      description:
        "Ultra-fast headless digital storefronts engineered with Next.js, React, TypeScript, and Shopify Storefront GraphQL API.",
      icon: "globe",
    },
    {
      id: "srv-3",
      number: "03",
      title: "Interactive Bundle Builders & Custom Widgets",
      description:
        "Custom app extensions including tier-based bundle customizers, slide-out cart drawers, and conversion-boosting upsell modules.",
      icon: "layers",
    },
    {
      id: "srv-4",
      number: "04",
      title: "Speed & Core Web Vitals Optimization",
      description:
        "Comprehensive performance audits, asset minification, lazy loading, and script deferral to achieve 90+ Lighthouse speed scores.",
      icon: "gauge",
    },
  ] as ServiceItem[],

  // Technical Toolkit (7 Skills)
  skills: [
    { name: "Shopify", category: "ecommerce", icon: "shopify", glowColor: "rgba(120, 173, 53, 0.25)" },
    { name: "Liquid", category: "ecommerce", icon: "liquid", glowColor: "rgba(39, 99, 239, 0.25)" },
    { name: "JavaScript", category: "frontend", icon: "javascript", glowColor: "rgba(247, 211, 41, 0.25)" },
    { name: "TypeScript", category: "frontend", icon: "typescript", glowColor: "rgba(8, 120, 189, 0.25)" },
    { name: "React.js", category: "frontend", icon: "react", glowColor: "rgba(0, 200, 232, 0.25)" },
    { name: "Next.js", category: "frontend", icon: "next", glowColor: "rgba(15, 23, 42, 0.25)" },
    { name: "Figma", category: "design", icon: "figma", glowColor: "rgba(240, 74, 54, 0.25)" },
  ] as SkillItem[],

  // Featured Projects
  projects: [
    {
      id: "ecommerce-store",
      title: "E-commerce Store",
      category: "Shopify Theme Development",
      description:
        "Custom, high-converting Shopify theme built with Liquid, JavaScript, and modular section architecture for ultra-fast performance.",
      tags: ["Shopify", "Liquid", "JavaScript"],
      image: "/assets/project-store.png",
      demoUrl: "https://github.com/ah-rony",
    },
    {
      id: "bundle-builder",
      title: "Product Bundle Builder",
      category: "Shopify App Development",
      description:
        "Interactive tier-based bundle customizer app allowing customers to mix & match products with real-time checkout synchronization.",
      tags: ["React", "Shopify Storefront API", "TypeScript"],
      image: "/assets/project-bundle.png",
      demoUrl: "https://github.com/ah-rony",
    },
    {
      id: "modern-storefront",
      title: "Modern Storefront",
      category: "Theme Customization",
      description:
        "High-performance modern storefront featuring clean UI components, optimized checkout flow, and 95+ Lighthouse score.",
      tags: ["Next.js", "Liquid", "TypeScript"],
      image: "/assets/project-storefront.png",
      demoUrl: "https://github.com/ah-rony",
    },
  ] as ProjectItem[],

  // Professional Journey
  experience: [
    {
      id: "exp-1",
      period: "2025 – Present",
      role: "Shopify Developer & Client Solutions Associate",
      company: "Software Agency",
      location: "Dhaka, Bangladesh",
      description:
        "Developing custom Shopify stores, collaborating directly with clients, and delivering conversion-driven e-commerce solutions.",
    },
    {
      id: "exp-2",
      period: "2024 – 2025",
      role: "Shopify Developer",
      company: "Software Agency",
      location: "Dhaka, Bangladesh",
      description:
        "Focused on custom theme builds, store migrations, and storefront Core Web Vitals optimization.",
    },
  ] as ExperienceItem[],

  // Verified Endorsement
  testimonial: {
    quote:
      "Rony is a dedicated and skilled developer who understands both frontend technology and e-commerce business needs.",
    clientName: "Project Client",
    clientRole: "Founder & E-Commerce Director",
    avatar: "/assets/testimonial-avatar.png",
  },
};
