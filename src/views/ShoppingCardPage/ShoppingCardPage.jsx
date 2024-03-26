import React, { useState, useEffect } from "react";
import useCartStore from "../../store/CardStore.jsx";

const productOne = "/imageSwiper/pink.jpg";
const productTwo = "/imageSwiper/blue.jpg";
const productThree = "/imageSwiper/moon.jpg";

// const ItemsForBag = [
//   {
//     id: 0,
//     image: productOne,
//     title: "Elegant sport shoe",
//     type: "Sport Men",
//     price: 159.99,
//   },
//   {
//     id: 1,
//     image: productTwo,
//     title: "Elegant sport shoe",
//     type: "Sport Men",
//     price: 159.99,
//   },
//   {
//     id: 2,
//     image: productThree,
//     title: "Elegant sport shoe",
//     type: "Sport Men",
//     price: 159.99,
//   },
// ];

export default function ShoppingCardIcon() {
  const [price, setPrice] = useState(0);
  const [items, setItems] = useState(0);

  const { cart } = useCartStore();
  
  const { clearCart } = useCartStore((state) => ({
    clearCart: state.clearCart
  }));

  useEffect(() => {
    let items = 0;
    let price = 0;
    for (let i = 0; i < cart.length; i++) {
      items++;
      price += cart[i].price;
    }
    setPrice(price);
    setItems(items);
  }, [cart]);

  return (
    <div className="titleOfPage flex flex-col items-center">
      <div className="titleOfPage text-5xl mt-4 mb-4">Your Items</div>

      <div className="main lg:flex">
        <div>
          {cart.map((item, index) => (
            <section
              key={index}
              className="item flex flex-col lg:flex-row m-8 gap-8"
            >
              <div>
                <img
                  src={item.image}
                  alt=""
                  className="image lg:w-80 rounded-xl"
                />
              </div>
              <div className="text text-2xl lg:text-2xl flex flex-col gap-2 lg:gap-2">
                <div className="title font-bold">{item.title}</div>
                <div className="type ">{item.type}</div>
                <div className="price font-bold">{item.price}</div>
              </div>
            </section>
          ))}
        </div>

        <section className="sum flex flex-col items-center border gap-4 p-4">
          <div className="text text-3xl font-bold">Order summary</div>
          <div className="sum flex gap-8 items-center text-2xl">
            <div>Items: {items}</div>
            {/* <div>Price: {`$${price}`}</div> */}
          </div>
          <button className="btn bg-green-400 text-xl p-1 rounded-xl active:scale-95">
            Checkout
          </button>
          <button className="btn bg-black text-white text-xl p-1 rounded-xl active:scale-95" onClick={clearCart}>
            Remove All
          </button>
        </section>
      </div>
    </div>
  );
}
