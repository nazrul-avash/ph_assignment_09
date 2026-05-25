import React from 'react';
import { EditModal } from './EditModal';
import { BookingCancelAlert } from './BookingCancelAlert';

const MyAppointmentCard = ({ item }) => {
    const { patientName, _id, doctorName, appointmentDate, appointmentTime, gender, phone, userEmail } = item;
    return (
<div className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-[#f8fafc] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl sm:p-6">

  {/* subtle accent glow */}
  <div className="absolute inset-x-0 top-0 h-1 bg-violet-600" />

  <div className="relative z-10">

    {/* TOP */}
    <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

      {/* LEFT CONTENT */}
      <div className="flex-1">

        {/* HEADER */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <span className="inline-flex rounded-full bg-violet-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-violet-700">
              Appointment Booking
            </span>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
              {patientName}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Booking ID: {_id}
            </p>
          </div>

          {/* ACTIONS */}
          <div className="flex gap-3">
            <EditModal item={item} />
            <BookingCancelAlert bookingId={item._id} />
          </div>
        </div>

        {/* DETAILS */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

          {/* Doctor */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Doctor
            </p>

            <h3 className="mt-2 text-lg font-bold text-slate-900">
              {doctorName}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Assigned Specialist
            </p>
          </div>

          {/* Date */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Appointment
            </p>

            <h3 className="mt-2 text-lg font-bold text-slate-900">
              {new Date(appointmentDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </h3>

            <p className="mt-1 text-sm font-medium text-violet-700">
              {appointmentTime}
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Contact
            </p>

            <h3 className="mt-2 text-lg font-bold text-slate-900">
              {phone}
            </h3>

            <p className="mt-1 break-all text-sm text-slate-500">
              {userEmail}
            </p>
          </div>

          {/* Sex */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Sex
            </p>

            <h3 className="mt-2 text-lg font-bold text-slate-900">
              {gender}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Patient Information
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default MyAppointmentCard;