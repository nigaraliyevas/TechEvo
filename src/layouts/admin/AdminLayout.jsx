import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

const AdminLayout = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="col-12 col-md-9 col-lg-10">
            <div className="row p-4">
              <Header />
              <div className="col-12">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
