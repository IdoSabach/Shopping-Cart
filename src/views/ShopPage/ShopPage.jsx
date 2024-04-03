import { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import Items from "../../data/Items.js";

const arrFilters = ["All","Size 31", "Size 36", "Gold", "White Gold"];

export default function ShopPage() {
  const [activeFilter, setActiveFilter] = useState("");
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const [filteredItems, setFilteredItems] = useState(Items);
  let i = 0;

  const handleClick = (type, index, filter) => {
    setActiveFilter(type);
    setActiveButtonIndex(index);
    const filtered = Items.filter(item => item.filter.includes(filter));
    setFilteredItems(filtered);
  };

  return (
    <div className="shop flex flex-col items-center">
      <section className="title text-3xl lg:text-5xl mb-4 mt-8 lg:mb-12 lg:mt-12 text-center">
        The Collection Rolex watches
      </section>
      <section className="flex flex-col items-center gap-2">
        <div className="text-2xl font-bold">Sort by category</div>
        <div className="filters grid grid-cols-3 gap-1 ">
          {arrFilters.map((type, index) => (
            <button
              key={index}
              className={`text-xl p-2 rounded-md bg-green-900 text-black active:scale-95  ${
                activeButtonIndex === index ?  "text-white bg-black" : ""
              }`}
              onClick={() => handleClick(type, index, type)}
            >
              {type}
            </button>
          ))}
        </div>
      </section>
      <section className="sectionPro grid gap-6 lg:grid-cols-3 p-4">
        {filteredItems.map((item, index) => (
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
    </div>
  );
}
