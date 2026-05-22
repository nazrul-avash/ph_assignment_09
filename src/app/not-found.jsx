import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F5F3FF] flex flex-col items-center justify-center px-4 py-20 text-center">

      {/* Big 404 */}
      <div className="relative mb-6">
        <p className="text-[120px] sm:text-[160px] md:text-[200px] font-black text-[#EDE9FE] leading-none select-none">
          404
        </p>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-[#7C3AED] rounded-full p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 sm:w-14 sm:h-14 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 2a10 10 0 110 20A10 10 0 0112 2z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-[#1E1B4B] mb-3">
        Page Not Found
      </h1>

      {/* Subtext */}
      <p className="text-[#6B7280] text-base sm:text-lg max-w-md mb-8">
        Looks like this page wandered off the map. It might have been moved,
        deleted, or maybe it never existed.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <Link
          href="/"
          className="w-full sm:w-auto px-6 py-2.5 bg-[#7C3AED] hover:bg-[#5B21B6] text-white font-medium rounded-xl transition-colors text-sm"
        >
          Go Home
        </Link>
     <Link
  href="/doctors"
  className="w-full sm:w-auto px-6 py-2.5 bg-white border border-[#E5E7EB] hover:bg-[#EDE9FE] text-[#374151] font-medium rounded-xl transition-colors text-sm"
>
  Go Back
</Link>
      </div>

      {/* Decorative dots */}
      <div className="flex gap-2 mt-12">
        <span className="w-2 h-2 rounded-full bg-[#C4B5FD]" />
        <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
        <span className="w-2 h-2 rounded-full bg-[#C4B5FD]" />
      </div>

    </div>
  );
}