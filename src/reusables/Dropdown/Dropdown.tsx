import { useState } from "react";
import styles from "./Dropdown.module.css";

interface DropdownProps {
  icon: React.ReactNode;
  items: string[];
  state: [number, React.Dispatch<React.SetStateAction<number>>];
}

const Dropdown: React.FC<Readonly<DropdownProps>> = ({
  icon,
  items,
  state,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = state;

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownRow}>
        {icon}
        <button
          className={styles.dropdownTrigger}
          onClick={() => setIsOpen(!isOpen)}
        >
          {items[selected]}
        </button>
      </div>
      {isOpen && (
        <ul className={styles.dropdownMenu} id="dropdown-menu" role="menu">
          {items.map((item, id) => (
            <li
              key={id}
              className={`${styles.dropdownItem} ${
                id === selected ? styles.selected : ""
              }`}
              onClick={() => {
                setSelected(id);
                setIsOpen(!isOpen);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
