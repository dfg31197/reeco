import React, { useState, useEffect } from "react";
import Header from "./header/header";
import Cards from "./cards/cards";
import Table from "./table/table";
import { Button, Container, Modal, Search } from "../../components";
import styles from "./orders.module.scss";
import { getMockData } from "../../api/mockdata";
import MissingProduct from "./missing-product/missing-product";

const MODALS = {
  MISSING: "MISSING",
  EDIT: "EDIT",
};

export default function Orders() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState({
    visible: null,
    data: null,
  });
  useEffect(() => {
    getMockData().then((res) => {
      setData(res);
    });
  }, []);

  const openMissingProductModal = (item) => {
    setModal({
      visible: MODALS.MISSING,
      data: item,
    });
  };

  const closeModals = () => {
    setModal({
      visible: null,
      data: null,
    });
  };

  const setStatus = (item, status) => {
    setData((data) =>
      data.map((entry) => {
        if (item.id === entry.id) {
          // debugger;
          return {
            ...entry,
            status,
          };
        } else return entry;
      })
    );
    closeModals();
  };

  const total = data.reduce((acc, val) => {
    acc = acc + Math.round(val.quantity * val.price);
    return acc;
  }, 0);

  return (
    <div>
      <Header />
      <Cards total={total} />
      <MissingProduct
        isVisible={modal.visible === MODALS.MISSING}
        data={modal.data}
        onYes={setStatus}
        onNo={setStatus}
        onClose={closeModals}
      />

      <Container className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.search}>
            <Search placeholder="Search..." />
          </div>
          <div className={styles.cta}>
            <Button type="ghost">Add item</Button>
          </div>
        </div>
        <Table
          onApprove={setStatus}
          data={data}
          onCrossClick={openMissingProductModal}
        />
      </Container>
    </div>
  );
}
