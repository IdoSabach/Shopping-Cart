import { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import items from "../../data/Items.js";
import { motion, AnimatePresence } from "framer-motion";

const arrFilters = ["All", "Size 31", "Size 36", "Gold", "White Gold"];

export default function ShopPage() {
  const [activeFilter, setActiveFilter] = useState("");
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const [filteredItems, setFilteredItems] = useState(items);
  const [openFilterBox, setOpenFilterBox] = useState(false);

  const handleClick = (type, index, filter) => {
    setActiveFilter(type);
    setActiveButtonIndex(index);
    const filtered = items.filter((item) => item.filter.includes(filter));
    setFilteredItems(filtered);
    // setOpenFilterBox(false)
  };

  const handleOpenFilterBox = () => {
    setOpenFilterBox(!openFilterBox);
  };

  const numberWithCommas = (number) => {
    return number.toLocaleString();
  };

  return (
    <div className="shop flex flex-col items-center w-full p-4">
      <section className="title text-3xl lg:text-5xl mb-4 mt-8 lg:mb-12 lg:mt-12 text-center">
        The Collection Rolex watches
      </section>
      <section className="flex flex-col items-center gap-2 mb-3 w-full lg:w-auto">
        <motion.button
          className="btnOfFilter text-2xl font-bold flex w-full items-center justify-between gap-4"
          onClick={handleOpenFilterBox}
        >
          <p>Sort by category</p>

          <button /*onClick={handleOpenFilterBox}*/>
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
        </motion.button>
        <AnimatePresence>
          {openFilterBox && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
              className="filters grid grid-cols-3 lg:grid-cols-5 gap-1 "
            >
              {arrFilters.map((type, index) => (
                <button
                  key={index}
                  className={`text-xl p-2 rounded-md bg-slate-100 text-black active:scale-95  ${
                    activeButtonIndex === index
                      ? "text-black font-extrabold"
                      : ""
                  }`}
                  onClick={() => handleClick(type, index, type)}
                >
                  {type}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      <section className="sectionPro grid gap-6 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <section
            key={item.id}
            className=" paragraph item flex flex-col lg:flex-row gap-6"
          >
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
    </div>
  );
}
