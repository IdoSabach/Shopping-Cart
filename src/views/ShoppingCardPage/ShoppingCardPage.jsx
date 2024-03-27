import React, { useState, useEffect } from "react";
import useCartStore from "../../store/CardStore.jsx";
import ProductInCard from "../../components/ProductInCard/ProductInCard.jsx";
import { Link } from "react-router-dom";

export default function ShoppingCardIcon() {
  const [price, setPrice] = useState(0);
  const [items, setItems] = useState(0);

  const { cart } = useCartStore();

  // const { clearCart } = useCartStore((state) => ({
  //   clearCart: state.clearCart,
  // }));

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
      {cart.length === 0 ? (
        <section className="text-4xl p-4 flex flex-col text-center gap-4">
          YOUR CART IS LOOKING EMPTY
          <Link to="/shopPage" className="font-bold">
          SHOP NOW
          </Link>
        </section>
      ) : (
        <div className="titleOfPage text-5xl mt-4">Your Items</div>
      )}

      <div className="main lg:flex">
        <div>
          {cart.map((item, index) => (
            <ProductInCard
              image={item.image}
              title={item.title}
              price={item.price}
              key={index}
              id={item.id}
            />
          ))}
        </div>

        <section className="sum flex items-center gap-4 p-4 fixed bottom-0 left-0 right-0 bg-black text-white justify-center">
          {/* <div className="text text-3xl font-bold">Order summary</div> */}
          <div className="sum flex gap-8 text-2xl">
            {/* <div>Items: {items}</div> */}
            <div>Price: {`$${price.toFixed(2)}`}</div>
          </div>
          <button className="btn bg-green-400 text-2xl p-2 rounded-xl active:scale-95 ml-8">
            Checkout
          </button>
          {/* <button className="btn bg-black text-white text-2xl p-2 rounded-xl active:scale-95" onClick={clearCart}>
            Remove All
          </button> */}
        </section>
      </div>
    </div>
  );
}
