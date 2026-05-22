"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CalendarDays,
  Clock3,
  Search,
  ArrowUpDown,
} from "lucide-react";
import Link from "next/link";

const AllAppointmentsClient = ({ appointments }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("latest");

  // FILTER
  let filteredAppointments = appointments.filter((appointment) =>
    appointment.doctorName
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  // SORT
  if (sortType === "latest") {
    filteredAppointments.sort(
      (a, b) =>
        new Date(b.appointmentDate) -
        new Date(a.appointmentDate)
    );
  }

  if (sortType === "oldest") {
    filteredAppointments.sort(
      (a, b) =>
        new Date(a.appointmentDate) -
        new Date(b.appointmentDate)
    );
  }

  if (sortType === "a-z") {
    filteredAppointments.sort((a, b) =>
      a.doctorName.localeCompare(b.doctorName)
    );
  }

  if (sortType === "z-a") {
    filteredAppointments.sort((a, b) =>
      b.doctorName.localeCompare(a.doctorName)
    );
  }

  return (
    <section className="min-h-screen bg-violet-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-10">

          <span className="inline-flex rounded-full bg-violet-100 px-4 py-1.5 text-sm font-medium text-violet-700">
            Patient Dashboard
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-indigo-950">
            My Appointments
          </h1>

          <p className="mt-3 max-w-2xl text-gray-600 leading-7">
            Manage and review all your doctor appointments in one place.
          </p>
        </div>

        {/* SEARCH + SORT */}
        <div className="mb-8 flex flex-col gap-4 rounded-[30px] border border-violet-200 bg-white p-5 lg:flex-row lg:items-center lg:justify-between">

          {/* SEARCH */}
          <div className="relative w-full lg:max-w-md">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-violet-500"
            />

            <input
              type="text"
              placeholder="Search by doctor name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-2xl border border-violet-200 bg-violet-50 py-4 pl-12 pr-4 outline-none transition focus:border-violet-500"
            />
          </div>

          {/* SORT */}
          <div className="flex items-center gap-3">

            <div className="flex items-center gap-2 text-violet-700">
              <ArrowUpDown size={18} />
              <span className="font-medium">Sort</span>
            </div>

            <select
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
              className="rounded-2xl border border-violet-200 bg-violet-50 px-4 py-4 outline-none"
            >
              <option value="latest">Latest First</option>
              <option value="oldest">Oldest First</option>
              <option value="a-z">Doctor Name A-Z</option>
              <option value="z-a">Doctor Name Z-A</option>
            </select>

          </div>
        </div>

        {/* EMPTY */}
        {filteredAppointments.length === 0 && (
          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-[36px] border border-dashed border-violet-200 bg-white text-center">

            <div className="rounded-full bg-violet-100 p-5">
              <Search className="text-violet-700" size={40} />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-indigo-950">
              No Matching Appointments
            </h2>

            <p className="mt-3 max-w-md text-gray-500 leading-7">
              Try changing your search keyword or sorting option.
            </p>
          </div>
        )}

        {/* GRID */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {filteredAppointments.map((appointment) => (
            <div
              key={appointment._id}
              className="group overflow-hidden rounded-[34px] border border-violet-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >

              {/* TOP */}
              <div className="relative h-28 bg-gradient-to-r from-violet-700 via-purple-700 to-fuchsia-700">

                <div className="absolute inset-0 bg-black/10" />

                <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/10 blur-3xl" />
              </div>

              {/* BODY */}
              <div className="relative px-6 pb-6">

                {/* IMAGE */}
                <div className="-mt-14 flex justify-center">
                  <div className="rounded-[28px] border-4 border-white bg-white shadow-xl">
                    <Image
                      src={appointment.doctorImage}
                      alt={appointment.doctorName}
                      width={120}
                      height={120}
                      className="h-[110px] w-[110px] rounded-[22px] object-cover"
                    />
                  </div>
                </div>

                {/* NAME */}
                <div className="mt-5 text-center">

                  <h2 className="text-2xl font-bold text-indigo-950">
                    {appointment.doctorName}
                  </h2>

                  <p className="mt-2 text-sm text-violet-600">
                    Appointment ID: {appointment._id}
                  </p>
                </div>

                {/* INFO */}
                <div className="mt-6 space-y-4">

                  {/* DATE */}
                  <div className="rounded-2xl border border-violet-100 bg-violet-50 px-4 py-4">

                    <div className="flex items-center gap-3">

                      <div className="rounded-xl bg-white p-2 text-violet-700 shadow-sm">
                        <CalendarDays size={18} />
                      </div>

                      <div>
                        <p className="text-xs text-gray-500">
                          Booking Date
                        </p>

                        <h3 className="font-semibold text-indigo-950">
                          {new Date(
                            appointment.appointmentDate
                          ).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </h3>
                      </div>

                    </div>
                  </div>

                  {/* TIME */}
                  <div className="rounded-2xl border border-violet-100 bg-violet-50 px-4 py-4">

                    <div className="flex items-center gap-3">

                      <div className="rounded-xl bg-white p-2 text-violet-700 shadow-sm">
                        <Clock3 size={18} />
                      </div>

                      <div>
                        <p className="text-xs text-gray-500">
                          Booking Time
                        </p>

                        <h3 className="font-semibold text-indigo-950">
                          {appointment.appointmentTime}
                        </h3>
                      </div>

                    </div>
                  </div>

                </div>

                {/* BUTTON */}
                <div className="mt-6">

                  <Link href={`/doctors/${appointment.doctorMongoId}`}>
                    <button className="w-full rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-4 text-sm font-semibold text-white shadow-lg transition duration-300 hover:opacity-90">
                      View Details
                    </button>
                  </Link>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default AllAppointmentsClient;