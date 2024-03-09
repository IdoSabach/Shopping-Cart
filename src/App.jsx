import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import SearchIcon from "/images/search.png";
import PersonIcon from "/images/person.png";
import ShoppingCardIcon from "/images/shopping-bag.png";
import MenuIcon from "/images/menu.png";
import HomePage from "./HomePage/HomePage";
import MenuModal from "./MenuModal";

export default function App() {
  return (
    <div>
      <HomePage />
    </div>
  )
}
