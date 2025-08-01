import React, { useContext } from "react";
import styles from "./ProductShowCase.module.css";
import { PreviewContext } from "../context/PreviewContext";
import { Link } from "react-router-dom";

const ProductShowCase = ({ data }) => {
  const {
    preview,
    setPreview,
    setWishlist,
    SetModal,
    setCart,
    previewIndicator,
  } = useContext(PreviewContext);
  // ده الجزء اللي علي اليمين حاليا احنا معانا ال المصفوفة فيها العناصر اللي اضفناها
  return (
    <>
      <div className={styles.product}>
        <img src={`${data?.images[Number(previewIndicator)]}`} alt="NULL" />
      </div>

      <div className={`${styles.text}`}>
        <h2 className={styles.heading}>{preview[0]?.name}</h2>
        <strong>
          {/* ?. بتجنب خطأ undefind */}${preview[0]?.price?.min}{" "}
          {preview[0]?.discountedPrice?.toFixed(2)}
        </strong>
        <p className={styles.ava}>available in:</p>
        <ul className={styles.size}>
          {preview[0]?.available_sizes?.map((size, idx) => {
            return <li key={idx}>{size}</li>;
          })}
        </ul>
        <ul className={styles.itemsCount}>
          <li
            onClick={() => {
              // زرار التقليل بقلل من qty value
              setPreview((prev) => {
                return prev.map((el, idx) =>
                  idx === 0
                    ? {
                        ...el,
                        qty: el.qty - 1 < 0 ? 0 : el.qty - 1,
                      }
                    : el
                );
              });
            }}>
            <i className="fa-solid fa-minus"></i>
          </li>
          <li>{preview[0]?.qty}</li>
          <li
            onClick={() => {
              //زرار الزيادة
              setPreview((prev) => {
                return prev.map((el, idx) =>
                  idx === 0 ? { ...el, qty: el.qty + 1 } : el
                );
              });
            }}>
            <i className="fa-solid fa-plus"></i>
          </li>
        </ul>
        <button
          className={styles.addBtn}
          onClick={() => {
            setCart((prev) => {
              const res = prev.find((el) => el.id === preview[0]?.id);
              if (res) {
                return prev.map((item) =>
                  item.id === preview[0]?.id
                    ? { ...item, qty: preview[0]?.qty }
                    : item
                );
              }
              return [...prev, preview[0]];
            });
          }}>
          <i className="fa-solid fa-chart-gantt"></i> Add To Cart
        </button>
        <div style={{ display: "flex", gap: "8px" }}>
          <button
            className={styles.outlinedBtn}
            onClick={() => {
              SetModal(true);
              setWishlist((prev) => {
                const res = prev.find((el) => el.id == preview[0]?.id);
                if (res) {
                  if (res.qty != preview[0].qty) {
                    return prev.map((item) =>
                      item.id === preview[0].id
                        ? {
                            ...item,
                            qty: preview[0].qty,
                          }
                        : item
                    );
                  }
                  return [...prev]; //مش عايزه يضيف كذا مرة
                }
                return [...prev, preview[0]];
              });
            }}>
            <i className="fa-regular fa-heart"></i> Whish list
          </button>
          <button className={styles.outlinedBtn}>
            <i className="fa-solid fa-share"></i> Share
          </button>
        </div>
        <ul className={styles.tags}>
          <li>
            <i className="fa-solid fa-hashtag"></i> Tags:
          </li>
          {preview[0]?.tags?.map((item, idx) => {
            return (
              <li key={idx}>
                <button>{item}</button>
              </li>
            );
          })}
        </ul>
        <h3>Product Details:</h3>
        <p className={styles.parag}>
          {preview[0]?.description}...
          <Link href="/" style={{ margin: "8px", color: "#35afa0" }}>
            Read More
          </Link>
        </p>
      </div>
    </>
  );
};

export default ProductShowCase;
