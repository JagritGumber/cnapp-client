import styles from "./ConfirmPrompt.module.css";
import { Modal } from "@/reusables";

interface ConfirmPromptProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  isOpen: boolean;
}

const ConfirmPrompt: React.FC<Readonly<ConfirmPromptProps>> = ({
  message,
  isOpen,
  onCancel,
  onConfirm,
}) => {
  return (
    <>
      <Modal isOpen={isOpen} closeAction={onCancel}>
        <p className={styles.prompt}>{message}</p>
        <div className="flex">
          <button className={styles.confirmButton} onClick={onConfirm}>
            Yes
          </button>
          <button className={styles.cancelButton} onClick={onCancel}>
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
};

export { ConfirmPrompt };
