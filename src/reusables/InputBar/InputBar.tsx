import styles from "./InputBar.module.css";
import { IoSearchOutline, IoClose, IoCheckmark } from "react-icons/io5";

interface InputBarProps {
  fieldType: "input" | "search";
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

const InputBar: React.FC<Readonly<InputBarProps>> = ({
  fieldType,
  onSubmit,
}) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <button type="submit">
        {fieldType === "search" ? (
          <IoSearchOutline size={16} />
        ) : (
          <IoCheckmark size={16} />
        )}
      </button>
      <input
        type="text"
        placeholder="Search"
        className={styles.input}
        name="input"
      />
      <button className={styles.reset} type="reset">
        <IoClose size={16} />
      </button>
    </form>
  );
};

export default InputBar;
