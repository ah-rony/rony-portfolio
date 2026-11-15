import type { Metadata } from "next";
import "./globals.css";

/**
 * SEO & Open Graph Metadata for MD. Ainal Haque Rony's portfolio:
 * Optimizes the site for search engines, LinkedIn, Twitter/X, and social previews.
 */
export const metadata: Metadata = {
  title: "MD. Ainal Haque Rony | Shopify Developer & Client Solutions Associate",
  description:
    "Portfolio of MD. Ainal Haque Rony — Shopify Developer & Client Solutions Associate specializing in Shopify theme/app development, e-commerce solutions, and modern web experiences.",
  keywords: [
    "MD. Ainal Haque Rony",
    "Shopify Developer",
    "Liquid Developer",
    "Client Solutions Associate",
    "Next.js Developer",
    "React Developer",
    "E-commerce Developer Bangladesh",
  ],
  authors: [{ name: "MD. Ainal Haque Rony", url: "https://github.com/ah-rony" }],
  creator: "MD. Ainal Haque Rony",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ah-rony.dev",
    title: "MD. Ainal Haque Rony | Shopify Developer & Client Solutions Associate",
    description:
      "Turning ideas into scalable digital solutions. Specializing in Shopify development, e-commerce solutions, and modern web experiences.",
    siteName: "Rony Portfolio",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

/**
 * Root Layout Component:
 * Integrates Google Font 'Inter' via high-performance preconnect links
 * and renders smooth page transitions.
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
