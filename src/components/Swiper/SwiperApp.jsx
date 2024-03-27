import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Swiper.css";

// const shoe1 = "/shoes/shoe1.jpg";
// const shoe2 = "/shoes/shoe2.jpg";
// const shoe3 = "/shoes/shoe3.jpg";
// const shoe4 = "/shoes/shoe4.jpg";
// const shoe5 = "/shoes/shoe5.jpg";
// const shoeRed = "/shoes/shoeRed.jpg";

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

// import required modules
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
              <img src={shoe} alt="" className="image h-96 w-96 object-cover" />
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
              <img src={shoe} alt="" className="image h-96 w-96 object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}
