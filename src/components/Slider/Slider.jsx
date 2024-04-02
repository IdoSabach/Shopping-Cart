import "./slider.css";
import SlideCard from "../SlideCard/SlideCard";

const arrImage = [
  "/watch/rolex_01.png",
  "/watch/rolex_02.png",
  "/watch/rolex_03.png",
  "/watch/rolex_04.png",
  "/watch/rolex_05.png",
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

export default function Slider() {
  return (
    <div className="slider">
      <div className="slider-track">
        {arrImage.map((item, index) => (
          <div key={index} className="slide">
            <SlideCard image={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
