import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  variable: "--font-roboto",
});

export const metadata = {
  title: "Frederico's Portfolio",
  description: "This portfolio is to showcase my skillset and work.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
