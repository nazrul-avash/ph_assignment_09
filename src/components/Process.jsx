import { CalendarDays, FileText, Search, UserRound } from 'lucide-react';
import React from 'react';

const Process = () => {
    return (
         <section className="bg-violet-50 py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-violet-100 text-violet-700 text-sm font-medium px-4 py-1.5 rounded-full">
            Simple Process
          </span>

          <h2 className="text-4xl font-bold text-indigo-950 mt-5 mb-3">
            How it works
          </h2>

          <p className="max-w-2xl mx-auto text-gray-500 leading-7">
            Get quality healthcare in four quick and simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

          {/* Step 1 */}
          <div className="relative bg-white border border-violet-100 rounded-2xl p-7">
            <span className="absolute top-5 right-5 text-xs font-bold text-violet-300">
              01
            </span>

            <div className="w-14 h-14 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center mb-5">
              <Search size={28} />
            </div>

            <h3 className="text-lg font-semibold text-indigo-950 mb-2">
              Search a doctor
            </h3>

            <p className="text-sm text-gray-500 leading-7">
              Browse verified specialists by name, specialty, or location.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative bg-white border border-violet-100 rounded-2xl p-7">
            <span className="absolute top-5 right-5 text-xs font-bold text-violet-300">
              02
            </span>

            <div className="w-14 h-14 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center mb-5">
              <CalendarDays size={28} />
            </div>

            <h3 className="text-lg font-semibold text-indigo-950 mb-2">
              Book appointment
            </h3>

            <p className="text-sm text-gray-500 leading-7">
              Choose a suitable date and time with instant confirmation.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative bg-white border border-violet-100 rounded-2xl p-7">
            <span className="absolute top-5 right-5 text-xs font-bold text-violet-300">
              03
            </span>

            <div className="w-14 h-14 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center mb-5">
              <UserRound size={28} />
            </div>

            <h3 className="text-lg font-semibold text-indigo-950 mb-2">
              Meet your doctor
            </h3>

            <p className="text-sm text-gray-500 leading-7">
              Consult online or visit in person with all records ready.
            </p>
          </div>

          {/* Step 4 */}
          <div className="relative bg-white border border-violet-100 rounded-2xl p-7">
            <span className="absolute top-5 right-5 text-xs font-bold text-violet-300">
              04
            </span>

            <div className="w-14 h-14 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center mb-5">
              <FileText size={28} />
            </div>

            <h3 className="text-lg font-semibold text-indigo-950 mb-2">
              Manage records
            </h3>

            <p className="text-sm text-gray-500 leading-7">
              Access prescriptions, notes, and appointment history anytime.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-violet-700 rounded-2xl py-10 px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          
          <div>
            <h3 className="text-3xl font-bold text-white mb-1">
              1,200+
            </h3>
            <p className="text-violet-200 text-sm">
              Verified doctors
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white mb-1">
              50,000+
            </h3>
            <p className="text-violet-200 text-sm">
              Happy patients
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white mb-1">
              98%
            </h3>
            <p className="text-violet-200 text-sm">
              Satisfaction rate
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white mb-1">
              24/7
            </h3>
            <p className="text-violet-200 text-sm">
              Support available
            </p>
          </div>

        </div>
      </div>
    </section>
    );
};

export default Process;