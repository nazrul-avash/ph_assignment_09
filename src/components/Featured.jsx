import { Button } from "@heroui/react";

import Link from "next/link";
import DoctorCard from "./DoctorCard";

const Featured = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors`);
    const doctors = await res.json();

    

    return (
      <div className="mt-20 max-w-7xl mx-auto rounded-[36px] border border-violet-200 bg-violet-50 px-6 py-12 lg:px-10">

  {/* Header */}
  <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

    <div>
      <span className="inline-flex rounded-full bg-violet-100 px-4 py-1.5 text-sm font-medium text-violet-700">
        Trusted Specialists
      </span>

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-indigo-950">
        Top Rated Doctors
      </h1>

      <p className="mt-3 max-w-2xl text-gray-500 leading-7">
        Connect with experienced and verified healthcare professionals
        ready to provide the best medical care for you.
      </p>
    </div>

    {/* Side Box */}
    <div className="rounded-2xl border border-violet-200 bg-white px-6 py-4">
      <p className="text-sm text-gray-500">
        Available Doctors
      </p>

      <h3 className="mt-1 text-3xl font-bold text-violet-700">
        {doctors.length}+
      </h3>
    </div>
  </div>

  {/* Cards */}
  <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
    {doctors.map((doctor) => (
      <DoctorCard
        key={doctor._id}
        doctor={doctor}
      />
    ))}
  </div>

</div>
    );
}; 

export default Featured;