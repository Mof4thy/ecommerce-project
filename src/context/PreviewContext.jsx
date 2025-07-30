/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";

export const PreviewContext = createContext({});

const savedData = localStorage.getItem("preview")
  ? JSON.parse(localStorage.getItem("preview"))
  : [];
const savedWishlistData = localStorage.getItem("wishlist")
  ? JSON.parse(localStorage.getItem("wishlist"))
  : [];
const savedCatData = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
const PreviewContextProvider = ({ children }) => {
  const [preview, setPreview] = useState(savedData); //preview array
  const [previewIndicator, setPreviewIndicator] = useState(0); // اعرف اي عنصر من المصمفوفة دي انا واقف عليه
  const [wishlist, setWishlist] = useState(savedWishlistData); // اعرف اي عنصر من المصمفوفة دي انا واقف عليه
  const [cart, setCart] = useState(savedCatData);
  const [modal, SetModal] = useState(false);
  useEffect(() => {
    localStorage.setItem("preview", JSON.stringify(preview)); //بخزن القيمة الجديدة في المصفوفة بعد التغيير
  }, [preview]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  
  return (
    <PreviewContext.Provider
      value={{
        preview,
        setPreview,
        previewIndicator,
        setPreviewIndicator,
        wishlist,
        setWishlist,
        modal,
        SetModal,
        cart,
        setCart,
      }}>
      {children}
    </PreviewContext.Provider> //بعمل تغذية لل app
  );
};

export default PreviewContextProvider;
