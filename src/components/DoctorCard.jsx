import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseMedical,
  ShieldCheck,
} from "lucide-react";
import React from "react";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="group relative overflow-hidden rounded-[34px] border border-violet-500/10 bg-[#140d24] p-5 transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/30 hover:shadow-[0_25px_80px_rgba(139,92,246,0.25)]">

      {/* Gradient Accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-fuchsia-500/10 opacity-0 transition duration-500 group-hover:opacity-100"></div>

      {/* Top */}
      <div className="relative flex items-start justify-between">

        {/* Doctor */}
        <div className="flex items-center gap-4">

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-violet-500 to-fuchsia-500 opacity-20 blur-md"></div>

            <div className="relative overflow-hidden rounded-[28px] border border-violet-500/20 bg-[#1d1233] p-1">
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={110}
                height={110}
                quality={100}
                priority
                className="h-[100px] w-[100px] rounded-[24px] object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
              <ShieldCheck size={14} />
              Verified Doctor
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-white">
              {doctor.name}
            </h2>

            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
              <BriefcaseMedical size={16} />
              {doctor.specialty}
            </div>
          </div>
        </div>
      </div>

      {/* Experience Card */}
      <div className="relative mt-7 overflow-hidden rounded-3xl border border-violet-500/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-5 backdrop-blur-xl">

        {/* Decorative Circle */}
        <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-violet-500/10 blur-2xl"></div>

        <p className="text-xs uppercase tracking-[0.25em] text-violet-200/60">
          Experience
        </p>

        <div className="mt-3 flex items-end justify-between">
          <h3 className="text-3xl font-bold text-white">
            {doctor.experience}
          </h3>

          <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
            Professional
          </span>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative mt-6 flex items-center justify-between rounded-2xl border border-violet-500/10 bg-white/5 px-5 py-4">

        <div>
          <p className="text-sm text-gray-400">
            Available for appointments
          </p>

          <h4 className="mt-1 text-lg font-semibold text-white">
            View Details
          </h4>
        </div>

        <Link href={`/doctors/${doctor._id}`}>
          <button className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white transition duration-300 hover:scale-110">
            <ArrowUpRight size={22} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;