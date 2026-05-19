import { Clock3, ShieldCheck, Star, Video } from 'lucide-react';
import React from 'react';

const Testimonials = () => {
    return (
        <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-violet-100 text-violet-700 text-sm font-medium px-4 py-1.5 rounded-full">
            Platform Features
          </span>

          <h2 className="text-4xl font-bold text-indigo-950 mt-5 mb-3">
            Everything you need in one place
          </h2>

          <p className="max-w-2xl mx-auto text-gray-500 leading-7">
            Designed to make doctor appointments faster, safer, and easier
            for both patients and healthcare providers.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

          {/* Feature 1 */}
          <div className="bg-violet-50 border border-violet-100 rounded-2xl p-7">
            <div className="w-14 h-14 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center mb-5">
              <ShieldCheck size={28} />
            </div>

            <h3 className="text-lg font-semibold text-indigo-950 mb-2">
              Secure Authentication
            </h3>

            <p className="text-sm text-gray-500 leading-7">
              Better Auth with JWT and session management keeps user accounts
              and booking data protected.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-violet-50 border border-violet-100 rounded-2xl p-7">
            <div className="w-14 h-14 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center mb-5">
              <Clock3 size={28} />
            </div>

            <h3 className="text-lg font-semibold text-indigo-950 mb-2">
              Easy Appointment Booking
            </h3>

            <p className="text-sm text-gray-500 leading-7">
              Browse doctors, check availability, and confirm appointments
              within seconds.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-violet-50 border border-violet-100 rounded-2xl p-7">
            <div className="w-14 h-14 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center mb-5">
              <Video size={28} />
            </div>

            <h3 className="text-lg font-semibold text-indigo-950 mb-2">
              Online Consultations
            </h3>

            <p className="text-sm text-gray-500 leading-7">
              Meet doctors remotely through secure online consultation support
              from any location.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-violet-50 border border-violet-100 rounded-2xl p-7">
            <div className="w-14 h-14 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center mb-5">
              <Star size={28} />
            </div>

            <h3 className="text-lg font-semibold text-indigo-950 mb-2">
              Reviews & Profiles
            </h3>

            <p className="text-sm text-gray-500 leading-7">
              Users can manage profiles, track bookings, and leave reviews to
              help other patients.
            </p>
          </div>
        </div>

        {/* Bottom Highlight */}
        <div className="bg-violet-700 rounded-2xl py-12 px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Smarter healthcare experience
          </h3>

          <p className="max-w-3xl mx-auto text-violet-200 leading-7">
            From discovering doctors to managing appointments and reviews,
            the platform provides a seamless digital healthcare journey with
            security, convenience, and accessibility at its core.
          </p>
        </div>

      </div>
    </section>
    );
};

export default Testimonials;