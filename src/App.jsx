import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import UserRouter from "./router/UserRouter";
import { useState } from "react";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
// import RoutesPage from "./pages/user/RouterPage/RoutesPage";
const App = () => {
  const [exist,setExist]=useState(false)
  const [confirm,setConfirm] = useState(false)
  return (
    <Provider store={store}>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/*" element={<UserRouter exist={exist} setExist={setExist} confirm={confirm} setConfirm={setConfirm}/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
