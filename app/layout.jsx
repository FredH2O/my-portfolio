import { Inter, Poppins, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-dm_sans",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const viewport = "width=device-width, initial-scale=1.0";

export const metadata = {
  title: "Frederico's Portfolio | Frontend Developer & Web Specialist",
  description:
    "Explore Frederico's portfolio showcasing frontend development skills, including projects in HTML, CSS, JavaScript, React, Next.js, and more.",
  keywords:
    "frontend developer, web developer, portfolio, React, Next.js, TailwindCSS, HTML, CSS, web design, frontend specialist",
  robots: "index, follow",
  openGraph: {
    title: "Frederico's Portfolio - Web Developer & Frontend Specialist",
    description:
      "Explore Frederico's portfolio showcasing frontend development skills, including projects in HTML, CSS, JavaScript, React, Next.js, and more.",
    url: "",
    image: "/images/logo-full.png",
    site_name: "Frederico's Portfolio",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon links */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />
        <meta name="viewport" content={viewport} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />
      </head>
      <body
        className={`${poppins.variable} ${dm_sans.variable} ${inter.variable} relative antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
