import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoutesPage from "./Pages/RouterPage/RoutesPage";
import { Provider } from "react-redux";
import store from "./redux/Store";
const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/*" element={<RoutesPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
