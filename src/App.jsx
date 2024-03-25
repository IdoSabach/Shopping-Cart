import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import NavBar from "./components/NavBar/NavBar";
import AppContent from "./components/AppContent/AppContent";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <AppContent />
        <Footer />
      </div>
    </Router>
  );
};

export default App;