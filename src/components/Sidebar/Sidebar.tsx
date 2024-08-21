import { IoMenuOutline } from "react-icons/io5";
import styles from "./Sidebar.module.css";
import { MotionConfig } from "framer-motion";
import { IconButton } from "@/reusables";
import { MdOutlineDashboard } from "react-icons/md";
import { FaChartLine, FaPencil, FaGear } from "react-icons/fa6";
import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isShrink, setIsShrink] = useState(
    new URLSearchParams(location.search).get("isShrink") === "true"
      ? true
      : false
  );

  const sidebarNavigations = [
    {
      name: "Dashboard",
      icon: <MdOutlineDashboard size={24} />,
      link: "/app/dashboard",
    },
    {
      name: "All Analytics",
      icon: <FaChartLine size={24} />,
      link: "/app/all-analytics",
    },
    {
      name: "Edit Data",
      icon: <FaPencil size={24} />,
      link: "/app/edit-data",
    },
    {
      name: "Settings",
      icon: <FaGear size={24} />,
      link: "/app/settings",
    },
  ];

  const updateQuery = (isShrink: boolean) => {
    navigate({
      search: `?isShrink=${isShrink}`,
    });
  };

  const getNavLink = (link: string) => {
    const queryParams = new URLSearchParams(location.search);
    const url = `${link}?${queryParams.toString()}`;
    return url;
  };

  return (
    <MotionConfig transition={{ duration: 0.3 }}>
      <aside
        className={`${styles.sidebar} poppins-bold font-xl ${
          isShrink && styles.shrink
        }`}
      >
        <header className={styles.header}>
          <IconButton
            onClick={() => {
              setIsShrink(!isShrink);
              updateQuery(!isShrink);
            }}
          >
            <IoMenuOutline size={32} />
          </IconButton>
          {!isShrink && <div className={styles.logo}>CloudSec</div>}
        </header>
        <ul>
          {sidebarNavigations.map(({ name, icon, link }, id) => (
            <NavLink to={getNavLink(link)} key={id}>
              <li>
                {icon}
                {!isShrink && name}
              </li>
            </NavLink>
          ))}
        </ul>
      </aside>
    </MotionConfig>
  );
};

export default Sidebar;
