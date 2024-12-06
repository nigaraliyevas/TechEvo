import { Route, Routes } from "react-router-dom";
import AdminLayout from "../layouts/admin/AdminLayout";
import Dashboard from "../pages/admin/DashboardPage/DashboardPage";
import OrdersPage from "../pages/admin/OrdersPage/OrdersPage"; // Assuming this is your orders page

const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashboard />} /> {/* Default Dashboard */}
        <Route path="orders" element={<OrdersPage />} /> {/* Orders Page */}
      </Route>
    </Routes>
  );
};

export default AdminRouter;
