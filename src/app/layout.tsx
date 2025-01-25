'use client'

import "./globals.css";
import localFont from 'next/font/local'
import React, { useEffect, useState } from "react";

const myFont = localFont({
  weight: '100',
  variable: '--font-FuturaCyrillicBook',
  src: '../../public/fonts/FuturaPTBook.otf'
 })





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize); // Check on resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  return (
    <html lang="en">
      <body
        className={`${myFont.variable} antialiased`}
      >
        {isMobile && (
          <div className="fixed top-0 left-0 w-full bg-red-500 text-white text-center p-4">
            This site is not optimized for mobile. Please use a laptop.
          </div>
        )}
        {!isMobile && children}
      </body>
    </html>
  );
}
