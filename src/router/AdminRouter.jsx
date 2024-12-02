//React Router
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
//Routes
const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};
export default AdminRouter;
