import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'

const myFont = localFont({
  weight: '100',
  variable: '--font-FuturaCyrillicBook',
  src: '../../public/fonts/FuturaPTBook.otf'
 })



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Kivua djamo clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${myFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
