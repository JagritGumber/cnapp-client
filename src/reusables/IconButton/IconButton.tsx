import styles from "./IconButton.module.css";

interface IconButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const IconButton: React.FC<Readonly<IconButtonProps>> = ({
  children,
  onClick,
}) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default IconButton;
