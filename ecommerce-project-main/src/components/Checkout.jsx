import React, { useContext } from "react";
import { PreviewContext } from "../context/PreviewContext";
import styles from "./Checlout.module.css";
const Checkout = () => {
  const { cart } = useContext(PreviewContext);
  return (
    <div className={styles.checkout}>
      <div></div>
      <div className={styles.check}>
        {cart.map((item) => {
          return (
            <div key={item.id} className={styles.itemsContainer}>
              <div
                style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                <div className={styles.img}>
                  <h2 className={styles.quantity}>{item.quantity}</h2>
                </div>
                <h3 className={styles.productName}>{item.name}</h3>
              </div>
              <span>${item.price.min * item.quantity}</span>
            </div>
          );
        })}

        <div className={styles.finalValue}>
          <div>
            <h3>
              Subtotal:{" "}
              <span>
                {cart.reduce((prev, curr) => prev + curr.quantity, 0)}
              </span>{" "}
              Items
            </h3>
            <h3>
              $
              <span>
                {cart.reduce(
                  (prev, curr) => prev + curr.quantity * curr.price.min,
                  0
                )}
              </span>
            </h3>
          </div>
          <div>
            <h3>Shipping</h3>
            <span>Free</span>
          </div>
          <div style={{marginTop:"20px"}}>
            <h3>Total</h3>
            <span>
              <span className={styles.reduc} style={{ opacity: "0.7" }}>USD </span>$
              {cart.reduce(
                (prev, curr) => prev + curr.quantity * curr.price.min,
                0
              ) + 2.46}
            </span>
          </div>
          <p>Including $2.46 in taxes</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
