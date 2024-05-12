import { Routes, Route } from "react-router-dom";
import HomePage from "../../views/HomePage/HomePage";
import ShopPage from "../../views/Shop/Shop";
import ContactPage from "../../views/ContactPage/ContactPage";
import ProductPage from "../../views/ProductPage/ProductPage";

export default function AppContent() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/shop/:id" element={<ProductPage />} />
    </Routes>
  );
}
