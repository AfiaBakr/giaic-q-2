import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import TopHeader from "./Components/TopHeader";
import Header from "./Components/Header";
import MobileNavbar from "./Components/MobileNavbar";
import Footer from "./Components/Footer";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: 'Page Title',
  description: 'Page Description',
}

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`inter.className,${poppins.variable}`}>
      <div>
        <TopHeader/>
        <div className="hidden lg:block">
        <Header/>
        </div>
        <div className="lg:hidden">
        <MobileNavbar/>        
        </div>
        </div>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
