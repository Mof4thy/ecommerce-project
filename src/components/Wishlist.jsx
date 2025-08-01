import React, { useContext } from "react";
import Styles from "./Wishlist.module.css";
import { PreviewContext } from "../context/PreviewContext";
const Wishlist = () => {
  const { wishlist, setWishlist, setCart } = useContext(PreviewContext);
  return (
    <div className={Styles.wishlist}>
      <div className={Styles.inner}>
        <h2>My Wishlist</h2>
        <div className={Styles.heading}>
          <div></div>
          <div>Product Name</div>
          <div>Unit Price</div>
          <div>#In Stock</div>
          <div>Action</div>
        </div>
        {wishlist.map((item) => {
          return (
            <div key={item.id} className={Styles.wishlistItem}>
              <button
                onClick={() => {
                  setWishlist((prev) => {
                    return prev.filter((el) => el.id !== item.id);
                  });
                }}>
                <i className="fa-solid fa-delete-left"></i>
              </button>
              <p>{item?.name}</p>
              <strong>{item.price}</strong>
              <p>{item.quantity}</p>
              <button
                className={Styles.addTOCart}
                onClick={() => {
                  setCart((prev) => {
                    const res = prev.find((el) => el.id === item.id);
                    if (res) {
                      return [...prev];
                    }
                    return [...prev, item];
                  });
                }}>
                Add To Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wishlist;
