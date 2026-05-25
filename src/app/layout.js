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
  title: {
    default: "Doctor Appointment System",
    template: "%s | Doctor Appointment System",
  },
  description: "Book doctor appointments easily and quickly.",
  keywords: ["doctor", "appointment", "healthcare"],
  metadataBase: new URL("https://yourdomain.com"),
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
