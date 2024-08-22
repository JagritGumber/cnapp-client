import React, { memo } from "react";
import styles from "./Breadcrumb.module.css";

interface BreadcrumbProps {
  items: string[];
}

const Breadcrumb: React.FC<Readonly<BreadcrumbProps>> = memo(({ items }) => {
  return (
    <ul className={styles.breadcrumb}>
      {items?.map((item, id) => (
        <React.Fragment key={id}>
          <li className={styles.item}>{item}</li>
          {id < items.length - 1 && <li>{">"}</li>}
        </React.Fragment>
      ))}
    </ul>
  );
});

export default Breadcrumb;
