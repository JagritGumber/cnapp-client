import { useNavigate } from "react-router-dom";
import styles from "./Landing.module.css";
import landingMain from "@/assets/landingMain.svg";

const Landing: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.landing}>
      <img src={landingMain} alt="Two cats welcoming" />
      <button onClick={() => navigate("/app")}>Get Started</button>
    </div>
  );
};

export { Landing };
