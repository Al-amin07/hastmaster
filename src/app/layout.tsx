import type { Metadata } from "next";
import {  Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // customize as needed
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Custom Hat & Cap Manufacturer | HatsMaster Sourcing Experts",
  description: "HatsMaster is a trusted global manufacturer and sourcing partner for custom hats and caps, specializing in private label, OEM production, and wholesale supply. We offer low MOQs, fast turnaround times, premium quality headwear, and worldwide shipping for fashion brands, merchandisers, and retailers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
