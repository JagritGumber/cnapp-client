import styles from "./NotFound.module.css";
import notFoundSvg from "@/assets/notFoundMain.svg";

const NotFound: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src={notFoundSvg} alt="Not Found" />
      <h1>Not Found</h1>
      <button onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
};

export { NotFound };
