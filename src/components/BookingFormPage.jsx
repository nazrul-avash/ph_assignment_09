import React from 'react';

const BookingFormPage = ({doctor}) => {
    return (
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
    );
};

export default BookingFormPage;