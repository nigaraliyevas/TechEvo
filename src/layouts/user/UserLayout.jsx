//Components
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

//React Router
import { Outlet } from "react-router-dom";

<<<<<<< HEAD
const UserLayout = ({exist,confirm}) => {
    return (
        <>
            <Header confirm={confirm} exist={exist} />
            <Outlet />
            <Footer />
        </>
    )
}
=======
const UserLayout = ({ exist, confirm }) => {
  return (
    <>
      <Header confirm={confirm} exist={exist} />
      <Outlet />
      <Footer />
    </>
  );
};
>>>>>>> ee3b509e871f9176aa3c5855319f85df0efa66df

export default UserLayout;
