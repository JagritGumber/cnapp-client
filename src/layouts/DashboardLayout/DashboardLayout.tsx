import { Outlet } from "react-router-dom";
import styles from "./DashboardLayout.module.css";
import { Navbar, Sidebar } from "@/components";

const DashboardLayout: React.FC = () => {
  return (
    <div className={styles.dashboardLayout}>
      <Sidebar />
      <div className={styles.children}>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
