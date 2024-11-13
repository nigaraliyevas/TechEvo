//Components
import Footer from "./Footer/Footer"
import Header from "./Header/Header"

//React Router
import { Outlet } from "react-router-dom"

const UserLayout = ({qiute,confirm}) => {
    return (
        <>
            <Header confirm={confirm} qiute={qiute} />
            <Outlet />
            <Footer />
        </>
    )
}

export default UserLayout
