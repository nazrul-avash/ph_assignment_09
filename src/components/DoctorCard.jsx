import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DoctorCard = ({doctor}) => {
   
    return (
        <div className="group overflow-hidden rounded-3xl border border-violet-400/20 bg-[#140d24] shadow-[0_10px_40px_rgba(139,92,246,0.25)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_60px_rgba(139,92,246,0.4)]">
      
      {/* Top Background */}
      <div className="relative h-32 bg-gradient-to-r from-violet-700 via-purple-700 to-fuchsia-700">
        
        {/* Glow */}
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl"></div>

        {/* Doctor Image */}
        <div className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2">
          <div className="rounded-full border-4 border-[#140d24] bg-[#140d24] p-1">
            <Image
              src={doctor.image}
              alt={doctor.name}
              width={110}
              height={110}
              className="h-[110px] w-[110px] rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-6 pt-16 text-center">
        
        {/* Name */}
        <h2 className="text-2xl font-bold tracking-wide text-white">
          {doctor.name}
        </h2>

        {/* Specialty */}
        <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
          
          {doctor.specialty}
        </div>

        {/* Experience Card */}
        <div className="mt-6 rounded-2xl border border-violet-400/10 bg-white/5 p-5 backdrop-blur-md">
         

          <p className="text-sm text-gray-400">
            Experience
          </p>

          <h4 className="mt-1 text-lg font-semibold text-white">
            {doctor.experience}
          </h4>
        </div>

        {/* Button */}
            <Link href={`/doctors/${doctor._id}`}>
        <button className="mt-6 w-full rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:from-violet-500 hover:to-purple-500">
          View Profile
        </button>
        </Link>
      </div>
    </div>
    );
};

export default DoctorCard;