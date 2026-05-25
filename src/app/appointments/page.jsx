
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
import DoctorCard from "@/components/DoctorCard";


const AllAppointmentsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });


  const user = session?.user;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/doctors`);

  const appointments = await res.json();
  
console.log(appointments);
  return (
   <div className="w-full bg-gradient-to-b from-violet-50 via-white to-white py-12">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    
    {/* optional header area */}
    <div className="mb-10 text-center">
      <h2 className="text-3xl font-bold text-gray-900">
        All Available Doctors
      </h2>
      <p className="mt-2 text-gray-600">
        Browse and connect with our network of qualified healthcare professionals
      </p>
    </div>

    {/* grid */}
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {appointments.map((doctor) => (
        <div
          key={doctor._id}
          className="rounded-2xl bg-white p-2 shadow-sm transition hover:shadow-lg"
        >
         <div className="h-full">
  <DoctorCard doctor={doctor} />
</div>
        </div>
      ))}
    </div>

  </div>
</div>
  );
};

export default AllAppointmentsPage;