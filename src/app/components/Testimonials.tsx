"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Star } from "../SVG";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const testimonialData = [
  {
    userImage: "/images/reviews/sabo-masties.png",
    stars: "5",
    authorName: "Sabo Masties",
    desc: "Smilo suggested a ‘weekly date night’ streak. Best. Idea. Ever.",
  },
  {
    userImage: "/images/reviews/sabo-masties.png",
    stars: "5",
    authorName: "Sabo Masties",
    desc: "Smilo suggested a ‘weekly date night’ streak. Best. Idea. Ever.",
  },
  {
    userImage: "/images/reviews/sabo-masties.png",
    stars: "5",
    authorName: "Sabo Masties",
    desc: "Smilo suggested a ‘weekly date night’ streak. Best. Idea. Ever.",
  },
  {
    userImage: "/images/reviews/sabo-masties.png",
    stars: "5",
    authorName: "Sabo Masties",
    desc: "Smilo suggested a ‘weekly date night’ streak. Best. Idea. Ever.",
  },
];

const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section
      id="testimonials"
      className="py-10 lg:py-16 lg:pb-0"
      aria-label="Testimonials"
    >
      <div className="container mx-auto px-4 md:px-6">
        <header className="w-[800px] max-w-full mb-10 mx-auto">
          <div className="text-center">
            <p className="text-[#A7A6A6] font-medium text-base lg:text-[18px] 2xl:text-[20px] leading-[25px] mb-6 flex justify-center">
              <span className="w-[17px] h-[2px] bg-primary mt-3 me-3"></span>
              Real Couples, Real Results
            </p>
            <div>
              <h2 className="inline-block text-blue-grey text-[24px] lg:text-[34px] 2xl:text-[48px] font-bold leading-[1.4] mb-6 relative">
                <span className="relative">
                  Don’t Just Take Our Word For It
                </span>
              </h2>
            </div>
          </div>
        </header>
        <div className="relative pt-32 pb-40">
          <div className="bg-theme-2 w-[80%] absolute top-0 bottom-0 left-1/2 -translate-x-1/2"></div>
          <Swiper
            modules={[Autoplay, Mousewheel, Navigation]}
            freeMode={true}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            onBeforeInit={(swiper) => {
              if (typeof swiper.params.navigation !== "boolean") {
                if (swiper.params.navigation) {
                  swiper.params.navigation.prevEl = prevRef.current;
                }
                if (swiper.params.navigation) {
                  swiper.params.navigation.nextEl = prevRef.current;
                }
              }
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            scrollbar={{ draggable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimononial-slider"
          >
            {testimonialData.map((data, i) => (
              <SwiperSlide key={i}>
                <article
                  className="group transition-all delay-100"
                  aria-label={`Testimonial from ${data.authorName}`}
                >
                  <div className="bg-white border border-[#3131311A] rounded-[5px] p-7 relative h-full w-full">
                    <div className="h-[67px] w-[67px] rounded-full bg-[#FED0E6] mb-3">
                      <Image
                        src={data.userImage}
                        height={67}
                        width={67}
                        alt={`${data.authorName} profile picture`}
                      />
                    </div>

                    <p className="leading-[30px] text-[20px] font-medium text-[#6A635B] mb-3 tracking-[-0.1px]">
                      {data.desc}
                    </p>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="flex gap-2">
                        {Array.from({ length: Number(data.stars) }).map(
                          (_, index) => (
                            <span key={index}>
                              <Star />
                            </span>
                          )
                        )}
                      </div>
                    </div>
                    <p className="leading-[20px] text-[14px] font-bold text-primary">
                      {data.authorName}
                    </p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute left-1/2 bottom-8 translate-x-[-50%] flex items-center p-2 justify-center bg-white rounded-full w-[120px] h-[66px] z-10">
            {/* Prev Button */}
            <button
              ref={prevRef}
              className="relative overflow-hidden group w-[50px] h-[50px] flex items-center justify-center rounded-full bg-white"
              aria-label="Previous"
            >
              <span className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0 rounded-full" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="10"
                viewBox="0 0 20 10"
                fill="none"
                className="rotate-180 relative z-10 transition-colors duration-300 group-hover:[&>path]:fill-white"
              >
                <path
                  d="M20 5.15072L14.9713 0.98405L14.9713 4.31738L5.96244e-08 4.31738L3.97496e-08 5.98405L14.9713 5.98405L14.9713 9.31738L20 5.15072Z"
                  fill="#3F3115"
                />
              </svg>
            </button>

            {/* Next Button */}
            <button
              ref={nextRef}
              className="relative overflow-hidden group w-[50px] h-[50px] flex items-center justify-center rounded-full"
              aria-label="Next"
            >
              <span className="absolute inset-0 bg-primary translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0 rounded-full" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="10"
                viewBox="0 0 20 10"
                fill="none"
                className="relative z-10 transition-colors duration-300 group-hover:[&>path]:fill-white"
              >
                <path
                  d="M20 5.15072L14.9713 0.98405L14.9713 4.31738L5.96244e-08 4.31738L3.97496e-08 5.98405L14.9713 5.98405L14.9713 9.31738L20 5.15072Z"
                  fill="#3F3115"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
