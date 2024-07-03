import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './Routes/RootLayout';
import ErrorPage from './Pages/ErrorPage';
import HomePage from './Pages/HomePage';
import MenuPage, {loader as menuPageLoader} from './Pages/MenuPage';
import OrderPage from './Pages/OrderPage';
import ContactPage from './Pages/ContactPage';
import CartPage, {loader as cartPageloader} from './Pages/cartPage';
import LoginPage from './Pages/Login';
import SignupPage from './Pages/SignupPage'; 
import store from './app/Store'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/menu",
        element: <MenuPage />,
        loader: menuPageLoader
      },
      {
        path: "/order",
        element: <OrderPage />
      },
      {
        path: "/contact",
        element: <ContactPage />
      },
      {
        path: "/menu/:menuId",
        element: <CartPage />,
        loader:  cartPageloader
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "login/signup",
        element: <SignupPage />
      }
    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
