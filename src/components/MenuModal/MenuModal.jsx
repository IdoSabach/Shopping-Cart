import React, { useState, useEffect } from "react";
import useCartStore from "../../store/CardStore.jsx";
import ProductInCard from "../../components/ProductInCard/ProductInCard.jsx";
import { Link } from "react-router-dom";

export default function MenuModal({ isOpen, closeMenu }) {
  const { cart } = useCartStore();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  // Define CSS classes for dark overlay and modal
  const overlayClass = isOpen ? "absolute inset-0 bg-black opacity-50 z-50" : "hidden";
  const modalClass = isOpen ? "menu bg-white text-black absolute right-0 z-50 h-full lg:w-2/5 w-11/12" : "hidden";

  return (
    <>
      {/* Dark overlay */}
      <div className={overlayClass} onClick={closeMenu}></div>

      {/* Menu modal */}
      <div className={modalClass}>
        <button onClick={closeMenu} className="btnClose text-4xl absolute p-2">
          X
        </button>
        <div className="titleOfPage flex flex-col items-center">
          {cart.length === 0 ? (
            <section className="text-4xl p-4 flex flex-col text-center gap-4">
              YOUR CART IS LOOKING EMPTY
              <Link to="/shopPage" className="font-bold" onClick={closeMenu}>
                SHOP NOW
              </Link>
            </section>
          ) : (
            <div className="titleOfPage text-5xl mt-4 flex flex-col items-center">
              <div className="text-center">Your Items</div>
              {/* Container for scrollable content */}
              <div className="overflow-y-auto max-h-60vh">
                {cart.map((item, index) => (
                  <ProductInCard
                    {...item}
                    key={index}
                  />
                ))}
              </div>
              <section className="sum flex items-center gap-4 p-4 bg-white text-black justify-between w-full absolute bottom-0">
                <div className="sum flex gap-8 text-2xl">
                  <div>Items: {totalItems}</div>
                  <div>Total: {`$${totalPrice.toFixed(2)}`}</div>
                </div>
                <button className="btn bg-green-400 text-2xl p-2 rounded-xl active:scale-95 ml-8">
                  Checkout
                </button>
              </section>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
