import styles from "./WideCard.module.css";

interface WideCardProps {
  children: React.ReactNode;
}

const WideCard: React.FC<Readonly<WideCardProps>> = ({ children }) => {
  return <div className={`${styles.wideCard} card`}>{children}</div>;
};

export { WideCard, type WideCardProps };
