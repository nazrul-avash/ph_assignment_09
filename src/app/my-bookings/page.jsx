import MyAppointmentCard from '@/components/MyAppointmentCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

import React from 'react';

const MyBookingsPage = async () => {
     const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
 



  const user = session?.user;
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  });
  const bookings = await res.json();

    return (


<div className="mx-auto max-w-7xl px-4 py-10">
  <div className="flex flex-col gap-4">
    {bookings.map((item) => (
      <MyAppointmentCard
        key={item._id}
        item={item}
      />
    ))}
  </div>
</div>
    );
};

export default MyBookingsPage;