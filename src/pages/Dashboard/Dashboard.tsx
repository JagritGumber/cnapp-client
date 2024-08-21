import { Action } from "@/reusables";
import styles from "./Dashboard.module.css";
import { FaBox } from "react-icons/fa";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className={styles.dashboard}>
        <div className={styles.header}>
          <div>
            <h1>Performance summary for this week</h1>
            <p>
              You can add more widgets and organize existing widgets from over
              there
              {" ->"}
            </p>
          </div>
          <div className={styles.spacer} />
          <Action onClick={() => {}}>
            <FaBox size={12} />
            Manage Widgets
          </Action>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
