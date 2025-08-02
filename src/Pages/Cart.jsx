import React, { useContext } from "react";
import { PreviewContext } from "../context/PreviewContext";
import styles from "./Cart.module.css";

export default function Cart() {
  const { cart, setCart } = useContext(PreviewContext);
 

  
 

 

  return (
    <div>
      {!cart[0] && <p>No Items</p>}
      {cart.map((item) => {
        return (
          <div key={item.id} className={styles.cartItem}>
            <div className={styles.image}>
              <img src={item.image} alt="Null" srcset="" />
            </div>

            <div style={{ width: "100%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "center",
                }}>
                <h2>{item.name}</h2>{" "}
                <div
                  className={styles.delete}
                  onClick={() => {
                    setCart((prev) => {
                      return prev.filter((el) => el.id !== item.id);
                    });
                  }}>
                  <i className="fa-solid fa-trash-can"></i>
                </div>
              </div>
              <p>{item.description}</p>
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
                    onClick={() => {
                      setCart((prev) => {
                        return prev.map((el) => {
                          return el.id === item.id
                            ? {
                                ...el,
                                qty: --item.qty < 0 ? 0 : item.qty,
                              }
                            : el;
                        });
                      });
                    }}>
                    <i className="fa-solid fa-minus"></i>
                  </div>
                  <div className={`${styles.rounded} ${styles.quantity}`}>
                    {item.qty}
                  </div>
                  <div
                    className={styles.rounded}
                    onClick={() => {
                      setCart((prev) => {
                        return prev.map((el) => {
                          return el.id === item.id
                            ? {
                                ...el,
                                qty:
                                  ++item.qty <= item.quantity
                                    ? item.qty
                                    : item.quantity,
                              }
                            : el;
                        });
                      });
                    }}>
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
                <p className={styles.price}>${item.qty * item.price}</p>
              </div>
            </div>
          </div>
        );
      })}
      {cart[0] && (
        <button
          className={styles.emptyItems}
          onClick={() => {
            setCart([]);
          }}>
          Empty the cart
        </button>
      )}
    </div>
  );
}
s