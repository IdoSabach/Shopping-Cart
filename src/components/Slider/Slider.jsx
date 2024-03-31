import "./slider.css";
import SlideCard from "../SlideCard/SlideCard";

const arrImage = [
  "/shoes/shoe1.jpg",
  "/shoes/shoe2.jpg",
  "/shirts/shirt2.jpg",
  "/shoes/shoe3.jpg",
  "/shoes/shoe4.jpg",
  "/shirts/shirt3.jpg",
  "/shoes/shoe5.jpg",
  "/shoes/shoeRed.jpg",
  "/shirts/shirt1.jpg",
  "/shoes/shoe1.jpg",
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
