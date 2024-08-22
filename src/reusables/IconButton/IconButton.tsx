import styles from "./IconButton.module.css";

interface IconButtonProps {
  size?: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
  onClick?: () => void;
}

const IconButton: React.FC<Readonly<IconButtonProps>> = ({
  size = "lg",
  children,
  onClick,
}) => {
  let width = 0;
  switch (size) {
    case "sm":
      width = 30;
      break;
    case "md":
      width = 40;
      break;
    case "lg":
      width = 50;
      break;
    case "xl":
      width = 60;
      break;
  }

  return (
    <button className={styles.btn} onClick={onClick} style={{ width }}>
      {children}
    </button>
  );
};

export default IconButton;
