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
