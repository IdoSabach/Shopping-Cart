import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Swiper.css";


const arrImage = [
  "/shoes/shoe1.jpg",
  "/shoes/shoe2.jpg",
  "/shirts/shirt2.jpg",
  "/shoes/shoe3.jpg",
  "/shoes/shoe4.jpg",
  "/shirts/shirt3.jpg",
  "/shoes/shoe5.jpg",
  "/shoes/shoeRed.jpg",
  "/shirts/shirt1.jpg"
];

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function SwiperApp() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isDesktop ? (
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
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
          {arrImage.map((shoe, index) => (
            <SwiperSlide key={index}>
              <img src={shoe} alt="" className="image h-96 w-96 object-cover rounded-xl" />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Swiper
          slidesPerView={1.5}
          spaceBetween={10}
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
          {arrImage.map((shoe, index) => (
            <SwiperSlide key={index}>
              <img src={shoe} alt="" className="image h-96 w-96 object-cover rounded-xl" />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}
