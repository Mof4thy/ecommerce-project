import React, { useContext } from "react";
import styles from "./Preview.module.css";
import { PreviewContext } from "../context/PreviewContext";
const Preview = () => {
  const { preview, previewIndicator, setPreviewIndicator } =
    useContext(PreviewContext);
  //ده المصفوفة اللي علي اليسار
  {
    console.log(preview);
  }
  return (
    <>
      <div className={`${styles.preview}`}>
        {preview.map((item, idx) => {
          return (
            <div
              key={idx}
              className={`${idx === previewIndicator ? styles.active : ""}`}
              onClick={() => {
                //بغير بس في قيمة ال indicator
                //ها تفهم قصدي لما تشوف ProductShowCase

                setPreviewIndicator(idx);
              }}></div>
          );
        })}
      </div>
    </>
  );
};

export default Preview;
