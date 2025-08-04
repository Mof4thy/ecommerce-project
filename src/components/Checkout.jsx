import React from "react";
import { useCart } from "../hooks/useCart"; // ✅ استخدمنا useCart
import styles from "./Checlout.module.css";

const Checkout = () => {
  const { cart } = useCart(); // ✅ أخذنا cart من useCart

  
  // Filter out invalid cart items and add null safety
  // cart.items is the actual array, not cart directly
  const validCartItems = (cart?.items ?? []).filter(item => 
    item && 
    item.product && 
    item.product._id && 
    item.product.name && 
    item.quantity != null && 
    item.product.price != null
  );

  // Safe calculation functions
  const calculateSubtotal = () => {
    return validCartItems.reduce((prev, curr) => prev + (curr.quantity || 0), 0);
  };

  const calculateTotalPrice = () => {
    return validCartItems.reduce(
      (prev, curr) => prev + (curr.quantity || 0) * (curr.product.price || 0),
      0
    );
  };

  return (
    <div className={styles.checkout}>
      <div></div>
      <div className={styles.check}>
        {validCartItems.map((item) => {
          return (
            <div key={item.product._id} className={styles.itemsContainer}>
              <div
                style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                <div className={styles.img}>
                  <h2 className={styles.quantity}>{item.quantity || 0}</h2>
                </div>
                <h3 className={styles.productName}>{item.product.name || 'Unknown Product'}</h3>
              </div>
              <span>${((item.product.price || 0) * (item.quantity || 0)).toFixed(2)}</span>
            </div>
          );
        })}

        <div className={styles.finalValue}>
          <div>
            <h3>
              Subtotal:{" "}
              <span>
                {calculateSubtotal()}
              </span>{" "}
              Items
            </h3>
            <h3>
              $
              <span>
                {calculateTotalPrice().toFixed(2)}
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
              <span className={styles.reduc} style={{ opacity: "0.7" }}>USD </span>$
              {(calculateTotalPrice() + 2.46).toFixed(2)}
            </span>
          </div>
          <p>Including $2.46 in taxes</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
