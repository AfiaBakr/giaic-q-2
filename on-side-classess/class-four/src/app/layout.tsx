import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Navbar from "./component/navebar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
