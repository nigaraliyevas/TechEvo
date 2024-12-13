//Components
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

//React Router
import { Outlet } from "react-router-dom";

const UserLayout = ({ exist, confirm }) => {
  return (
    <>
      <Header confirm={confirm} exist={exist} />
      <Outlet />
      <Footer />
    </>
  );
};

export default UserLayout;
