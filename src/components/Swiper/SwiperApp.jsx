import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Swiper.css";

const arrImage = [
  "/watch/rolex_01.png",
  "/watch/rolex_02.png",
  "/watch/rolex_03.png",
  "/watch/rolex_04.png",
  "/watch/rolex_05.png",
  "/watch/rolex-orange.png",
  "/watch/rolex-black.png",
  "/watch/rolex-lax.png",
  "/watch/rolex_06.png",
  "/watch/rolex_07.png",
  "/watch/rolex_08.png",
  "/watch/rolex_09.png",
  "/watch/rolex_10.png",
  "/watch/rolex_11.png",
  "/watch/rolex_12.png",
  "/watch/rolex_13.png",
  "/watch/rolex_14.png",
  "/watch/rolex_15.png",
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
            delay: 1500,
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
              <img
                src={shoe}
                alt=""
                className="image h-96 w-96 object-cover rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Swiper
          slidesPerView={2.8}
          spaceBetween={10}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 1500,
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
              <img
                src={shoe}
                alt=""
                className="image h-64 w-96 object-cover rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}
