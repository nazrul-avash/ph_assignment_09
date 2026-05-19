import { Button } from "@heroui/react";

import Link from "next/link";
import DoctorCard from "./DoctorCard";

const Featured = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors`);
    const doctors = await res.json();
    console.log(doctors[1]);
    

    return (
        <div className="mt-10 max-w-7xl mx-auto border">
        <div className="flex items-center justify-between">
             <div>
               <h1 className="text-3xl font-bold">Top Rated Doctors</h1>
            <p className="text-muted">Handpicked travel experiences for the adventure seekers</p>
         </div>

        </div>


        <div className="grid grid-cols-3 gap-5 mt-10 mx-auto">
            {  
            doctors.map(doctor => <DoctorCard key={doctor._id} doctor={doctor} ></DoctorCard>)}
        </div>
            
        </div>
    );
}; 

export default Featured;