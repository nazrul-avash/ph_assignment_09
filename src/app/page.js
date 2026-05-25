
export const metadata = {
  title: "DocAppoint | Book Doctor Appointments Easily",
  description:
    "Find doctors, book appointments, and manage your healthcare schedule in one place. Fast, simple, and secure medical booking platform.",
  keywords: [
    "doctor appointment",
    "book doctor",
    "healthcare",
    "medical booking",
    "online doctor consultation",
  ],
  openGraph: {
    title: "DocAppoint | Book Doctor Appointments Easily",
    description:
      "Find doctors, book appointments, and manage your healthcare schedule in one place.",
    type: "website",
    url: "https://your-domain.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "DocAppoint | Book Doctor Appointments Easily",
    description:
      "Find doctors, book appointments, and manage your healthcare schedule easily.",
  },
};
import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import { Toaster } from "sonner";


export default function Home() {
  return (
   <div>
       
    <Banner></Banner>
    <Featured></Featured>
    <Process></Process>
    <Testimonials></Testimonials>
    </div>
  );
}
