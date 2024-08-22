import { Action } from "@/reusables";
import styles from "./Dashboard.module.css";
import { FaBox } from "react-icons/fa";
import { BigCard, CardGroup } from "@/reusables/cards";
import {
  BigWidgetBarChart,
  BigWidgetLineChart,
  BigWidgetPieChart,
} from "@/reusables/widgets";

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <div>
          <h1>Performance summary</h1>
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
      <CardGroup title="CSPM" subtitle="Cloud Security Platform">
        <BigWidgetPieChart />
        <BigWidgetBarChart />
        <BigWidgetLineChart />
      </CardGroup>
    </div>
  );
};

export default Dashboard;
