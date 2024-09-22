import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoutesPage from "./Pages/RouterPage/RoutesPage";
import store from "./redux/Store";
import { Provider } from "react-redux";
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<RoutesPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
