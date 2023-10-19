import React from "react";
import styles from "./button.module.scss";
import cn from "classnames";

export default function Button({
  type = "primary",
  onClick,
  className,
  children,
}) {
  const typeMap = {
    ghost: styles.ghost,
    primary: styles.primary,
    small: styles.small,
  };
  return (
    <button onClick={onClick} className={cn(styles.button, typeMap[type], className)}>
      {children}
    </button>
  );
}
