import React from "react";
import { Routes ,Route } from 'react-router-dom';
import HomePage from "../../views/HomePage/HomePage";
import ShopPage from "../../views/ShopPage/ShopPage";
import ContactPage from "../../views/ContactPage/ContactPage";
import ProductPage from "../../views/ProductPage/ProductPage";

export default function AppContent() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/shopPage" element={<ShopPage />} />
      <Route path="/contactPage" element={<ContactPage />} />
      <Route path="/item/:id" element={<ProductPage />} />
    </Routes>
  );
}
