import React from "react";
import cn from "classnames";

import { STATUS } from "../../../constants";
import styles from "./status.module.scss";

const statusMap = {
  [STATUS.APPROVED]: {
    text: "Approved",
    className: styles.approved,
  },
  [STATUS.MISSING]: {
    text: "Missing",
    className: styles.missing,
  },
  [STATUS.MISSING_URGENT]: {
    text: "Missing - Urgent",
    className: styles.missingUrgent,
  },
};
export default function Status({ status }) {
  if (!(status in statusMap)) return null;
  const { text, className } = statusMap[status];
  return <div className={cn(styles.wrapper, className)}>{text}</div>;
}
