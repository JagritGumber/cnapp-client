import { IoMenuOutline } from "react-icons/io5";
import styles from "./Sidebar.module.css";
import { MotionConfig } from "framer-motion";
import { IconButton } from "@/reusables";
import { FaGear, FaHouse } from "react-icons/fa6";
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
      name: "Home",
      icon: <FaHouse size={24} />,
      link: "/app",
    },
    {
      name: "Settings",
      icon: <FaGear size={24} />,
      link: "/app/settings",
    },
  ];

  const updateQuery = (isShrink: boolean) => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set("isShrink", String(isShrink));
    navigate({
      search: `?${queryParams.toString()}`,
    });
  };

  const getNavLink = (link: string) => {
    const queryParams = new URLSearchParams(location.search);
    if (link === "/app") {
      // we need to remove the param projectId
      queryParams.delete("projectId");
      queryParams.delete("categoryId");
    }
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
