

import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoutesPage from "./Pages/RouterPage/RoutesPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<RoutesPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

