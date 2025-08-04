import React, { useContext } from "react";
import styles from "./Preview.module.css";
import { PreviewContext } from "../context/PreviewContext";

const Preview = ({ data }) => {
 
  const { previewIndicator, setPreviewIndicator } = useContext(PreviewContext);

  return (
    <>
      <div className={`${styles.preview}`}>
        {data.map((item, idx) => {
          return (
            <div
              key={idx}
              className={`${idx === previewIndicator ? styles.active : ""}`}
              onClick={() => {
                setPreviewIndicator(idx);
              }}>
              <img src={`${data[Number([idx])]}`} alt="NULL" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Preview;
