import { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import Items from "../../data/Items.js";

const arrFilters = ["All", "Size 31", "Size 36", "Gold", "White Gold"];

export default function ShopPage() {
  const [activeFilter, setActiveFilter] = useState("");
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const [filteredItems, setFilteredItems] = useState(Items);
  const [openFilterBox, setOpenFilterBox] = useState(false);
  let i = 0;

  const handleClick = (type, index, filter) => {
    setActiveFilter(type);
    setActiveButtonIndex(index);
    const filtered = Items.filter((item) => item.filter.includes(filter));
    setFilteredItems(filtered);
  };

  const handleOpenFilterBox = () => {
    setOpenFilterBox(!openFilterBox);
  };

  return (
    <div className="shop flex flex-col items-center w-full p-4">
      <section className="title text-3xl lg:text-5xl mb-4 mt-8 lg:mb-12 lg:mt-12 text-center">
        The Collection Rolex watches
      </section>
      <section className="flex flex-col items-center gap-2 mb-3 w-full">
        <div className="text-2xl font-bold flex w-full items-center justify-between gap-4">
          <p>Sort by category</p>

          <button onClick={handleOpenFilterBox}>
            {openFilterBox ? (
              <img
                src="/images/icons8-minus-50.png"
                alt="plus"
                className="h-6"
              />
            ) : (
              <img
                src="/images/icons8-plus-50.png"
                alt="plus"
                className="h-6"
              />
            )}
          </button>
        </div>
        {openFilterBox ? (
          <div className="filters grid grid-cols-3 lg:grid-cols-6 gap-1 ">
            {arrFilters.map((type, index) => (
              <button
                key={index}
                className={`text-xl p-2 rounded-md bg-green-900 text-black active:scale-95  ${
                  activeButtonIndex === index ? "text-white" : ""
                }`}
                onClick={() => handleClick(type, index, type)}
              >
                {type}
              </button>
            ))}
          </div>
        ) : (
          ""
        )}
      </section>
      <section className="sectionPro grid gap-6 lg:grid-cols-3">
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
