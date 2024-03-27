import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "../../components/Slider/Slider.jsx";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import SwiperApp from "../../components/Swiper/SwiperApp.jsx";
import Items from "../../data/Items.js";

export default function HomePage() {
  const displayedItems = Items.slice(0, 3);
  let i = 0;
  return (
    <div className="homePageDefault flex flex-col items-center gap-3 text-center">
      <section className="sectionOne flex flex-col items-center gap-6 p-2 mt-8">
        <header className="text-xl border-black rounded-3xl p-1 pr-4 pl-4 bg-slate-300 md:text-3xl">
          Welcome To Lorem, ipsum dolor.
        </header>
        <nav className="subHeader text-2xl md:text-4xl">
          Lorem ipsum dolor sit amet consectetur.
        </nav>
        <Link
          to="/shopPage"
          className="btn-shop p-3 text-lg bg-slate-700 text-white rounded-3xl md:text-x active:scale-95"
        >
          Shop Now
        </Link>
      </section>

      <SwiperApp />

      <section className="text font-bold text-3xl mb-9">
        Lorem ipsum dolor, sit amet consectetur adipisicing.
      </section>

      <section className="sectionPro grid gap-6 lg:grid-cols-3 p-4">
        {displayedItems.map((item, index) => (
          <section key={index} className="item flex flex-col lg:flex-row gap-6">
            <ProductCard
              id={i++}
              image={item.image}
              title={item.title}
              type={item.type}
              price={`$${item.price}`}
            />
          </section>
        ))}
      </section>

      <Slider />
    </div>
  );
}
