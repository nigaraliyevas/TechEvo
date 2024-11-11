import { Route, Routes } from "react-router-dom";
import LayoutPages from "../LayoutPage/LayoutPages";
import Login from "../LoginPage/LoginPage";
import ForgetPassPage from "../ForgetPasswordPage/ForgetPassPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import HomePage from "../HomePage/HomePage";
import PasswordReset from "../PasswordResetPage/PasswordReset";
import EnterPasswordPage from "../EnterPasswordPage/EnterPasswordPage";
import PCPage from "../PCPage/PCPage";
import ProductPage from "../ProductPage/ProductPage";
import BasketPage from "../BasketPage/BasketPage";

const RoutesPage = () => {
  return (
    <div>
      <LayoutPages>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget" element={<ForgetPassPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/newpassword" element={<PasswordReset />} />
          <Route path="/enterpassword" element={<EnterPasswordPage />} />
          <Route path="/pc" element={<PCPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/basket" element={<BasketPage />} />
    
        </Routes>
      </LayoutPages>
    </div>
  );
};

export default RoutesPage;
