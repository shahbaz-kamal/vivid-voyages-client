import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <div>
      I am Admin Layout
      <Outlet></Outlet>
    </div>
  );
};

export default AdminLayout;
