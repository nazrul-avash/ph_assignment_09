"use client";

import { useState } from "react";
import { CalendarPlus2 } from "lucide-react";
import { Modal, Surface, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

export function BookingFormModal({ doctor }) {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const {
    id,
    name,
    specialty,
    image,
    experience,
    availability,
    description,
    hospital,
    location,
    fee,
  } = doctor;

  const [patientName, setPatientName] = useState("");
  const [gender, setGender] = useState("Male");
  const [phone, setPhone] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");

  const handleBooking = async (e) => {
    e.preventDefault();

    try {
      const bookingData = {
        userId: user?.id,
        userEmail: user?.email,
        doctorId: id,
        doctorName: name,

        patientName,
        gender,
        phone,

        appointmentDate,
        appointmentTime,
      };

      const { data: tokenData } = await authClient.token();

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/booking`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${tokenData?.token}`,
          },
          body: JSON.stringify(bookingData),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Booking failed");
      }

      toast.success("Appointment booked successfully!");

      setPatientName("");
      setGender("Male");
      setPhone("");
      setAppointmentDate("");
      setAppointmentTime("");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Modal>
      <Button className="flex items-center justify-center gap-2 rounded-2xl bg-violet-700 px-6 py-4 text-sm font-semibold text-white transition hover:bg-violet-800">
        <CalendarPlus2 size={18} />
        Book Appointment
      </Button>

      <Modal.Backdrop>
        <Modal.Container
          placement="center"
          className="w-full max-w-5xl px-3 sm:px-6 lg:max-w-full"
        >
          <Modal.Dialog className="w-full max-w-6xl max-h-[92vh] overflow-y-auto rounded-[32px]">
            <Modal.CloseTrigger />

            <Modal.Header className="px-6 pt-6 sm:px-8">
              <Modal.Heading />
            </Modal.Header>

            <Modal.Body className="p-4 sm:p-6">
              <Surface variant="default">
                <div className="rounded-[36px] border border-violet-200 bg-white p-5 sm:p-8">
                  <div>
                    <span className="inline-flex rounded-full bg-violet-100 px-4 py-1.5 text-sm font-medium text-violet-700">
                      Appointment Booking
                    </span>

                    <h2 className="mt-4 text-2xl font-bold text-indigo-950 sm:text-3xl">
                      Book Your Visit
                    </h2>

                    <p className="mt-3 leading-7 text-gray-500">
                      Complete the form below to schedule an appointment with{" "}
                      {name}.
                    </p>
                  </div>

                  {/* Fee */}
                  <div className="mt-6 rounded-3xl border border-violet-100 bg-violet-50 p-5">
                    <p className="text-sm text-gray-500">
                      Consultation Fee
                    </p>

                    <h3 className="mt-2 text-3xl font-bold text-violet-700 sm:text-4xl">
                      ৳{fee}
                    </h3>
                  </div>

                  {/* FORM */}
                  <form
                    onSubmit={handleBooking}
                    className="mt-8 grid gap-5 md:grid-cols-2"
                  >
                    {/* Email */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Email Address
                      </label>

                      <input
                        type="email"
                        value={user?.email || ""}
                        readOnly
                        className="w-full rounded-2xl border border-violet-200 bg-violet-50 px-4 py-4 outline-none"
                      />
                    </div>

                    {/* Doctor */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Doctor Name
                      </label>

                      <input
                        type="text"
                        value={name}
                        readOnly
                        className="w-full rounded-2xl border border-violet-200 bg-violet-50 px-4 py-4 outline-none"
                      />
                    </div>

                    {/* Patient */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Patient Name
                      </label>

                      <input
                        type="text"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        placeholder="Rahim Uddin"
                        className="w-full rounded-2xl border border-violet-200 bg-violet-50 px-4 py-4 outline-none"
                      />
                    </div>

                    {/* Gender */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Gender
                      </label>

                      <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="w-full rounded-2xl border border-violet-200 bg-violet-50 px-4 py-4"
                      >
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Phone
                      </label>

                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="01712345678"
                        className="w-full rounded-2xl border border-violet-200 bg-violet-50 px-4 py-4"
                      />
                    </div>

                    {/* Date */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Appointment Date
                      </label>

                      <input
                        type="date"
                        value={appointmentDate}
                        onChange={(e) =>
                          setAppointmentDate(e.target.value)
                        }
                        className="w-full rounded-2xl border border-violet-200 bg-violet-50 px-4 py-4"
                      />
                    </div>

                    {/* Time */}
                    <div className="md:col-span-2">
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Appointment Time
                      </label>

                      <select
                        value={appointmentTime}
                        onChange={(e) =>
                          setAppointmentTime(e.target.value)
                        }
                        className="w-full rounded-2xl border border-violet-200 bg-violet-50 px-4 py-4"
                      >
                        <option value="">Select Time</option>
                        <option>09:00 AM</option>
                        <option>10:30 AM</option>
                        <option>04:00 PM</option>
                      </select>
                    </div>

                    {/* Button */}
                    <div className="md:col-span-2">
                      <button
                        type="submit"
                        className="w-full rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-4 text-sm font-semibold text-white"
                      >
                        Confirm Appointment
                      </button>
                    </div>
                  </form>
                </div>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}