import { Route, Routes } from "react-router-dom";
import AdminLayout from "../layouts/admin/AdminLayout";
import Delivery from "../Pages/admin/Delivery/Delivery";
import Credit from "../Pages/admin/Credit/Credit";
import Dashboard from "../Pages/admin/DashboardPage";
import Repair from "../Pages/admin/Repair/Repair";
import ServiceDetails from "../Pages/admin/ServiceDetails/ServiceDetails";

const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="adminDelivery" element={<Delivery />} />
        <Route path="adminRepair" element={<Repair />} />
        <Route path="adminCredit" element={<Credit />} />
        <Route path="adminServiceDetails" element={<ServiceDetails />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
