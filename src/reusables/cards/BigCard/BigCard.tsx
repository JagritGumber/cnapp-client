
import styles from "./BigCard.module.css";

interface BigCardProps {
  title?: string;
  children?: React.ReactNode;
  interactable?: boolean;
  onClick?: () => void;
}

const BigCard: React.FC<Readonly<BigCardProps>> = ({
  children,
  title,
  interactable = false,
  onClick,
}) => {
  return (
    <div
      className={`${styles.bigCard} card`}
      onClick={interactable ? onClick : undefined}
    >
      {title && (
        <div className={styles.header}>
          {title}
        </div>
      )}
      <div
        className={`${styles.children} ${
          interactable ? styles.interactable : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export { BigCard, type BigCardProps };
