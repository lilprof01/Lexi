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
      className="testimonials-section h-screen flex flex-col justify-center items-center gap-4 bg-[#fe4d01] py-8"
    >
      <h2 className="text-[#ffd966] font-bold text-3xl">Testimonials</h2>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
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
        className="w-[80%] h-[60%] sm:h-[80%] custom-swiper"
      >
        <SwiperSlide className="w-full h-[60%] bg-[#f6f4ef] dark:bg-[#121212] rounded-4xl">
          <div className="testimonial-card h-full w-full flex justify-center items-center align-middle text-center text-xl">"
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ullam voluptates quas dolores possimus? Neque atque similique est nihil labore ipsum doloremque tempore alias, tempora, suscipit quas minima pariatur nisi. "
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-[80%] bg-[#f6f4ef] dark:bg-[#121212] rounded-4xl flex justify-center items-center align-middle text-center">
        <div className="testimonial-card h-full w-full flex justify-center items-center align-middle text-center text-xl">"
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ullam voluptates quas dolores possimus? Neque atque similique est nihil labore ipsum doloremque tempore alias, tempora, suscipit quas minima pariatur nisi. "
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-[80%] bg-[#f6f4ef] dark:bg-[#121212] rounded-4xl flex justify-center items-center align-middle text-center">
        <div className="testimonial-card h-full w-full flex justify-center items-center align-middle text-center text-xl">"
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ullam voluptates quas dolores possimus? Neque atque similique est nihil labore ipsum doloremque tempore alias, tempora, suscipit quas minima pariatur nisi. "
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-[80%] bg-[#f6f4ef] dark:bg-[#121212] rounded-4xl flex justify-center items-center align-middle text-center">
        <div className="testimonial-card h-full w-full flex justify-center items-center align-middle text-center text-xl">"
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ullam voluptates quas dolores possimus? Neque atque similique est nihil labore ipsum doloremque tempore alias, tempora, suscipit quas minima pariatur nisi. "
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
