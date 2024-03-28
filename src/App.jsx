import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import NavBar from "./components/NavBar/NavBar";
import AppContent from "./components/AppContent/AppContent";
import Footer from "./components/Footer/Footer";
import MenuModal from "./components/MenuModal/MenuModal";

const App = () => {
  const [isCardOpen, setIdCardOpen] = useState(false);

  const handleOpen = () => {
    setIdCardOpen(!isCardOpen);
  };

  return (
    <Router>
      <MenuModal isOpen={isCardOpen} closeMenu={handleOpen} />
      <div className="min-h-screen flex flex-col">
        <NavBar isOpen={handleOpen} />
        <AppContent />
      </div>
      <Footer />
    </Router>
  );
};

export default App;
