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
import RegisterPage2 from "../pages/user/Register/RegisterPage2";
import AccountPage from "../pages/user/AccounPage/AccountPage";
import AllOrders from "../components/Orders/AllOrders";
import { useEffect } from "react";
import { setTokens } from "../redux/slices/TokenSlice";
import { useDispatch } from "react-redux";
import IdealPcPage from "../Pages/user/IdealPcPage/IdealPcPage";

const UserRouter = ({ setConfirm, confirm, setExist, exist }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadTokensFromStorage = () => {
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");

      if (accessToken && refreshToken) {
        dispatch(setTokens({ accessToken, refreshToken }));
      }
    };

    loadTokensFromStorage();
  }, [dispatch]);
  return (
    <Routes>
      <Route element={<UserLayout confirm={confirm} exist={exist} />}>
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

        <Route
          path="/accountpage"
          element={
            <AccountPage
              setConfirm={setConfirm}
              setExist={setExist}
              confirm={confirm}
              exist={exist}
            />
          }
        />
        <Route path="/accountpage" element={<AccountPage />} />
        <Route path="/idealpc" element={<IdealPcPage />} />

        <Route
          path="/accountpage"
          element={
            <AccountPage
              setConfirm={setConfirm}
              setExist={setExist}
              confirm={confirm}
              exist={exist}
            />
          }
        />
        <Route path="/orders" element={<AllOrders />} />
      </Route>
    </Routes>
  );
};
export default UserRouter;
