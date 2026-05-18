"use client";
import { Separator } from "@heroui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    img: "/banner1.jpg",
   
  },
  {
    img: "/banner2.jpg",
    
  },
];

const Banner = () => {
  return (
    <div className="relative h-[600px] text-white">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop
        className="h-full"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div
              className="h-[600px] w-full bg-cover bg-center relative flex items-center justify-center"
              style={{ backgroundImage: `url(${s.img})` }}
            >

              <div className="absolute inset-0 bg-black/50" />


              <div className="relative z-10 text-center max-w-3xl px-6">
                <h1 className="text-5xl md:text-6xl font-bold ">
                  {s.title}
                </h1>

                <p className="mt-4 text-lg md:text-xl text-white/80">
                  {s.desc}
                </p>

                <div className="mt-6 flex justify-center gap-4">
                  <button className="bg-violet-600  hover:bg-purple-500  px-6 py-3 uppercase tracking-wide">
                    Book Now
                  </button>

                  <button className="bg-white/20 hover:bg-white/30 px-6 py-3 uppercase">
                    View Destination
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

     

       
      </div>
 
  );
};

export default Banner;