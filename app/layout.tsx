import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sourceSerif = localFont({
  src: "./fonts/SourceSerif4-latin.woff2",
  variable: "--font-source-serif",
  weight: "500 700",
  display: "swap"
});

const inter = localFont({
  src: "./fonts/Inter-latin.woff2",
  variable: "--font-inter",
  weight: "400 700",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Landlease Now | Australian Land Lease Community Directory",
  description:
    "Browse land lease and lifestyle communities across Australia. Compare locations, home types and operators in one place.",
  icons: {
    icon: [
      { url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/favicon-192.png", sizes: "192x192", type: "image/png" }
    ],
    apple: [{ url: "/brand/favicon-192.png", sizes: "192x192", type: "image/png" }]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU">
      <body className={`${sourceSerif.variable} ${inter.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
