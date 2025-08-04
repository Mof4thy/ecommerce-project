import { useContext } from "react";
import { CartContext } from "../context/CartContext";

// const useCart = () => {
//      useContext(CartContext);
// }
const useCart = () => useContext(CartContext);

export  {useCart};