import { Route, Routes } from "react-router-dom";
import AdminLayout from "../layouts/admin/AdminLayout";
import Dashboard from "../pages/admin/DashboardPage";

const AdminRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AdminLayout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/another" element={<Dashboard />} /> */}
            </Routes>
          </AdminLayout>
        }
      />
    </Routes>
  );
};

export default AdminRouter;