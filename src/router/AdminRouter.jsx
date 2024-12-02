import { Route, Routes } from "react-router-dom";
import AdminLayout from "../layouts/admin/AdminLayout";
import Dashboard from "../pages/admin/DashboardPage";
import Delivery from "../Pages/admin/Delivery/Delivery";
import Repair from "../Pages/admin/Repair/Repair";
import Credit from "../Pages/admin/Credit/Credit";

const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="adminDelivery" element={<Delivery />} />
        <Route path="adminRepair" element={<Repair />} />
        <Route path="adminCredit" element={<Credit />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
