import styles from "./Modal.module.css";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  closeAction: () => void;
}

const Modal: React.FC<Readonly<ModalProps>> = ({
  children,
  isOpen,
  closeAction,
}) => {
  return (
    <>
      <div
        className={`${styles.wrapper} ${isOpen ? styles.open : ""}`}
        onClick={closeAction}
      ></div>
      <div className={`${styles.form} ${isOpen ? styles.open : ""}`}>
        {children}
      </div>
    </>
  );
};

export { Modal };
