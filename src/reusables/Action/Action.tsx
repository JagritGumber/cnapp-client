import styles from "./Action.module.css";

interface ActionProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Action: React.FC<Readonly<ActionProps>> = ({ children, onClick }) => {
  return (
    <button className={styles.action} onClick={onClick}>
      {children}
    </button>
  );
};

export default Action;
