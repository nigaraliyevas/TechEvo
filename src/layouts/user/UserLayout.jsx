//Components
import Footer from "./Footer/Footer"
import Header from "./Header/Header"

//React Router
import { Outlet } from "react-router-dom"

const UserLayout = () => {
    return (
        <>
            {/* <Header /> */}
            <Outlet />
            {/* <Footer /> */}
        </>
    )
}

export default UserLayout
