import {  Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "DocAppoint",
  description: "Find and book appointments with top-rated doctors in your area. Browse specialties, check availability, and manage your healthcare schedule with DocAppoint.",
   keywords: ["doctor appointment", "book doctor", "online healthcare", "medical appointment", "find doctor", "hospital booking", "healthcare Bangladesh", "doctor schedule"],
  
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <Toaster position="top-right" richColors />
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        </body>
    </html>
  );
}
