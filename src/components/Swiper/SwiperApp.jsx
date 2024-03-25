import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Swiper.css";

const picOne = "/imageSwiper/blue.jpg";
const picTwo = "/imageSwiper/moon.jpg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={picOne} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={picTwo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={picOne} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={picTwo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={picOne} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={picTwo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={picOne} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
