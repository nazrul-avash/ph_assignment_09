export const metadata = {
  title: "My Bookings",
  description:
    "View, manage, and track all your medical appointment bookings in one place.",
  keywords: [
    "my bookings",
    "appointments",
    "doctor booking",
    "medical schedule",
  ],
};
import MyAppointmentCard from '@/components/MyAppointmentCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Link from 'next/link';

import React from 'react';

const MyBookingsPage = async () => {
     const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
 



  const user = session?.user;
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  });
  const bookings = await res.json();

    return (


<div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50 to-purple-100">
  <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
    
    {bookings?.length > 0 ? (
      <div className="space-y-5">
        {bookings.map((item) => (
          <MyAppointmentCard key={item._id} item={item} />
        ))}
      </div>
    ) : (
      <div className="flex min-h-[75vh] items-center justify-center">
        
        <div className="relative w-full overflow-hidden rounded-[32px] border border-violet-100 bg-white/80 p-6 shadow-2xl backdrop-blur-xl sm:p-10 lg:max-w-3xl">
          
          {/* decorative gradients */}
          <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-violet-200/40 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-fuchsia-200/40 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center text-center">
            
            {/* icon */}
            <div className="flex h-24 w-24 items-center justify-center rounded-[28px] bg-gradient-to-br from-violet-600 to-purple-700 shadow-lg shadow-violet-300/50">
              <svg
                className="h-12 w-12 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10m-12 9h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v11a2 2 0 002 2z"
                />
              </svg>
            </div>

            {/* badge */}
            <span className="mt-6 rounded-full bg-violet-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-violet-700 sm:text-sm">
              Appointment Dashboard
            </span>

            {/* title */}
            <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              No Appointments Scheduled
            </h2>

            {/* description */}
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              You currently don’t have any medical appointments booked.
              Once you reserve a consultation with a doctor, all appointment
              details will appear here instantly.
            </p>

            {/* features */}
            <div className="mt-8 grid w-full gap-4 sm:grid-cols-3">
              
              <div className="rounded-2xl border border-violet-100 bg-violet-50 p-4">
                <h3 className="text-sm font-semibold text-violet-800">
                  Easy Booking
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-600">
                  Schedule appointments within seconds.
                </p>
              </div>

              <div className="rounded-2xl border border-purple-100 bg-purple-50 p-4">
                <h3 className="text-sm font-semibold text-purple-800">
                  Secure Records
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-600">
                  All appointment information stays organized.
                </p>
              </div>

              <div className="rounded-2xl border border-fuchsia-100 bg-fuchsia-50 p-4">
                <h3 className="text-sm font-semibold text-fuchsia-800">
                  Instant Updates
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-600">
                  Track upcoming visits and schedules easily.
                </p>
              </div>
            </div>

            {/* button */}
            <Link
              href="/"
              className="mt-10 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-violet-300 transition duration-300 hover:scale-[1.02] hover:opacity-95 sm:text-base"
            >
              Book Your First Appointment
            </Link>

          </div>
        </div>
      </div>
    )}
  </div>
</div>
    );
};

export default MyBookingsPage;