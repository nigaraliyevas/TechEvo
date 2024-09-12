import { Route, Routes } from "react-router-dom";
import LayoutPages from "../LayoutPage/LayoutPages";
import Welcome from "../WelcomeRegisterPage/WelcomeRegisterPage";
import RegisterPage from "../RegisterPage/RegisterPage";

const RoutesPage = () => {
  return (
    <div>
      <LayoutPages>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </LayoutPages>
    </div>
  );
};

export default RoutesPage;
