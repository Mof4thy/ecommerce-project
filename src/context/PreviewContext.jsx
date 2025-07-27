/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";

export const PreviewContext = createContext({});

import React from "react";
const savedData = localStorage.getItem("preview")
  ? JSON.parse(localStorage.getItem("preview"))
  : []; //ensure that preview array has items or not
const PreviewContextProvider = ({ children }) => {
  const [preview, setPreview] = useState(savedData); //preview array
  const [previewIndicator, setPreviewIndicator] = useState(0); // اعرف اي عنصر من المصمفوفة دي انا واقف عليه
  useEffect(() => {
    localStorage.setItem("preview", JSON.stringify(preview)); //بخزن القيمة الجديدة في المصفوفة بعد التغيير
  }, [preview]);
  return (
    <PreviewContext.Provider
      value={{ preview, setPreview, previewIndicator, setPreviewIndicator }}>
      {children}
    </PreviewContext.Provider> //بعمل تغذية لل app
  );
};

export default PreviewContextProvider;
