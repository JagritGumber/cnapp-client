import { IoChevronDown } from "react-icons/io5";
import styles from "./Accordion.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface AccordionProps {
  name: string;
  items: string[];
}

const Accordion: React.FC<Readonly<AccordionProps>> = ({ name, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.accordion} poppins-regular font-md`}>
      <div className={styles.topRow} onClick={() => setIsOpen(!isOpen)}>
        <h3>{name}</h3>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, y: 0 },
              collapsed: { opacity: 0, y: "-100%" },
            }}
          >
            {items?.map((item, id) => (
              <p key={id} className={styles.item}>
                {item}
              </p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
