import { useEffect } from "react";
import useCartStore from "../../store/CardStore.jsx";
import ProductInCard from "../../components/ProductInCard/ProductInCard.jsx";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./MenuModal.css";
import closeBtn from "/images/icons8-close-50.png";


const MenuModal = ({ isOpen, closeMenu }) => {
  const { cart } = useCartStore();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const numberWithCommas = (number) => {
    return number.toLocaleString();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const overlayClass = isOpen ? "overlayClassOpen" : "overlayClass";
  const modalClass = isOpen ? "menu text-black" : "menuClose";
  return (
    <div >
      <div className={overlayClass} onClick={closeMenu}></div>

      <div className={modalClass}>
        <div className="titleOfPage flex flex-col items-center h-full ">
          {cart.length === 0 ? (
            <section className="text-4xl p-4 flex flex-col text-center gap-6 mt-16">
              <button
                onClick={closeMenu}
                className="btnClose text-4xl absolute left-0 top-0"
              >
                <img src={closeBtn} alt="closeBtn" className="h-10" />
              </button>
              <div className="w-80">
              YOUR CART IS LOOKING EMPTY
              </div>
              
              <Link
                to="/shop"
                className="font-bold border border-green-900 animate-pulse rounded-xl p-2"
                onClick={closeMenu}
              >
                SHOP NOW
              </Link>
            </section>
          ) : (
            <div className="titleOfPage text-4xl lg:text-5xl flex flex-col items-center h-full justify-between">
              <div>
                <div className="flex bg-white w-full sticky top-0 items-center justify-center">
                  <button
                    onClick={closeMenu}
                    className="btnClose text-4xl absolute left-0"
                  >
                    <img src={closeBtn} alt="closeBtn" className="h-10" />
                  </button>
                  <div className="text-center">Your Items</div>
                </div>

                <div>
                  {cart.map((item, index) => (
                    <ProductInCard {...item} key={index} />
                  ))}
                </div>
              </div>

              <section className="sum flex items-center gap-4 p-4 bg-green-900 text-white justify-between w-full sticky bottom-0">
                <div className="sum flex gap-6 text-lg lg:text-xl">
                  <div>Items: {totalItems}</div>
                  <div>Total: {`$${numberWithCommas(totalPrice)}`}</div>
                </div>
                <a
                  className="btn bg-green-900 text-xl lg:text-2xl p-2 rounded-xl active:scale-95 text-white border border-white animate-pulse"
                  href="https://api.whatsapp.com/send/?phone=972537205476&text=אני מעוניין לבצע רכישה בחנות שלך.."
                >
                  Checkout
                </a>
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

MenuModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

export default MenuModal;
