import { Counter } from "./features/counter/Counter";
import React from "react";
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
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
