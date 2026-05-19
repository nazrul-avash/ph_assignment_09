import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const DoctorDetailsPage = async ({params}) => {

  const { id } = await params;
  const {token} = await auth.api.getToken({
    headers: await headers()
  })
     const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors/${id}`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  });
  
  const doctor = await res.json();
  console.log(doctor);
    return (
        <div>
            details page
        </div>
    );
};

export default DoctorDetailsPage;