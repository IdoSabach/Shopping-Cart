import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import SearchPage from './SearchPage.jsx'
import PersonPage from './PersonPage.jsx'
import ShoppingCardPage from './ShoppingCardPage/ShoppingCardPage.jsx'
import HomePage from './HomePage/HomePage.jsx'

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
        path:'searchPage',
        element: <SearchPage />,
      },
      {
        path:'personPage',
        element: <PersonPage />
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
