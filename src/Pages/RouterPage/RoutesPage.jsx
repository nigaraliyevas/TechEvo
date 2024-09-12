import { Route, Routes } from "react-router-dom";
import LayoutPages from "../LayoutPage/LayoutPages";
import Welcome from "../WelcomeRegisterPage/WelcomeRegisterPage";
import ForgetPassPage from "../ForgetPasswordPage/ForgetPassPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import RegisterPage2 from "../RegisterPage/RegisterPage2";

const RoutesPage = () => {
  return (
    <div>
      <LayoutPages>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/forget" element={<ForgetPassPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/register2" element={<RegisterPage2 />} />
        </Routes>
      </LayoutPages>
    </div>
  );
};

export default RoutesPage;
