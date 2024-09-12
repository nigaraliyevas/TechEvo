import { Route, Routes } from "react-router-dom";
import LayoutPages from "../LayoutPage/LayoutPages";
import Welcome from "../WelcomeRegisterPage/WelcomeRegisterPage";
import ForgetPassPage from "../ForgetPasswordPage/ForgetPassPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import HomePage from "../HomePage/HomePage";
const RoutesPage = () => {
  return (
    <div>
      <LayoutPages>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/forget" element={<ForgetPassPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </LayoutPages>
    </div>
  );
};

export default RoutesPage;
