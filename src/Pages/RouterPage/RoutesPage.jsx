import { Route, Routes } from "react-router-dom";
import LayoutPages from "../LayoutPage/LayoutPages";
import WelcomeRegisterPage from "../WelcomeRegisterPage/WelcomeRegisterPage";

const RoutesPage = () => {
  return (
    <div>
      <LayoutPages>
        <Routes>
          <Route path="/login" element={<WelcomeRegisterPage />} />
        </Routes>
      </LayoutPages>
    </div>
  );
};

export default RoutesPage;
