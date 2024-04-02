import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';

import PersonIcon from "/images/person.png";
import ShoppingCardIcon from "/images/shopping-bag.png";
import HomeIcon from "/images/home.png";
import ShopIcon from "/images/shop.png";
import useCartStore from "../../store/CardStore";

const NavBar = ({ isOpen }) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isCardOpen, setIdCardOpen] = useState(false);
  const cart = useCartStore((state) => state.cart);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCardOpen = () => {
    setIdCardOpen(true);
    isOpen(isCardOpen);
  };

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <header className="header flex p-4 justify-between items-center text-white bg-gradient-to-r from-green-950 from-5% to-green-900 to-50%">
        <Link to="/">
          <div className="logo-block text-2xl lg:text-4xl">Lorem ipsum.</div>
        </Link>

        <div>
          {!isDesktop ? (
            <div className="icon-block flex flex-row gap-4 items-center">
              <Link to="/">
                <img
                  src={HomeIcon}
                  alt="home"
                  className="w-7 md:w-12 filter invert "
                />
              </Link>
              <Link to="shopPage">
                <img
                  src={ShopIcon}
                  alt="shop"
                  className="w-7 md:w-12 filter invert"
                />
              </Link>
              <Link to="ContactPage">
                <img
                  src={PersonIcon}
                  alt="Person"
                  className="w-7 md:w-12 filter invert"
                />
              </Link>
              <button onClick={handleCardOpen} className="relative">
                <img
                  src={ShoppingCardIcon}
                  alt="ShoppingCard"
                  className="w-7 md:w-12 filter invert"
                />
                <div className="absolute top-0 right-0 text-white rounded-full w-5 h-5 flex justify-center items-center text-xs -mt-2.5 -mr-2.5">
                  {totalQuantity}
                </div>
              </button>
            </div>
          ) : (
            <div className="icon-block flex flex-row gap-10 items-center text-2xl">
              <Link to="/">
                <p>Home</p>
              </Link>
              <Link to="shopPage">
                <p>Shop</p>
              </Link>
              <Link to="ContactPage">
                <p>Contact Us</p>
              </Link>
              <button onClick={handleCardOpen} className="relative">
                <div className="flex items-center gap-2 text-white p-2 rounded-xl border">
                  <img
                    src={ShoppingCardIcon}
                    alt="ShoppingCard"
                    className="w-7 md:w-9 filter invert"
                  />
                  <div className="absolute top-0 right-0 text-green-900 rounded-full w-7 h-7 flex justify-center items-center text-lg -mt-2.5 -mr-2.5 p-2 bg-white">
                    {totalQuantity}
                  </div>
                  <p>Your Bag</p>
                </div>
              </button>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

// NavBar.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
// };

export default NavBar;
