import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import PersonIcon from "/images/person.png";
import ShoppingCardIcon from "/images/shopping-bag.png";
import MenuIcon from "/images/menu.png";
import MenuModal from "../MenuModal/MenuModal";
import HomeIcon from "/images/home.png";
import ShopIcon from "/images/shop.png";
import AboutIcon from "/images/about.png";
import HomePageDefault from "../HomePageDefault/HomePageDefault";

export default function HomePage() {
  const [isDesktop, setIsDesktop] = useState(false);
  // const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isHome , setIsHome] = useState(true)

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

  const setHomePageClose = () => {
    setIsHome(false)
  }

  return (
    <div className="App flex flex-col">
      <header className="header flex p-4 justify-between items-center">
        {/* {!isDesktop ? (
          <img
            src={MenuIcon}
            alt="menu"
            className="w-7 md:w-12"
            onClick={() => setIsOpenMenu(true)}
          />
        ) : (
          ""
        )} */}
        <Link to="homePageDefault">
          <div className="logo-block md:text-4xl">Ido Sabach</div>
        </Link>

        <div>
          {!isDesktop ? (
            <div className="icon-block flex flex-row gap-3 items-center">
              <Link to="homePageDefault">
                <img src={HomeIcon} alt="home" className="w-7 md:w-12" />
              </Link>
              <Link to="shopPage">
                <img src={ShopIcon} alt="shop" className="w-7 md:w-12" />
              </Link>
              <Link to="ContactPage">
                <img src={PersonIcon} alt="Person" className="w-7 md:w-12" />
              </Link>
              {/* <Link to="aboutPage">
                <img src={AboutIcon} alt="about" className="w-7 md:w-12" />
              </Link> */}
              <Link to="shoppingCardPage">
                <img
                  src={ShoppingCardIcon}
                  alt="ShoppingCard"
                  className="w-7 md:w-12"
                />
              </Link>
            </div>
          ) : (
            <div className="icon-block flex flex-row gap-10 items-center text-2xl">
              <Link to="homePageDefault" onClick={setHomePageClose}>
                <p>Home</p>
              </Link>
              <Link to="shopPage" onClick={setHomePageClose}>
                <p>Shop</p>
              </Link>
              <Link to="ContactPage" onClick={setHomePageClose}>
                <p>Contact Us</p>
              </Link>
              {/* <Link to="aboutPage">
                <p>About</p>
              </Link> */}
              <Link to="shoppingCardPage" onClick={setHomePageClose}>
                <div className="flex items-center gap-2 bg-slate-700 text-white p-2 rounded-xl">
                  <img src={ShoppingCardIcon} alt="ShoppingCard" className="w-7 md:w-9 filter invert"/>
                  <p>Your Card</p>
                </div>
              </Link>
            </div>
          )}
        </div>
      </header>
      {/* <MenuModal isOpen={isOpenMenu} closeMenu={() => setIsOpenMenu(false)} /> */}
      <Outlet />
      {/* {isHome ? <HomePageDefault /> : ""} */}
      
    </div>
  );
}
