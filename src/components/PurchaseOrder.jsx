import React, { useContext } from "react";
import styles from "./PurchaseOrder.module.css";
import { Link } from "react-router-dom";
import Preview from "./Preview";
import ProductShowCase from "./ProductShowCase";
import { PreviewContext } from "../context/PreviewContext";
import CustomModal from "./CustomModal";
const PurchaseOrder = ({ data }) => {
  // ده الجزء اللي في الاسفل
  const { setPreview } = useContext(PreviewContext);
  const handleClick = (item) => {
    setPreview((prev) => {
      const res = prev.find((el) => el.id === item.id); //بشوف هل العنصر موجود في المصفوفة او لا
      if (res) {
        return prev.map(
          (el) =>
            el.id === item.id ? { ...el, quantity: el.quantity + 1 } : el //لو موجود بنعمل زيادة لان كده ضغطنا كذا مرة علي الزائد الاخضر
        );
      }
      return [...prev, item]; //لو لا بنضيفه لل preview
    });
  };
  return (
    <>
      <CustomModal></CustomModal>
      <div className={styles.overlay}></div>
      <div className={styles.purchaseContainer}>
        {/*المكون ده هو المسؤول عن الجزء اللي علي اليسار*/}
        <Preview></Preview>
        {/*المكون ده هو المسؤول عن الجزء اللي علي اليمين*/}
        <ProductShowCase></ProductShowCase>
        {/*مازلنا في الجزء اللي في الاسفل*/}
        <div className={styles.related}>
          <h2>Related Products</h2>
          <div className={styles.cardContainer}>
            {/* انا متوقع ان الداتا جاية من ال shopping */}
            {/* علي الهيئة دي */}
            {data.products.map((item) => {
              // بعمل بس map للشكل المتفق عليه
              return (
                <div className={styles.card} key={item.id}>
                  <div className={styles.img}>
                    <button
                      // ده الزر الاخضر
                      onClick={() => {
                        // الوظيفة اللي فوق بضيف العنصر للمصفوقة لو مش موجود او بزود عدده لو موجود
                        handleClick(item);
                      }}>
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                  <div className={styles.inner}>
                    <p>
                      <strong
                        style={{ margin: "0 4px", display: "inline-block" }}>
                        ${item.price.min}
                      </strong>{" "}
                      <span
                        style={{
                          textDecoration: "line-through",
                          color: "#b3b3b3",
                        }}>
                        {`${item.original_price ? "$" : ""}`}
                        {item.original_price}
                      </span>
                    </p>
                    <p>{item.name}</p>
                    <p className={styles.cout}>{item.unit}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PurchaseOrder;
