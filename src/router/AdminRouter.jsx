import { Route, Routes } from "react-router-dom";
import AdminLayout from "../layouts/admin/AdminLayout";
import Dashboard from "../pages/admin/DashboardPage/DashboardPage";
import OrdersPage from "../pages/admin/OrdersPage/OrdersPage"; // Assuming this is your orders page
import Delivery from "../pages/admin/Delivery/Delivery";
import Credit from "../pages/admin/Credit/Credit";
import Repair from "../pages/admin/Repair/Repair";
import ServiceDetails from "../pages/admin/ServiceDetails/ServiceDetails";

const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="adminDelivery" element={<Delivery />} />
        <Route path="adminRepair" element={<Repair />} />
        <Route path="adminCredit" element={<Credit />} />
        <Route path="adminServiceDetails" element={<ServiceDetails />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
