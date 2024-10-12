import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import UserRouter from "./router/UserRouter";
// import RoutesPage from "./pages/user/RouterPage/RoutesPage";
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<UserRouter />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
