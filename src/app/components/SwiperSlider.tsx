import React, { ReactNode } from "react";

import { Autoplay, Mousewheel, Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/autoplay";
import "swiper/css/navigation";

interface SwiperSliderProps {
  children: ReactNode;
}

const SwiperSlider: React.FC<SwiperSliderProps> = ({ children }) => {
  return (
    <Swiper
      modules={[Autoplay, Mousewheel, Navigation]}
      freeMode={true}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      navigation
      scrollbar={{ draggable: true }}
      breakpoints={{
        640: { slidesPerView: 1, spaceBetween: 10 },
        768: { slidesPerView: 2, spaceBetween: 15 },
        1024: { slidesPerView: 3, spaceBetween: 20 },
      }}
      className="services-swiper"
    >
      {children}
    </Swiper>
  );
};

export default SwiperSlider;
