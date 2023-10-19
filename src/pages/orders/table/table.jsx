import React from "react";
import styles from "./table.module.scss";
import cn from "classnames";
import { Button } from "../../../components";
import { STATUS } from "../../../constants";
import Status from "../status/status";

const Tick = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width="25px"
    height="25px"
  >
    <path d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z" />
  </svg>
);
const Cross = (props) => (
  <svg
    {...props}
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
);
export default function Table(props) {

  
  return (
    <table className={styles.table}>
      <tr className={styles.headers}>
        <th></th>
        <th>Product name</th>
        <th>Brand</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
        <th>Status</th>
        <th></th>
      </tr>
      {props.data.map((item) => (
        <tr className={styles.row}>
          <td>
            <img width={50} src={item.image} alt="" />
          </td>
          <td>{item.name}</td>
          <td>{item.brand}</td>
          <td>{item.price}/6 x 1LB</td>
          <td>
            <b>{item.quantity}</b> x 6 * 1LB
          </td>
          <td>{Math.round(item.quantity * item.price)}</td>
          <td className={styles.grey}>{<Status status={item.status} />}</td>
          <td className={cn(styles.grey)}>
            <div className={styles.actions}>
              <Tick onClick={() => props.onApprove(item, STATUS.APPROVED)} />
              <Cross onClick={() => props.onCrossClick(item)} />
              <Button type="small">Edit</Button>
            </div>
          </td>
        </tr>
      ))}
    </table>
  );
}
