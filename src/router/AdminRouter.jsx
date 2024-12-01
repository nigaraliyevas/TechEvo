import { Route, Routes } from "react-router-dom";
import AdminLayout from "../layouts/admin/AdminLayout";
import Dashboard from "../pages/admin/DashboardPage";
import Services from "../Pages/admin/Services/Services";

const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="adminServices" element={<Services />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
