import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ChatWidget from "@/components/Chat/ChatWidget";
import { Analytics } from "@vercel/analytics/react";
import AppWrapper from "@/components/AppWrapper/AppWrapper";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-dm_sans",
  display: "swap",
});

export const viewport = { width: "device-width", initialScale: 1 };

export const metadata = {
  title: "Frederico's Portfolio | Frontend Developer & Web Specialist",
  description:
    "Explore Frederico's portfolio showcasing frontend development skills, including projects in HTML, CSS, JavaScript, React, Next.js, and more.",
  keywords:
    "frontend developer, web developer, portfolio, React, Next.js, TailwindCSS, HTML, CSS, web design, frontend specialist, wordpress, PHP",
  robots: "index, follow",
  metadataBase: new URL("https://fredcodes.com/"),
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Frederico's Portfolio - Web Developer & Frontend Specialist",
    description:
      "Explore Frederico's portfolio showcasing frontend development skills, including projects in HTML, CSS, JavaScript, React, Next.js, and more.",
    url: "https://fredcodes.com/",
    images: ["/images/logo-full.png"],
    siteName: "Frederico's Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Frederico's Portfolio - Web Developer & Frontend Specialist",
    description:
      "Explore Frederico's portfolio showcasing frontend development skills, including projects in HTML, CSS, JavaScript, React, Next.js, and more.",
    images: ["/images/logo-full.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${dm_sans.variable} 
          ${spaceGrotesk.variable} 
          relative antialiased`}
      >
        <AppWrapper>
          <Header />
          <main>{children}</main>
          <Footer />
        </AppWrapper>
        <Analytics />
        <ChatWidget />
      </body>
    </html>
  );
}
