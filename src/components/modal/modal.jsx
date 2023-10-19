import React from "react";
import Portal from "../portal/portal";
import cn from "classnames";
import styles from "./modal.module.scss";
export default function Modal({ onClose, children, className, title }) {
  
  return (
    <Portal>
      <div onClick={onClose} className={styles.backdrop}></div>

      <div className={cn(styles.wrapper, className)}>
        <div className={styles.close}>
          {title || <span></span>}
          <svg
            onClick={onClose}
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            height="20px"
            width="20px"
            version="1.1"
            id="Capa_1"
            viewBox="0 0 490 490"
          >
            <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490   489.292,457.678 277.331,245.004 489.292,32.337 " />
          </svg>
        </div>
        {children}
      </div>
    </Portal>
  );
}
