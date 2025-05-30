import { Outlet } from "react-router-dom";
import AdminHeader from "../admin/components/AdminHeader";
import AdminSidebar from "../admin/components/AdminSidebar";

export default function AdminLayout() {
  return (
    <>
      <AdminHeader />
      <AdminSidebar />
      <Outlet />
    </>
  );
}
