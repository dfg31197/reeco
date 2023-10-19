import React, { useState, useEffect } from "react";
import { Button, Container } from "../../../components";
import styles from "./header.module.scss";

export default function Header({ onBack, onApprove }) {
  return (
    <Container outerClass={styles.wrapper}>
      <div className={styles.breadcrumb}>
        <span>Orders</span>
        <span>></span>
        <span>
          <u>Order 32457ABC</u>
        </span>
      </div>

      <div className={styles.footer}>
        <h1>Order 32457ABC</h1>
        <div className={styles.cta}><Button type="ghost">Back</Button><Button type="primary">Approve order</Button></div>
      </div>
    </Container>
  );
}
