import React, { useContext } from "react";
import styles from "./ProductShowCase.module.css";
import { Link } from "react-router-dom";
import { PreviewContext } from "../context/PreviewContext";
const ProductShowCase = () => {
  const { preview, setPreview, previewIndicator } = useContext(PreviewContext);
  // ده الجزء اللي علي اليمين حاليا احنا معانا ال المصفوفة فيها العناصر اللي اضفناها
  return (
    <>
      <div className={styles.product}></div>
      {/* بس نبدأ بقي نوزع الداتا علي العناصر */}
      {/* هنا بس بتأكد ان المصفوفة فضية او لا و بال
                    css
       بغير المظهر */}
      <div className={`${styles.text} ${preview[0] ? "" : styles.blank}`}>
        <h2 className={styles.heading}>{preview[previewIndicator]?.name}</h2>
        <strong>
          {/* ?. بتجنب خطأ undefind */}
          ${preview[previewIndicator]?.price?.min}{" "}
          {preview[previewIndicator]?.price?.max ===
          preview[previewIndicator]?.price?.min
            ? ""
            : `- $ ${preview[previewIndicator]?.price?.max}`}
        </strong>
        <p className={styles.ava}>available in:</p>
        <ul className={styles.size}>
          {preview[previewIndicator]?.available_sizes.map((size, idx) => {
            return <li key={idx}>{size}</li>;
          })}
        </ul>
        <ul className={styles.itemsCount}>
          <li
            onClick={() => {
              // زرار التقليل بقلل من quantity value
              setPreview((prev) => {
                return prev.map((el, idx) =>
                  idx === previewIndicator
                    ? {
                        ...el,
                        quantity: el.quantity - 1 < 0 ? 0 : el.quantity - 1,
                      }
                    : el
                );
              });
            }}>
            <i className="fa-solid fa-minus"></i>
          </li>
          <li>{preview[previewIndicator]?.quantity}</li>
          <li
            onClick={() => {
              //زرار الزيادة
              setPreview((prev) => {
                return prev.map((el, idx) =>
                  idx === previewIndicator
                    ? { ...el, quantity: el.quantity + 1 }
                    : el
                );
              });
            }}>
            <i className="fa-solid fa-plus"></i>
          </li>
        </ul>
        <button className={styles.addBtn}>
          <i className="fa-solid fa-chart-gantt"></i> Add To Cart
        </button>
        <div style={{ display: "flex", gap: "8px" }}>
          <button className={styles.outlinedBtn}>
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
          {preview[previewIndicator]?.tags.map((item, idx) => {
            return (
              <li key={idx}>
                <button>{item}</button>
              </li>
            );
          })}
        </ul>
        <h3>Product Details:</h3>
        <p className={styles.parag}>
          {preview[previewIndicator]?.description}...
          <Link href="/" style={{ margin: "8px", color: "#35afa0" }}>
            Read More
          </Link>
        </p>
      </div>
    </>
  );
};

export default ProductShowCase;
