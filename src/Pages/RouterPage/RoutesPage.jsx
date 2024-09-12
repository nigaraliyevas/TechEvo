import { Route, Routes } from "react-router-dom";
import LayoutPages from "../LayoutPage/LayoutPages";
import Welcome from "../WelcomeRegisterPage/WelcomeRegisterPage";
import ForgetPassPage from "../ForgetPasswordPage/ForgetPassPage";


const RoutesPage = () => {
  return (
    <div>
      <LayoutPages>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/forget" element={<ForgetPassPage />} />
        </Routes>
      </LayoutPages>
    </div>
  );
};

export default RoutesPage;
