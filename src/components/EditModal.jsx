"use client";

import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";
import { useRouter } from "next/navigation";

import { BiEdit } from "react-icons/bi";
import { toast } from "sonner";

export function EditModal({ item }) {
 const { patientName, _id, doctorName, appointmentDate, appointmentTime, gender, phone, userEmail } = item;
 const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const booking = Object.fromEntries(formData.entries());
 console.log("EditModal item:", booking);
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
      credentials: "include"
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data?.message || "Update failed");
    }

    toast.success("Appointment updated successfully");
    router.refresh();

  };
  return (
  <Modal>

  {/* TRIGGER */}
  <Button className="rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-4 text-sm font-semibold text-white shadow-lg transition duration-300 hover:opacity-90">
    Update
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
              Appointment Update
            </span>

            <h2 className="mt-4 text-4xl font-bold text-white">
              Edit Appointment
            </h2>

            <p className="mt-3 max-w-lg text-violet-100 leading-7">
              Update patient and appointment information below.
            </p>

          </div>
        </div>

        {/* BODY */}
        <Modal.Body className="p-8">

          <form  onSubmit={onSubmit} className="space-y-7">

            {/* PATIENT NAME */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Patient Name
              </label>

              <input
                type="text"
                name="patientName"
                defaultValue={patientName}
                className="w-full rounded-2xl border border-violet-200 bg-violet-50 px-5 py-4 outline-none transition focus:border-violet-500"
              />
            </div>

            {/* DOCTOR NAME */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Doctor Name
              </label>

              <input
                type="text"
                value={doctorName}
                readOnly
                className="w-full cursor-not-allowed rounded-2xl border border-violet-200 bg-violet-100 px-5 py-4 text-gray-500 outline-none"
              />
            </div>

            {/* DATE + TIME */}
            <div className="grid gap-5 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Appointment Date
                </label>

                <input
                  type="date"
                  name="appointmentDate"
                  defaultValue={appointmentDate}
                  className="w-full rounded-2xl border border-violet-200 bg-violet-50 px-5 py-4 outline-none transition focus:border-violet-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Appointment Time
                </label>

                <input
                  type="text"
                  name="appointmentTime"
                  defaultValue={appointmentTime}
                  className="w-full rounded-2xl border border-violet-200 bg-violet-50 px-5 py-4 outline-none transition focus:border-violet-500"
                />
              </div>

            </div>

            {/* GENDER + PHONE */}
            <div className="grid gap-5 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Gender
                </label>

                <select
                  name="gender"
                  defaultValue={gender}
                  className="w-full rounded-2xl border border-violet-200 bg-violet-50 px-5 py-4 outline-none transition focus:border-violet-500"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Phone Number
                </label>

                <input
                  type="text"
                  name="phone"
                  defaultValue={phone}
                  className="w-full rounded-2xl border border-violet-200 bg-violet-50 px-5 py-4 outline-none transition focus:border-violet-500"
                />
              </div>

            </div>

            {/* EMAIL */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                name="userEmail"
                defaultValue={userEmail}
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
}