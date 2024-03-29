import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PersonIcon from "/images/person.png";
import ShoppingCardIcon from "/images/shopping-bag.png";
import HomeIcon from "/images/home.png";
import ShopIcon from "/images/shop.png";

export default function NavBar( { isOpen }) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isCardOpen , setIdCardOpen] = useState(false)

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
    setIdCardOpen(true)
    isOpen(isCardOpen)
  }

  return (
    <div>
      <header className="header flex p-4 justify-between items-center">
        <Link to="/">
          <div className="logo-block text-2xl lg:text-4xl">Lorem ipsum.</div>
        </Link>

        <div>
          {!isDesktop ? (
            <div className="icon-block flex flex-row gap-3 items-center">
              <Link to="/">
                <img src={HomeIcon} alt="home" className="w-7 md:w-12" />
              </Link>
              <Link to="shopPage">
                <img src={ShopIcon} alt="shop" className="w-7 md:w-12" />
              </Link>
              <Link to="ContactPage">
                <img src={PersonIcon} alt="Person" className="w-7 md:w-12" />
              </Link>
              <button onClick={handleCardOpen}>
                <img
                  src={ShoppingCardIcon}
                  alt="ShoppingCard"
                  className="w-7 md:w-12"
                />
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
              <button onClick={handleCardOpen}>
                <div className="flex items-center gap-2 bg-slate-700 text-white p-2 rounded-xl">
                  <img
                    src={ShoppingCardIcon}
                    alt="ShoppingCard"
                    className="w-7 md:w-9 filter invert"
                  />
                  <p>Your Bag</p>
                </div>
              </button>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
