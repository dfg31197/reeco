import styles from "./container.module.scss";
import cn from "classnames";

export default function Container({ className, children, outerClass }) {
  return (
    <div className={cn(styles.wrapper, outerClass)}>
      <div className={cn(styles.container, className)}>{children}</div>
    </div>
  );
}
