import styles from "./InputBar.module.css";

interface InputBarProps {
  label?: string;
  value: string;
  name: string;
  type: string;
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  required: boolean;
}

const InputBar: React.FC<Readonly<InputBarProps>> = ({
  label,
  value,
  name,
  type,
  placeholder,
  onChange,
  required,
}) => {
  return (
    <div className={styles.inputGroup}>
      <label className={styles.label}>{label}</label>
      <input
        autoComplete="off"
        name={name}
        id={name}
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        step="any"
        required={required}
      />
    </div>
  );
};

export default InputBar;
