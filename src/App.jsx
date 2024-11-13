import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import UserRouter from "./router/UserRouter";
import { useState } from "react";
// import RoutesPage from "./pages/user/RouterPage/RoutesPage";
const App = () => {
  const [qiute,setQuite]=useState(false)
  const [confirm,setConfirm] = useState(false)
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<UserRouter qiute={qiute} setQuite={setQuite} confirm={confirm} setConfirm={setConfirm}/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
