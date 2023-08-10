import { Counter } from "./features/counter/Counter";
import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./features/auth/components/Signup";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Protected from "./features/auth/components/Protected";
import { useDispatch, useSelector } from "react-redux";
import { fetchItemsByUserIdAsync } from "./features/cart/cartSlice";
import { selectLoggedInUser } from "./features/auth/authSlice";
import PageNotFound from "./pages/404";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import UserOrderPage from "./pages/UserOrderPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        {" "}
        <Protected>
          <Home></Home>
        </Protected>
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <div>
        <LoginPage></LoginPage>
      </div>
    ),
  },
  {
    path: "/signup",
    element: (
      <div>
        <SignupPage></SignupPage>
      </div>
    ),
  },
  {
    path: "/cart",
    element: (
      <div>
        <Protected>
          <CartPage></CartPage>
        </Protected>
      </div>
    ),
  },
  {
    path: "/checkout",
    element: (
      <div>
        <Protected>
          <Checkout></Checkout>
        </Protected>
      </div>
    ),
  },
  {
    path: "/product-detail/:id",
    element: (
      <div>
        <Protected>
          <ProductDetailsPage></ProductDetailsPage>
        </Protected>
      </div>
    ),
  },
  {
    path: "/order-success/:id",
    element: (
      <div>
        <OrderSuccessPage></OrderSuccessPage>
      </div>
    ),
  },
  {
    path: "/orders",
    element: (
      <div>
        <UserOrderPage></UserOrderPage>
      </div>
    ),
  },
  {
    path: "*",
    element: (
      <div>
        <PageNotFound></PageNotFound>
      </div>
    ),
  },
]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUserIdAsync(user.id));
    }
  }, [dispatch, user]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
