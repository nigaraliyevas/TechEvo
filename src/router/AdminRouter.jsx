import { Route, Routes } from "react-router-dom";
import AdminLayout from "../layouts/admin/AdminLayout";
import Dashboard from "../pages/admin/DashboardPage/DashboardPage";
import OrdersPage from "../pages/admin/OrdersPage/OrdersPage";
import Delivery from "../pages/admin/Delivery/Delivery";
import Repair from "../pages/admin/Repair/Repair";
import ServiceDetails from "../pages/admin/ServiceDetails/ServiceDetails";
import StorePage from "../pages/admin/StorePage/StorePage";
import CreatePage from "../pages/admin/CreatePage/CreatePage";
import OrderDetailPage from "../pages/admin/OrderDetailPage/OrderDetailPage";
import Credit from "../Pages/admin/Credit/Credit";

const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />

        <Route path="orders" element={<OrdersPage />} />
        <Route path="store" element={<StorePage />} />
        <Route path="create" element={<CreatePage />} />

        {/* Burada orderId ilə bir səhifə göstərmək üçün: */}
        <Route path="detail/:orderId" element={<OrderDetailPage />} />


        <Route path="adminDelivery" element={<Delivery />} />
        <Route path="adminRepair" element={<Repair />} />
        <Route path="adminCredit" element={<Credit />} />
        <Route path="adminServiceDetails" element={<ServiceDetails />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;

