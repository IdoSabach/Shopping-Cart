import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import SearchIcon from "/images/search.png";
import PersonIcon from "/images/person.png";
import ShoppingCardIcon from "/images/shopping-bag.png";
import MenuIcon from "/images/menu.png";
import MenuModal from "../MenuModal";

export default function HomePage(){
  const [isDesktop, setIsDesktop] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);


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

  return (
    <div className="App flex flex-col">
      <header className="header flex p-4 justify-between items-center">
        <Link to="/">
          <div className="logo-block md:text-4xl">Ido Sabach</div>
        </Link>
        {isDesktop ? <div>hi</div> : ""}

        <div className="icon-block flex gap-4">
          <Link to="/searchPage">
            <img src={SearchIcon} alt="Search" className="w-6 md:w-12" />
          </Link>
          <Link to="/personPage">
            <img src={PersonIcon} alt="Person" className="w-6 md:w-12" />
          </Link>
          <Link to="/shoppingCardPage">
            <img
              src={ShoppingCardIcon}
              alt="ShoppingCard"
              className="w-6 md:w-12"
            />
          </Link>
          {!isDesktop ? (
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
      <Outlet />
    </div>
  );
}