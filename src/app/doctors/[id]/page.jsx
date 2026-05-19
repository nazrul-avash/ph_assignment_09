import { auth } from '@/lib/auth';
import { BriefcaseMedical, Building2, Calendar, CalendarDays, Clock3, Mail, MapPin, Phone, User } from 'lucide-react';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

const DoctorDetailsPage = async ({params}) => {

  const { id } = await params;

  const {token} = await auth.api.getToken({
    headers: await headers()
  })
     const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors/${id}`, {
    headers: {
      authorization: `Bearer ${token}`
    }
    
  });
 console.log("TOKEN:", token);

  const doctor = await res.json();
  const {
  name,
  specialty,
  image,
  experience,
  availability,
  description,
  hospital,
  location,
  fee,
} = doctor;
  console.log(doctor);

return (
  <section className="bg-violet-50 py-10 px-4 sm:px-6 lg:px-8 min-h-screen">
    <div className="max-w-7xl mx-auto">

      <div className="grid gap-8 lg:grid-cols-[1.1fr_.75fr]">

        {/* LEFT SIDE */}
        <div className="overflow-hidden rounded-[36px] border border-violet-200 bg-white">

          {/* Banner */}
          <div className="relative h-44 bg-gradient-to-r from-violet-700 via-purple-700 to-fuchsia-700 sm:h-56">
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="relative px-5 pb-8 sm:px-8 lg:px-10">

            {/* Doctor Image */}
            <div className="-mt-16 sm:-mt-20">
              <div className="inline-block rounded-[30px] border-4 border-white bg-white shadow-lg">
               <Image
            src={image}
           alt=''
            width={160}
            height={160}
            className="h-[130px] w-[130px] sm:h-[160px] sm:w-[160px] rounded-[24px] object-cover"
          />
              </div>
            </div>

            {/* Specialty */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700">
              <BriefcaseMedical size={16} />
              <span>{specialty}</span>
            </div>

            {/* Name */}
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-indigo-950 sm:text-4xl">
              {name}
            </h1>

            {/* Description */}
            <p className="mt-5 text-gray-600 leading-8">
              {description}
            </p>

            {/* Info Cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              <div className="rounded-3xl border border-violet-100 bg-violet-50 p-5">
                <div className="flex items-center gap-3 text-violet-700">
                  <Building2 size={20} />
                  <h3 className="font-semibold">Hospital</h3>
                </div>
                <p className="mt-3 text-gray-600">{hospital}</p>
              </div>

              <div className="rounded-3xl border border-violet-100 bg-violet-50 p-5">
                <div className="flex items-center gap-3 text-violet-700">
                  <MapPin size={20} />
                  <h3 className="font-semibold">Location</h3>
                </div>
                <p className="mt-3 text-gray-600">{location}</p>
              </div>

              <div className="rounded-3xl border border-violet-100 bg-violet-50 p-5">
                <div className="flex items-center gap-3 text-violet-700">
                  <Clock3 size={20} />
                  <h3 className="font-semibold">Experience</h3>
                </div>
                <p className="mt-3 text-gray-600">{experience}</p>
              </div>

              <div className="rounded-3xl border border-violet-100 bg-violet-50 p-5">
                <div className="flex items-center gap-3 text-violet-700">
                  <Calendar size={20} />
                  <h3 className="font-semibold">Availability</h3>
                </div>
                <p className="mt-3 text-gray-600">{availability}</p>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="h-fit rounded-[36px] border border-violet-200 bg-white p-6 sm:p-8">

          <div>
            <span className="inline-flex rounded-full bg-violet-100 px-4 py-1.5 text-sm font-medium text-violet-700">
              Appointment Booking
            </span>

            <h2 className="mt-4 text-3xl font-bold text-indigo-950">
              Book Your Visit
            </h2>

            <p className="mt-3 text-gray-500 leading-7">
              Complete the form below to schedule an appointment with {name}.
            </p>
          </div>

          {/* Fee */}
          <div className="mt-6 rounded-3xl border border-violet-100 bg-violet-50 p-5">
            <p className="text-sm text-gray-500">Consultation Fee</p>
            <h3 className="mt-2 text-4xl font-bold text-violet-700">
              ৳{fee}
            </h3>
          </div>

          {/* FORM */}
          <form className="mt-8 space-y-5">

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="user@gmail.com"
                className="w-full rounded-2xl border border-violet-200 bg-violet-50 px-4 py-4 outline-none"
              />
            </div>

            {/* Doctor Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Doctor Name
              </label>
              <input
                type="text"
                value={name}
                readOnly
                className="w-full rounded-2xl border border-violet-200 bg-violet-50 px-4 py-4 outline-none"
              />
            </div>

            {/* Patient Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Patient Name
              </label>
              <input
                type="text"
                placeholder="Rahim Uddin"
                className="w-full rounded-2xl border border-violet-200 bg-violet-50 px-4 py-4 outline-none"
              />
            </div>

            {/* Gender + Phone */}
            <div className="grid gap-5 sm:grid-cols-2">

              <select className="w-full rounded-2xl border border-violet-200 bg-violet-50 px-4 py-4">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>

              <input
                type="tel"
                placeholder="01712345678"
                className="w-full rounded-2xl border border-violet-200 bg-violet-50 px-4 py-4"
              />

            </div>

            {/* Date + Time */}
            <div className="grid gap-5 sm:grid-cols-2">

              <input
                type="date"
                className="w-full rounded-2xl border border-violet-200 bg-violet-50 px-4 py-4"
              />

              <select className="w-full rounded-2xl border border-violet-200 bg-violet-50 px-4 py-4">
                <option>09:00 AM</option>
                <option>10:30 AM</option>
                <option>04:00 PM</option>
              </select>

            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-4 text-sm font-semibold text-white"
            >
              Confirm Appointment
            </button>

          </form>
        </div>

      </div>
    </div>
  </section>
);
  
};

export default DoctorDetailsPage;