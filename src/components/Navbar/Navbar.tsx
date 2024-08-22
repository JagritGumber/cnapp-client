import { Breadcrumb, Dropdown, IconButton } from "@/reusables";
import styles from "./Navbar.module.css";
import { useLocation } from "react-router-dom";
import { useMemo, useState } from "react";
import { FaBell, FaDatabase } from "react-icons/fa";

const Navbar: React.FC = () => {
  const { pathname } = useLocation();
  const unitSelectedState = useState(0);
  const modifiedPath = useMemo(() => pathname.split("/")?.slice(1), [pathname]);

  return (
    <header className={styles.header}>
      <Breadcrumb items={modifiedPath} />
      <div className={styles.spacer} />
      <Dropdown
        state={unitSelectedState}
        items={["Unit 1", "Unit 2"]}
        icon={<FaDatabase />}
      />
      <IconButton>
        <FaBell size={24} />
      </IconButton>
    </header>
  );
};

export default Navbar;
