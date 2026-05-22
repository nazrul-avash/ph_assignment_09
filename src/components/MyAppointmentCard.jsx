import React from 'react';
import { EditModal } from './EditModal';
import { BookingCancelAlert } from './BookingCancelAlert';

const MyAppointmentCard = ({ item }) => {
    const { patientName, _id, doctorName, appointmentDate, appointmentTime, gender, phone, userEmail } = item;
    return (
<div className="flex items-center gap-5 rounded-2xl border border-violet-100 bg-white px-6 py-4 shadow-sm transition duration-300 hover:shadow-md hover:border-violet-300">

  {/* PATIENT */}
  <div className="min-w-[170px] rounded-xl bg-violet-50 border border-violet-200 px-4 py-3">
    <p className="text-xs font-semibold text-violet-600 uppercase tracking-wide">Patient</p>
    <h2 className="mt-0.5 text-base font-bold text-violet-950">{patientName}</h2>
    <p className="text-xs text-violet-500 font-medium">ID: {_id}</p>
  </div>

  <div className="h-10 w-px bg-violet-100 shrink-0" />

  {/* DOCTOR */}
  <div className="min-w-[150px] rounded-xl bg-indigo-50 border border-indigo-200 px-4 py-3">
    <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">Doctor</p>
    <h3 className="mt-0.5 text-sm font-bold text-indigo-900">{doctorName}</h3>
  </div>

  <div className="h-10 w-px bg-violet-100 shrink-0" />

  {/* DATE & TIME */}
  <div className="min-w-[160px] rounded-xl bg-purple-50 border border-purple-200 px-4 py-3">
    <p className="text-xs font-semibold text-purple-600 uppercase tracking-wide">Date & Time</p>
    <h3 className="mt-0.5 text-sm font-bold text-purple-950">
      {new Date(appointmentDate).toLocaleDateString("en-US", {
        year: "numeric", month: "long", day: "numeric",
      })}
    </h3>
    <p className="text-xs font-semibold text-purple-500">{appointmentTime}</p>
  </div>

  <div className="h-10 w-px bg-violet-100 shrink-0" />

  {/* CONTACT */}
  <div className="flex-1 min-w-[180px] rounded-xl bg-fuchsia-50 border border-fuchsia-200 px-4 py-3">
    <p className="text-xs font-semibold text-fuchsia-600 uppercase tracking-wide">Contact</p>
    <h3 className="mt-0.5 text-sm font-bold text-fuchsia-950">{phone}</h3>
    <p className="text-xs font-medium text-fuchsia-600 break-all">{userEmail}</p>
  </div>

  {/* GENDER BADGE */}
  <div className="shrink-0">
    <span className="inline-block rounded-full bg-violet-100 border border-violet-300 px-4 py-1.5 text-xs font-bold text-violet-800">
      {gender}
    </span>
  </div>

  <div className="h-10 w-px bg-violet-100 shrink-0" />

  {/* ACTIONS */}
  <div className="flex gap-3 shrink-0">
    <EditModal item={item} />
     <BookingCancelAlert bookingId={item._id} />
    
  </div>

</div>
    );
};

export default MyAppointmentCard;