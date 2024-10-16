//React Router
import { Route, Routes } from "react-router-dom";
//Routes
import HomePage from "../pages/user/HomePage/HomePage";
import UserLayout from "../layouts/user/UserLayout";
import LoginPage from "../pages/user/Login/LoginPage";
import ForgetPassPage from "../pages/user/ForgetPasswordPage/ForgetPassPage";
import RegisterPage from "../pages/user/Register/RegisterPage";
import PasswordReset from "../pages/user/PasswordResetPage/PasswordReset";
import EnterPasswordPage from "../pages/user/EnterPasswordPage/EnterPasswordPage";
import CategoryPage from "../pages/user/CategoryPage/CategoryPage";
import ProductPage from "../pages/user/ProductPage/ProductPage";
import BasketPage from "../pages/user/BasketPage/BasketPage";
import ConfirmBasket from "../pages/user/ConfirmBasketPage/ConfirmBasketPage";
import EmailVerificationPage from "../pages/user/Register/EmailVerificationPage";

const UserRouter = () => {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forget" element={<ForgetPassPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/newpassword" element={<PasswordReset />} />
        <Route path="/enterpassword" element={<EnterPasswordPage />} />
        <Route path="/pc" element={<CategoryPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/confirm" element={<ConfirmBasket />} />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
      </Route>
    </Routes>
  );
};
export default UserRouter;
