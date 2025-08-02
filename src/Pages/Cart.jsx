import React from "react";
import styles from "./Cart.module.css";
import { useCart } from "../hooks/useCart";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, clearCart, removeFromCart, updateCart } = useCart();

  // Filter out items with null or invalid products
  const validItems = (cart.items ?? []).filter(item => 
    item?.product && 
    item.product._id && 
    item.product.name && 
    item.product.price != null
  );

  return (
    <div>
      {validItems.map((item) => {
        const product = item.product;
        return (
          <div key={product._id} className={styles.cartItem}>
            <div className={styles.image}>
              <img 
                src={product.image || '/placeholder-image.jpg'} 
                alt={product.name || 'Product'} 
              />
            </div>

            <div style={{ width: "100%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "center",
                }}>
                <h2>{product.name || 'Unknown Product'}</h2>
                <div
                  className={styles.delete}
                  onClick={() => removeFromCart(product._id)}>
                  <i className="fa-solid fa-trash-can"></i>
                </div>
              </div>

              <p>{product.description || 'No description available'}</p>

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
                <p className={styles.price}>${item.quantity * (product.price || 0)}</p>
              </div>
            </div>
          </div>
        );
      })}

      <div style={{ width: "fit-content",display:"flex",gap:"16px" ,margin:"auto"}}>
        <Link className={styles.checkout} to="/checkout">
          Checkout
        </Link>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          {cart.items?.length > 0 && (
            <button className={styles.emptyItems} onClick={() => clearCart()}>
              Empty the cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}