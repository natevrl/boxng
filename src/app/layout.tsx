import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "@/src/globals.css";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});

const knockoutHeavy = localFont({
  src: [
    {
      path: "../../public/fonts/knockout-heavy.woff2",
      weight: 'normal',
      style: "normal",
    },
  ],
  variable: "--font-knockout-heavy",
});

const knockoutLight = localFont({
  src: [
    {
      path: "../../public/fonts/knockout-light.woff2",
      weight: "normal",
      style: "normal",
    },
  ],
  variable: "--font-knockout-light",
});

export const metadata: Metadata = {
  title: "Boxng",
  description: "best boxing stuff reviews",
};

function RootLayout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${knockoutLight.variable} ${knockoutHeavy.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
