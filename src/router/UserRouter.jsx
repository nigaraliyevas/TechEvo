//React Router
import { Route, Routes } from "react-router-dom";
//Routes
import HomePage from "../tempPages/user/HomePage/HomePage";
import UserLayout from "../layouts/user/UserLayout";
import LoginPage from "../tempPages/user/Login/LoginPage";
import ForgetPassPage from "../tempPages/user/ForgetPasswordPage/ForgetPassPage";
import RegisterPage from "../tempPages/user/Register/RegisterPage";
import PasswordReset from "../tempPages/user/PasswordResetPage/PasswordReset";
import EnterPasswordPage from "../tempPages/user/EnterPasswordPage/EnterPasswordPage";
import CategoryPage from "../tempPages/user/CategoryPage/CategoryPage";
import ProductPage from "../tempPages/user/ProductPage/ProductPage";
import BasketPage from "../tempPages/user/BasketPage/BasketPage";
import ConfirmBasket from "../tempPages/user/ConfirmBasketPage/ConfirmBasketPage";
import EmailVerificationPage from "../tempPages/user/Register/EmailVerificationPage";
import RegisterPage2 from "../tempPages/user/Register/RegisterPage2";
import AccountPage from "../tempPages/user/AccounPage/AccountPage";
import AllOrders from "../components/Orders/AllOrders";
const UserRouter = () => {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forget" element={<ForgetPassPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/registerpage2" element={<RegisterPage2 />} />
        <Route path="/activate" element={<EmailVerificationPage />} />
        <Route path="/newpassword" element={<PasswordReset />} />
        <Route path="/enterpassword" element={<EnterPasswordPage />} />
        <Route path="/pc" element={<CategoryPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/confirm" element={<ConfirmBasket />} />
        <Route path="/accountpage" element={<AccountPage />} />
        <Route path="/orders" element={<AllOrders />} />
      </Route>
    </Routes>
  );
};
export default UserRouter;
