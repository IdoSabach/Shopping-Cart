import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import SearchIcon from "/images/search.png";
import PersonIcon from "/images/person.png";
import ShoppingCardIcon from "/images/shopping-bag.png";
import MenuIcon from "/images/menu.png";
import HomePage from "./HomePage";
import MenuModal from "../public/MenuModal";

export default function App() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [showHomePage, setShowHomePage] = useState(true);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleLinkClick = () => {
    setShowHomePage(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };
    handleResize();
    setShowHomePage(true);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App flex flex-col">
      <header className="header flex p-4 justify-between items-center">
        <Link to="/" onClick={() => setShowHomePage(true)}>
          <div className="logo-block md:text-4xl">Ido Sabach</div>
        </Link>

        {isLargeScreen ? <div>hi</div> : ""}

        <div className="icon-block flex gap-4">
          <Link to="/searchPage" onClick={handleLinkClick}>
            <img src={SearchIcon} alt="Search" className="w-6 md:w-12" />
          </Link>
          <Link to="/personPage" onClick={handleLinkClick}>
            <img src={PersonIcon} alt="Person" className="w-6 md:w-12" />
          </Link>
          <Link to="/shoppingCardPage" onClick={handleLinkClick}>
            <img
              src={ShoppingCardIcon}
              alt="ShoppingCard"
              className="w-6 md:w-12"
            />
          </Link>
          {!isLargeScreen ? (
            <img
              src={MenuIcon}
              alt="menu"
              className="w-6 md:w-12"
              onClick={() => setIsOpenMenu(true)}
            />
          ) : (
            ""
          )}
        </div>
      </header>
      <MenuModal isOpen={isOpenMenu} closeMenu={() => setIsOpenMenu(false)}/>
      {showHomePage ? <HomePage /> : <Outlet />}
    </div>
  );
}
