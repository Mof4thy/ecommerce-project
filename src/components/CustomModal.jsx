import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PreviewContext } from "../context/PreviewContext";
import styles from "./CustomModal.module.css";
const CustomModal = () => {
  const { modal, SetModal } = useContext(PreviewContext);
  return (
    <>
      {modal && (
        <>
          <div className={styles.overlay}></div>
          <div className={styles.module}>
            <i className="fa-solid fa-heart-circle-check"></i>
            <h2>Product Has Been added to cart</h2>
            <div style={{ display: "flex", gap: "16px" }}>
              <button
                onClick={() => {
                  SetModal(false);
                }}>
                Close
              </button>
              <Link style={{flex:1,background:"#35AFA0"}} to="/wishlist">Wish List</Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CustomModal;
