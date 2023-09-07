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
import { UserProfile } from "./features/user/components/UserProfile";
import UserProfilePage from "./pages/UserProfilePage";
import { fetchLoggedInUserAsync } from "./features/user/userSlice";
import Logout from "./features/auth/components/Logout";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import AdminHome from "./pages/AdminHome";
import ProtectedAdmin from "./features/auth/components/ProtectedAdmin";
import AdminProductDetailPage from "./pages/AdminProductDetailPage";
import AdminProductFormPage from "./pages/AdminProductFormPage";
import AdminOrdersPage from "./pages/AdminOrdersPage";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_LEFT,
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Protected>
          <Home></Home>
        </Protected>
      </div>
    ),
  },
  {
    path: "/admin",
    element: (
      <div>
        <ProtectedAdmin>
          <AdminHome></AdminHome>
        </ProtectedAdmin>
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
    path: "/admin/product-detail/:id",
    element: (
      <div>
        <ProtectedAdmin>
          <AdminProductDetailPage></AdminProductDetailPage>
        </ProtectedAdmin>
      </div>
    ),
  },
  {
    path: "/admin/product-form/",
    element: (
      <div>
        <ProtectedAdmin>
          <AdminProductFormPage></AdminProductFormPage>
        </ProtectedAdmin>
      </div>
    ),
  },
  {
    path: "/admin/orders",
    element: (
      <div>
        <ProtectedAdmin>
          <AdminOrdersPage></AdminOrdersPage>
        </ProtectedAdmin>
      </div>
    ),
  },
  {
    path: "/admin/product-form/edit/:id",
    element: (
      <div>
        <ProtectedAdmin>
          <AdminProductFormPage></AdminProductFormPage>
        </ProtectedAdmin>
      </div>
    ),
  },
  {
    path: "/order-success/:id",
    element: (
      <div>
        <Protected>
          <OrderSuccessPage></OrderSuccessPage>
        </Protected>
      </div>
    ),
  },
  {
    path: "/orders",
    element: (
      <div>
        <Protected>
          <UserOrderPage></UserOrderPage>
        </Protected>
      </div>
    ),
  },
  {
    path: "/profile",
    element: (
      <div>
        <Protected>
          <UserProfilePage></UserProfilePage>
        </Protected>
      </div>
    ),
  },
  {
    path: "/logout",
    element: (
      <div>
        <Logout></Logout>
      </div>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <div>
        <ForgotPasswordPage></ForgotPasswordPage>
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
      dispatch(fetchLoggedInUserAsync(user.id));
    }
  }, [dispatch, user]);
  return (
    <div className="App">
      <Provider template={AlertTemplate} {...options}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
