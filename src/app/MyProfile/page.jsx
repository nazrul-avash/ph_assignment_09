import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import { Pencil } from "lucide-react";
import Link from "next/link";
import EditProfileModal from "@/components/EditProfileModal";

const MyProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;
  const email = session?.user?.email;

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">You are not logged in.</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-violet-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">

        {/* HEADER */}
        <div className="mb-10 text-center">
          <span className="inline-flex rounded-full bg-violet-100 px-4 py-1.5 text-sm font-medium text-violet-700">
            My Profile
          </span>

          <h1 className="mt-4 text-4xl font-bold text-indigo-950">
            Account Details
          </h1>

          <p className="mt-3 text-gray-600">
            Manage your personal information
          </p>
        </div>

        {/* CARD */}
        <div className="overflow-hidden rounded-[36px] border border-violet-200 bg-white shadow-lg">

          {/* TOP BANNER */}
          <div className="relative h-32 bg-gradient-to-r from-violet-700 via-purple-700 to-fuchsia-700">
            <div className="absolute inset-0 bg-black/10" />
          </div>

          <div className="px-8 pb-10">
{/* PROFILE HEADER */}
<div className="relative flex flex-col items-center">

  {/* AVATAR */}
  <div className="absolute -top-14">
    <div className="rounded-[28px] border-4 border-white bg-white p-1 shadow-xl">
      <Image
        src={user.image || "/avatar.png"}
        alt="profile"
        width={120}
        height={120}
        className="h-[120px] w-[120px] rounded-[22px] object-cover"
      />
    </div>
  </div>

  {/* SPACER (push content below avatar) */}
  <div className="h-26" />

  {/* NAME */}
  <h2 className="text-3xl font-bold text-indigo-950">
    {user.name}
  </h2>

  {/* EMAIL */}
  <p className="mt-1 text-gray-500">
    {user.email}
  </p>

</div>
            {/* DETAILS BOX */}
            <div className="mt-8 space-y-4">

              <div className="rounded-2xl border border-violet-100 bg-violet-50 px-5 py-4">
                <p className="text-xs text-gray-500">Full Name</p>
                <p className="mt-1 font-semibold text-indigo-950">
                  {user.name}
                </p>
              </div>

              <div className="rounded-2xl border border-violet-100 bg-violet-50 px-5 py-4">
                <p className="text-xs text-gray-500">Email Address</p>
                <p className="mt-1 font-semibold text-indigo-950 break-all">
                  {user.email}
                </p>
              </div>

            </div>

            {/* BUTTON */}
            <div className="mt-8 flex justify-center">
              
                <EditProfileModal email={user.email} />
             
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default MyProfilePage;