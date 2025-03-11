import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar"
import "swiper/css/pagination"
import "swiper/css/navigation"

const Testimonials = () => {
  return (
    <section
      role="testimonials"
      className="testimonials-section h-screen flex flex-col justify-center items-center bg-[#fe4d01] py-8"
    >
      <h2 className="text-[#ffd966] font-bold text-3xl">Testimonials</h2>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={5}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          }
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-[80%] h-[80%]"
      >
        <SwiperSlide className="w-full h-[80%] bg-red-700 rounded-4xl flex justify-center items-center align-middle text-center">Slide 1</SwiperSlide>
        <SwiperSlide className="w-full h-[80%] bg-red-700 rounded-4xl flex justify-center items-center align-middle text-center">Slide 2</SwiperSlide>
        <SwiperSlide className="w-full h-[80%] bg-red-700 rounded-4xl flex justify-center items-center align-middle text-center">Slide 3</SwiperSlide>
        <SwiperSlide className="w-full h-[80%] bg-red-700 rounded-4xl flex justify-center items-center align-middle text-center">Slide 4</SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
