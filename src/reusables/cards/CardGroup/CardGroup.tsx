import { useAppDispatch } from "@/store";
import { BigCard } from "../BigCard";
import styles from "./CardGroup.module.css";
import { IoAdd } from "react-icons/io5";
import { toggleWidgetForm } from "@/features";
import { useNavigate } from "react-router-dom";
import { useQueryParams } from "@/hooks";

interface CardGroupProps {
  size: "sm" | "md" | "lg";
  columns?: number;
  children?: React.ReactNode;
  title: string;
  subtitle?: string;
  categoryId: string;
}

const CardGroup: React.FC<Readonly<CardGroupProps>> = ({
  columns = 3,
  children,
  title,
  subtitle,
  size = "lg",
  categoryId,
}) => {
  const style = { "--columns": columns } as React.CSSProperties;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const queryParams = useQueryParams();

  const getNavigationUrl = () => {
    queryParams.set("categoryId", categoryId);
    return `/app/dashboard?${queryParams.toString()}`;
  };

  return (
    <>
      <h2 className={styles.cardGroupHeader}>
        {title} {subtitle && <span>{subtitle}</span>}
      </h2>
      <div className={styles.cardGroup} style={style}>
        {children}
        {size === "lg" ? (
          <BigCard
            interactable={true}
            onClick={() => {
              navigate(getNavigationUrl());
              dispatch(toggleWidgetForm());
            }}
          >
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
