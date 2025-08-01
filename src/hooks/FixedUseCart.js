import { useContext } from "react";
import CartContextModule from "../context/CartContext"; 
const useCart = () => {
  return useContext(CartContextModule.CartContext); 
};

export { useCart };
