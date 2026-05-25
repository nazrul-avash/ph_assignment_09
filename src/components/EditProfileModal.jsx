"use client";
import { Button, Modal } from '@heroui/react';
import { userAc } from 'better-auth/plugins/admin/access';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'sonner';

const EditProfileModal = ({ user }) => {
    const router = useRouter();
    const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const profile = Object.fromEntries(formData.entries());

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/profile/${user.email}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(profile),
      credentials: "include"
    });
 
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data?.message || "Update failed");
    }
    router.refresh();
    toast.success("Profile updated successfully");
    

  };
    return (
       <Modal>

  {/* TRIGGER */}
  <Button className="rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-4 text-sm font-semibold text-white shadow-lg transition duration-300 hover:opacity-90">
    Update Profile
  </Button>

  <Modal.Backdrop>
    <Modal.Container placement="center">
      <Modal.Dialog className="max-h-[90vh] overflow-y-auto rounded-[36px] border border-violet-200 bg-white sm:max-w-2xl">

        <Modal.CloseTrigger />

        {/* HEADER */}
        <div className="relative overflow-hidden rounded-t-[36px] bg-gradient-to-r from-violet-700 via-purple-700 to-fuchsia-700 px-8 py-10">

          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10">

            <span className="inline-flex rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
              Profile Settings
            </span>

            <h2 className="mt-4 text-4xl font-bold text-white">
              Edit Profile
            </h2>

            <p className="mt-3 max-w-lg text-violet-100 leading-7">
              Update your personal information below.
            </p>

          </div>
        </div>

        {/* BODY */}
        <Modal.Body className="p-8">

          <form onSubmit={onSubmit} className="space-y-7">

            {/* NAME */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                defaultValue={user.name}
                className="w-full rounded-2xl border border-violet-200 bg-violet-50 px-5 py-4 outline-none transition focus:border-violet-500"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                defaultValue={user.email}
                className="w-full rounded-2xl border border-violet-200 bg-violet-50 px-5 py-4 outline-none transition focus:border-violet-500"
              />
            </div>

        
            {/* PROFILE IMAGE */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Profile Image URL
              </label>

              <input
                type="text"
                
                name="image"
                defaultValue={user.image || "Put new URL here"}
                className="w-full rounded-2xl border border-violet-200 bg-violet-50 px-5 py-4 outline-none transition focus:border-violet-500"
              />
            </div>

            {/* FOOTER */}
            <Modal.Footer className="mt-4 gap-4">

              <Button
                variant="outline"
                slot="close"
                className="rounded-2xl border border-violet-200 px-6 py-3"
              >
                Cancel
              </Button>

              <Button
                type="submit"
                slot="close"
                className="rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-3 font-semibold text-white shadow-lg transition duration-300 hover:opacity-90"
              >
                Save Changes
              </Button>

            </Modal.Footer>

          </form>
        </Modal.Body>

      </Modal.Dialog>
    </Modal.Container>
  </Modal.Backdrop>
</Modal>
    );
};

export default EditProfileModal;