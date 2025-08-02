import React, { useContext } from "react";
import Styles from "./Wishlist.module.css";
import { PreviewContext } from "../context/PreviewContext";
import { useCart } from "../hooks/useCart";

const Wishlist = () => {
  const { wishlist, setWishlist } = useContext(PreviewContext);
  const { cart, addToCart } = useCart(); // استخدام useCart

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
                  setWishlist((prev) => prev.filter((el) => el.id !== item.id));
                }}>
                <i className="fa-solid fa-delete-left"></i>
              </button>
              <p>{item?.name}</p>
              <strong>{item.price}</strong>
              <p>{item.quantity}</p>
              <button
                className={Styles.addTOCart}
                onClick={() => {
                  
                  const alreadyInCart = cart.items?.some(
                    (el) => el.product._id === item.id
                  );
                  if (!alreadyInCart) {
                    addToCart(item); 
                  }
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
