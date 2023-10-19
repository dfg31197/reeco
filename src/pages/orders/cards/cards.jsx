import React from "react";
import { Container } from "../../../components";
import cn from "classnames";
import styles from "./card.module.scss";

const Card = ({ title, children, isLast }) => {
  return (
    <div className={cn(styles.card, { [styles.last]: isLast })}>
      <p>{title}</p>
      <section>{children}</section>
    </div>
  );
};
export default function Cards(props) {
  return (
    <Container className={styles.wrapper}>
      <Card title="Supplier">
        <h3>East coast fruits & vegetables</h3>
      </Card>
      <Card title="Shipping Date">
        <h3>Thu, Feb 10</h3>
      </Card>
      <Card title="Total">
        <h3>$ {props.total}</h3>
      </Card>
      <Card title="Category">
        <img src="/category.png" alt="" />
      </Card>
      <Card title="Department">
        <h3>300-444-678</h3>
      </Card>
      <Card isLast={true}  title="Status">
        <h3>Awaiting your approval</h3>
      </Card>
    </Container>
  );
}
