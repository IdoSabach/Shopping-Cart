import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import React, { useState, useEffect } from "react";

const productOne = "/imageSwiper/pink.jpg";
const productTwo = "/imageSwiper/blue.jpg";
const productThree = "/imageSwiper/moon.jpg";

const Items = [
  {
    id: 1,
    image: productOne,
    title: "Elegant sport shoe",
    type: "Sport Men",
    price: 159.99,
  },
  {
    id: 2,
    image: productTwo,
    title: "Elegant sport shoe",
    type: "Sport Men",
    price: 159.99,
  },
  {
    id: 3,
    image: productThree,
    title: "Elegant sport shoe",
    type: "Sport Men",
    price: 159.99,
  },
];

export default function ShoppingCardIcon() {
  const [price, setPrice] = useState(0);
  const [items, setItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;
    for (let i = 0; i < Items.length; i++) {
      items++;
      price += Items[i].price;
    }
    setPrice(items);
    setItems(price);
  }, [Items]);

  return (
    <div className="titleOfPage flex flex-col items-center">
      <div className="titleOfPage text-5xl mt-4 mb-4">Your Items</div>

      <div className="main lg:flex">
        <div>
          {Items.map((item, index) => (
            <Link key={index} to={`/item/${index}`}>
              <section
                key={index}
                className="item flex flex-col lg:flex-row m-8 gap-8"
              >
                <div>
                  <img
                    src={item.image}
                    alt=""
                    className="image w-80 lg:w-60 rounded-xl"
                  />
                </div>
                <div className="text text-2xl lg:text-2xl flex flex-col gap-2 lg:gap-2">
                  <div className="title font-bold">{item.title}</div>
                  <div className="type ">{item.type}</div>
                  <div className="price font-bold">{item.price}</div>
                </div>
              </section>
            </Link>
          ))}
        </div>

        <section className="sum flex flex-col items-center border gap-4 p-4">
          <div className="text text-3xl font-bold">Order summary</div>
          <div className="sum flex gap-8 items-center text-2xl">
            <div>Items: {items}</div>
            <div>Price: {price}</div>
          </div>
          <button className="btn bg-green-400 text-xl p-1 rounded-xl active:scale-95">
            Checkout
          </button>
        </section>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
