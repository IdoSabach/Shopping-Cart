import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShopPage from "./views/ShopPage/ShopPage"
import ContactPage from "./views/ContactPage/ContactPage"
import HomePage from "./views/HomePage/HomePage";
import ProductPage from "./views/ProductPage/ProductPage";


const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <div>404 Not Found</div>,
    },
    {
      path:'/shop',
      element: <ShopPage />
    },
    {
      path:'/contact',
      element: <ContactPage />
    },
    {
      path: '/shop/:id',
      element: <ProductPage />
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
