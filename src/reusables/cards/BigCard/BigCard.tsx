import IconButton from "@/reusables/IconButton/IconButton";
import styles from "./BigCard.module.css";
import { IoClose } from "react-icons/io5";

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
          <IconButton size="sm">
            <IoClose />
          </IconButton>
        </div>
      )}
      <div className={interactable ? styles.interactable : ""}>{children}</div>
    </div>
  );
};

export { BigCard, type BigCardProps };
