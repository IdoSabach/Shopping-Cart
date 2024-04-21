import { Link } from "react-router-dom";
import Slider from "../../components/Slider/Slider.jsx";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import SwiperAppDown from "../../components/SwiperDown/SwiperAppDown.jsx";
import SwiperAppUp from "../../components/SwiperUp/SwiperAppUp.jsx";
import items from "../../data/Items.js";

export default function HomePage() {
  const displayedItems = items.slice(0, 3);
  const numberWithCommas = (number) => {
    return number.toLocaleString();
  };
  return (
    <div className="homePageDefault flex flex-col items-center gap-3 text-center ">
      <section className="sectionOne flex flex-col items-center gap-6 p-2 mt-8">
        <header className="text-xl rounded-3xl p-1 pr-4 pl-4 md:text-3xl border border-green-900">
          Welcome To Rolex.
        </header>
        <nav className="subHeader text-2xl md:text-4xl">
        Explore the Rolex collection
        </nav>
        <Link
          to="/shop"
          className="btn-shop p-3 text-lg bg-green-900 text-white rounded-3xl md:text-x active:scale-95 hover:scale-110 ease-in duration-200 "
        >
          Shop Now
        </Link>
      </section>

      <SwiperAppUp />

      <section className="text-2xl mt-8 mb-8 lg:mb-20 lg:mt-20 w-4/5 lg:w-2/3">
      The Rolex collection offers a wide range of prestigious, high-precision timepieces, from Professional to Classic models to suit any wrist
      </section>

      <section className="sectionPro grid gap-6 lg:grid-cols-3 p-4">
        {displayedItems.map((item) => (
          <section key={item.id} className="item flex flex-col lg:flex-row gap-6">
            <ProductCard
              id={item.id}
              image={item.image}
              title={item.title}
              type={item.type}
              price={`$${numberWithCommas(item.price)}`}
            />
          </section>
        ))}
        
      </section>
      <Link
          to="/shop"
          className="btn-shop p-4 text-2xl bg-green-900 text-white rounded-3xl md:text-x active:scale-95 hover:scale-110 lg:m-10 ease-in duration-200"
        >
          Shop Now
        </Link>


      {/* <Slider /> */}
      <SwiperAppDown />
    </div>
  );
}
