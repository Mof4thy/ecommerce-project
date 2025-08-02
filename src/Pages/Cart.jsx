import React from "react";
import styles from "./Cart.module.css";
import { useCart } from "../hooks/useCart";

export default function Cart() {
  const { cart, clearCart, removeFromCart, updateCart } = useCart();

  return (
    <div>
      {cart.items?.map((item) => {
        const product = item.product;
        return (
          <div key={product._id} className={styles.cartItem}>
            <div className={styles.image}>
              <img src={product.image} alt="Null" />
            </div>

            <div style={{ width: "100%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "center",
                }}>
                <h2>{product.name}</h2>
                <div
                  className={styles.delete}
                  onClick={() => removeFromCart(product._id)}>
                  <i className="fa-solid fa-trash-can"></i>
                </div>
              </div>

              <p>{product.description}</p>

              <div
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}>
                <div className={styles.controls}>
                  <div
                    className={styles.rounded}
                    onClick={() => updateCart(product._id, "decrement")}>
                    <i className="fa-solid fa-minus"></i>
                  </div>
                  <div className={`${styles.rounded} ${styles.quantity}`}>
                    {item.quantity}
                  </div>
                  <div
                    className={styles.rounded}
                    onClick={() => updateCart(product._id, "increment")}>
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
                <p className={styles.price}>${item.quantity * product.price}</p>
              </div>
            </div>
          </div>
        );
      })}

      {cart.items?.length > 0 && (
        <button className={styles.emptyItems} onClick={() => clearCart()}>
          Empty the cart
        </button>
      )}
    </div>
  );
}
