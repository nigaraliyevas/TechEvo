import { Route, Routes } from "react-router-dom";
import LayoutPages from "../LayoutPage/LayoutPages";
import Welcome from "../WelcomeRegisterPage/WelcomeRegisterPage";
import ForgetPassPage from "../ForgetPasswordPage/ForgetPassPage";
import PasswordReset from "../PasswordResetPage/PasswordReset";
import EnterPasswordPage from "../EnterPasswordPage/EnterPasswordPage";

const RoutesPage = () => {
  return (
    <div>
      <LayoutPages>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/forget" element={<ForgetPassPage />} />
          <Route path="/newpassword" element={<PasswordReset />} />
          <Route path="/enterpassword" element={<EnterPasswordPage />} />
        </Routes>
      </LayoutPages>
    </div>
  );
};

export default RoutesPage;
