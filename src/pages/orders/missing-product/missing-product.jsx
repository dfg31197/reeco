import React from "react";
import { Button, Modal } from "../../../components";
import styles from "./missing-product.module.scss";
import { STATUS } from "../../../constants";

export default function MissingProduct(props) {
  // debugger;
  if (!props.isVisible) return null;
  const handleYes = () => {
    props.onYes(props.data, STATUS.MISSING_URGENT);
  };
  const handleNo = () => {
    props.onYes(props.data, STATUS.MISSING);
  };
  return (
    <Modal
      title={<h2 style={{ margin: 0 }}>Missing product</h2>}
      onClose={props.onClose}
      className={styles.wrapper}
    >
      <div className={styles.content}>Is '{props.data.name}' urgent?</div>
      <div className={styles.footer}>
        <Button type="small" onClick={handleNo}>
          No
        </Button>
        <Button type="small" onClick={handleYes}>
          Yes
        </Button>
      </div>
    </Modal>
  );
}
