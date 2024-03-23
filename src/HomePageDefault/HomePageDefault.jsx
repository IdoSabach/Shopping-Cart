
import { useState } from "react";
import Footer from "../Footer/Footer";
import Slider from "../Slider/Slider.jsx"

export default function HomePageDefault() {
  return (
    <div className="homePageDefault flex flex-col items-center gap-3 p-4 text-center">
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
      <Slider />

      <Footer />
    </div>
  );
}
