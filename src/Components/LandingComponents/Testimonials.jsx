import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = () => {
  return (
    <section
      role="testimonials"
      className="testimonials-section h-screen flex flex-col justify-center items-center gap-4 bg-[#6c3baa] py-8"
    >
      <h2 className="text-white font-bold text-3xl">Testimonials</h2>
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
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-[80%] h-[60%] sm:h-[80%] custom-swiper"
      >
        <SwiperSlide className="w-full h-[60%] bg-[#f6f4ef] dark:bg-[#121212] rounded-4xl">
          <div className="testimonial-card h-full w-full flex justify-center items-center align-middle text-center text-xl p-2">
            "Lexi has completely transformed my language learning experience.
            The interactive lessons and personalized guidance have helped me
            achieve fluency in Spanish in just a few months!"
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-[80%] bg-[#f6f4ef] dark:bg-[#121212] rounded-4xl flex justify-center items-center align-middle text-center">
          <div className="testimonial-card h-full w-full flex justify-center items-center align-middle text-center text-xl p-2">
            "I love the community support on Lexi. Practicing with native
            speakers and other learners has boosted my confidence and improved
            my speaking skills significantly."
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-[80%] bg-[#f6f4ef] dark:bg-[#121212] rounded-4xl flex justify-center items-center align-middle text-center">
          <div className="testimonial-card h-full w-full flex justify-center items-center align-middle text-center text-xl p-2">
            "The Lexi method is incredibly effective. The app's interactive
            lessons and real-life scenarios make learning a new language fun and
            engaging."
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-[80%] bg-[#f6f4ef] dark:bg-[#121212] rounded-4xl flex justify-center items-center align-middle text-center">
          <div className="testimonial-card h-full w-full flex justify-center items-center align-middle text-center text-xl p-2">
            "Thanks to Lexi, I can now confidently converse in French. The app's
            personalized feedback and guidance have been invaluable in my
            language learning journey."
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
