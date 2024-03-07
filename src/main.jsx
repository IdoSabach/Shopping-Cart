import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import SearchPage from './SearchPage.jsx'
import PersonPage from './PersonPage.jsx'
import ShoppingCardIcon from './ShoppingCardPage.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
        element: <ShoppingCardIcon />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
