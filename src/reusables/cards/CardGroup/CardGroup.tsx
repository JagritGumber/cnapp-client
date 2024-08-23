import { BigCard } from "../BigCard";
import styles from "./CardGroup.module.css";
import { IoAdd } from "react-icons/io5";

interface CardGroupProps {
  size: "sm" | "md" | "lg";
  columns?: number;
  children?: React.ReactNode;
  title: string;
  subtitle?: string;
}

const CardGroup: React.FC<Readonly<CardGroupProps>> = ({
  columns = 3,
  children,
  title,
  subtitle,
  size = "lg",
}) => {
  const style = { "--columns": columns } as React.CSSProperties;

  return (
    <>
      <h2 className={styles.cardGroupHeader}>
        {title} {subtitle && <span>{subtitle}</span>}
      </h2>
      <div className={styles.cardGroup} style={style}>
        {children}
        {size === "lg" ? (
          <BigCard interactable={true}>
            <IoAdd />
          </BigCard>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export { CardGroup, type CardGroupProps };
