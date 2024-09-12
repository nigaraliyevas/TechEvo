import { Route, Routes } from "react-router-dom";
import LayoutPages from "../LayoutPage/LayoutPages";
import Welcome from "../WelcomeRegisterPage/WelcomeRegisterPage";

const RoutesPage = () => {
  return (
    <div>
      <LayoutPages>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </LayoutPages>
    </div>
  );
};

export default RoutesPage;
