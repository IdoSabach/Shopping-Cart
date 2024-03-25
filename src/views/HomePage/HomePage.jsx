import { useState } from "react";
import Footer from "../../components/Footer/Footer.jsx";
import Slider from "../../components/Slider/Slider.jsx";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import SwiperApp from "../../components/Swiper/SwiperApp.jsx";

const productOne = "/imageSwiper/pink.jpg" 
const productTwo = "/imageSwiper/blue.jpg"
const productThree = "/imageSwiper/moon.jpg"

export default function HomePageDefault() {
  return (

    <div className="homePageDefault flex flex-col items-center gap-3 text-center">

      <section className="sectionOne flex flex-col items-center gap-6 p-2 mt-8">
        <header className="text-xl border-black rounded-3xl p-1 pr-4 pl-4 bg-slate-300 md:text-3xl">
          Welcome To Ido Sabach
        </header>
        <nav className="subHeader text-2xl md:text-4xl">
          The best store in the world!
        </nav>
        <button className="btn-shop p-3 text-lg bg-slate-700 text-white rounded-3xl md:text-x active:scale-95">
          Shop Now
        </button>
      </section>

      <SwiperApp />

      <section className="text font-bold text-3xl mb-9">Crazy discounts for the opening of the store!</section>

      <section className="sectionPro grid gap-6 lg:grid-cols-3 p-4">
        <ProductCard image={productOne} title={"Elegant sport shoe"} type={"Sport Men"} price={"159.99$"}/>
        <ProductCard image={productTwo} title={"Elegant sport shoe"} type={"Sport Men"} price={"159.99$"}/>
        <ProductCard image={productThree} title={"Elegant sport shoe"} type={"Sport Men"} price={"159.99$"}/>

        <ProductCard image={productOne} title={"Elegant sport shoe"} type={"Sport Men"} price={"159.99$"}/>
        <ProductCard image={productTwo} title={"Elegant sport shoe"} type={"Sport Men"} price={"159.99$"}/>
        <ProductCard image={productThree} title={"Elegant sport shoe"} type={"Sport Men"} price={"159.99$"}/>
      </section>

      <Slider />

      {/* <Footer /> */}
    </div>
  );
}
