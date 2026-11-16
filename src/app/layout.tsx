import type { Metadata } from "next";
import "./globals.css";

/**
 * SEO & Open Graph Metadata for MD. Ainal Haque Rony:
 * Positioned as Frontend Developer & UI Engineer with deep Shopify & E-commerce specialization.
 */
export const metadata: Metadata = {
  title: "MD. Ainal Haque Rony | Frontend Developer & UI Engineer (Shopify Specialist)",
  description:
    "Portfolio of MD. Ainal Haque Rony — Frontend Developer & UI Engineer specializing in React, Next.js, TypeScript, and high-performance Shopify e-commerce solutions.",
  keywords: [
    "MD. Ainal Haque Rony",
    "Frontend Developer",
    "UI Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Shopify Developer",
    "Liquid Developer",
    "Headless E-commerce",
  ],
  authors: [{ name: "MD. Ainal Haque Rony", url: "https://github.com/ah-rony" }],
  creator: "MD. Ainal Haque Rony",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ah-rony.dev",
    title: "MD. Ainal Haque Rony | Frontend Developer & UI Engineer",
    description:
      "Crafting modern, ultra-fast web applications and high-converting Shopify storefronts with React, Next.js, TypeScript, and Liquid.",
    siteName: "Rony Portfolio",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

/**
 * Root Layout Component:
 * Integrates 'Plus Jakarta Sans', 'Inter', and 'JetBrains Mono' for luxury typography hierarchy.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-[#7028f5]/20 selection:text-[#171a48]">{children}</body>
    </html>
  );
}
