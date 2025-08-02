import React from "react";
import { useCart } from "../hooks/useCart"; // ✅ استخدمنا useCart
import styles from "./Checlout.module.css";

const Checkout = () => {
  const { cart } = useCart(); // ✅ أخذنا cart من useCart

  return (
    <div className={styles.checkout}>
      <div></div>
      <div className={styles.check}>
        {cart.items?.map((item) => {
          return (
            <div key={item.product._id} className={styles.itemsContainer}>
              <div
                style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                <div className={styles.img}>
                  <h2 className={styles.quantity}>{item.quantity}</h2>
                </div>
                <h3 className={styles.productName}>{item.product.name}</h3>
              </div>
              <span>
                ${(item.product.discountedPrice * item.quantity).toFixed(2)}
              </span>
            </div>
          );
        })}

        <div className={styles.finalValue}>
          <div>
            <h3>
              Subtotal:{" "}
              <span>
                {cart.items?.reduce((prev, curr) => prev + curr.quantity, 0)}
              </span>{" "}
              Items
            </h3>
            <h3>
              $
              <span>
                {cart.items
                  ?.reduce(
                    (prev, curr) =>
                      prev + curr.quantity * curr.product.discountedPrice,
                    0
                  )
                  .toFixed(2)}
              </span>
            </h3>
          </div>
          <div>
            <h3>Shipping</h3>
            <span>Free</span>
          </div>
          <div style={{ marginTop: "20px" }}>
            <h3>Total</h3>
            <span>
              <span className={styles.reduc} style={{ opacity: "0.7" }}>
                USD{" "}
              </span>
              $
              {(
                (cart.items?.reduce(
                  (prev, curr) =>
                    prev + curr.quantity * curr.product.discountedPrice,
                  0
                ) || 0) + 2.46
              ).toFixed(2)}
            </span>
          </div>
          <p>Including $2.46 in taxes</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
