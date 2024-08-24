import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loading}>
      <svg width="64px" height="48px">
        <polyline
          points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
          id={styles.back}
        ></polyline>
        <polyline
          points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
          id={styles.front}
        ></polyline>
      </svg>
    </div>
  );
};

export { Loader };
