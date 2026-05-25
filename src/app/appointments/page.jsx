
export const metadata = {
  title: "My Appointments | DocAppoint",
  description:
    "View and manage your medical appointments, including doctor details, schedules, and booking status.",
  keywords: [
    "appointments",
    "doctor booking",
    "medical schedule",
    "healthcare dashboard",
    "patient appointments",
  ],
  robots: {
    index: false,
    follow: false,
  },
};
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import {
  CalendarDays,
  Clock3,
  Hospital,
  MapPin,
  Stethoscope,
} from "lucide-react";
import Link from "next/link";
import AllAppointmentsClient from "@/components/AllAppointementsClient";


const AllAppointmentsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });


  const user = session?.user;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/appointments`);

  const appointments = await res.json();
console.log(appointments);
  return (
   <AllAppointmentsClient appointments={appointments} />
  );
};

export default AllAppointmentsPage;