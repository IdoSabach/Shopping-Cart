import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShopPage from "./views/ShopPage/ShopPage"
import ContactPage from "./views/ContactPage/ContactPage"
import ShoppingCardPage from "./views/ShoppingCardPage/ShoppingCardPage"
import HomePage from "./views/HomePage/HomePage";


const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <div>404 Not Found</div>,
    },
    {
      path:'shopPage',
      element: <ShopPage />
    },
    {
      path:'ContactPage',
      element: <ContactPage />
    },
    {
      path:'shoppingCardPage',
      element: <ShoppingCardPage />
    }

  ]);

  return <RouterProvider router={router} />;
};

export default Router;
