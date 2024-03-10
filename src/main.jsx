import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import ContactPage from './ContactPage/ContactPage.jsx'
import ShoppingCardPage from './ShoppingCardPage/ShoppingCardPage.jsx'
import HomePage from './HomePage/HomePage.jsx'
import About from './AboutPage/About.jsx'
import HomePageDefault from './HomePageDefault/HomePageDefault.jsx'
import ShopPage from './ShopPage/ShopPage.jsx'


const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <App />,
  //   errorElement: <div>404 Not Found</div>,
  // },
  {
    path:'/',
    element: <HomePage />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        path:'homePageDefault',
        element: <HomePageDefault />,
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
        path:'aboutPage',
        element: <About />
      },
      {
        path:'shoppingCardPage',
        element: <ShoppingCardPage />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
