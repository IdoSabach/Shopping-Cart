import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

import ShoppingCardIcon from "/images/shopping-bag.png";
import HomeIcon from "/images/home.png";
import ShopIcon from "/images/shop.png";
import useCartStore from "../../store/CardStore";
import logoIcon from "/images/logoRolexIcon.png";
import About from "/images/about.png";
import { motion } from "framer-motion";

const NavBar = ({ isOpen }) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isCardOpen, setIdCardOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const cart = useCartStore((state) => state.cart);

  const location = useLocation();

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

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleCardOpen = () => {
    setIdCardOpen(true);
    isOpen(isCardOpen);
  };
  // lg:w-11/12
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="sticky top-0 z-40 w-full">
      <header className="header flex p-4 justify-between items-center text-white bg-gradient-to-r from-green-950 from-5% to-green-900 to-50% lg:pr-12 lg:pl-12">
        <Link to="/" className="flex items-center">
          <motion.div className="flex" animate={{y:0}} initial={{y:-250}}>
            <img src={logoIcon} alt="logoIcon" className="h-7 lg:h-10" />
            <div className="logo-block text-2xl lg:text-4xl tracking-wide">
              Rolex
            </div>
          </motion.div>
        </Link>

        <div>
          {!isDesktop ? (
            <div className="navForMobile flex flex-row gap-4 items-center">
              <Link to="/">
                <img
                  src={HomeIcon}
                  alt="home"
                  className="w-7 md:w-12 filter invert "
                />
              </Link>
              <Link to="shop">
                <img
                  src={ShopIcon}
                  alt="shop"
                  className="w-7 md:w-12 filter invert"
                />
              </Link>
              <Link to="contact">
                <img
                  src={About}
                  alt="About"
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
            <div className="navForDesktop flex flex-row gap-10 items-center text-2xl">
              <Link to="/" className={activeLink === "/" ? "active" : ""}>
                <p>Home</p>
              </Link>
              <Link
                to="shop"
                className={activeLink === "/shop" ? "active" : ""}
              >
                <p>Shop</p>
              </Link>
              <Link
                to="contact"
                className={activeLink === "/contact" ? "active" : ""}
              >
                <p>Contact</p>
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
