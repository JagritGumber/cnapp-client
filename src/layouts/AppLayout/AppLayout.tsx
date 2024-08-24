import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.css";
import { ManagePanel, Navbar, Sidebar } from "@/components";
import { WidgetForm } from "@/components";

const AppLayout: React.FC = () => {
  return (
    <div className={styles.dashboardLayout}>
      <Sidebar />
      <WidgetForm />
      <div className={styles.wrapper}>
        <Navbar />
        <div className={styles.children}>
          <Outlet />
          <ManagePanel />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
