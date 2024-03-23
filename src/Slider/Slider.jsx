import './slider.css'
import SlideCard from '../SlideCard/SlideCard'

export default function Slider(){
  return(
    <div className="slider">
      <div className="slider-track">

        <div className="slide">
          <SlideCard item={"T-shirt"} type={"sport"}/>
        </div>
        <div className="slide">
          <SlideCard item={"T-shirt"} type={"sport"}/>
        </div>
        <div className="slide">
          <SlideCard item={"T-shirt"} type={"sport"}/>
        </div>
        <div className="slide">
          <SlideCard item={"T-shirt"} type={"sport"}/>
        </div>
        <div className="slide">
          <SlideCard item={"T-shirt"} type={"sport"}/>
        </div>
        <div className="slide">
          <SlideCard item={"T-shirt"} type={"sport"}/>
        </div>
        <div className="slide">
          <SlideCard item={"T-shirt"} type={"sport"}/>
        </div>
        <div className="slide">
          <SlideCard item={"T-shirt"} type={"sport"}/>
        </div>
        <div className="slide">
          <SlideCard item={"T-shirt"} type={"sport"}/>
        </div>
        <div className="slide">
          <SlideCard item={"T-shirt"} type={"sport"}/>
        </div>
      </div>
    </div>
  )
}