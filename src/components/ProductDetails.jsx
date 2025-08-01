import React, { useContext, useRef } from "react";
import styles from "./ProductDetails.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import Preview from "./Preview";
import ProductShowCase from "./ProductShowCase";
import { PreviewContext } from "../context/PreviewContext";
import CustomModal from "./CustomModal";
import { useProductById } from "../hooks/useProductById";
import LoadingC from "./LoadingC";
import { useProducts } from "../hooks/useProducts";
const ProductDetails = () => {
  const navigate = useNavigate();
  const sentData = useRef(true);
  const { setPreview, setCart, cart } = useContext(PreviewContext);
  const { id } = useParams();
  const { data, isLoading, isError } = useProductById(id);
  const { data: products } = useProducts();
  // console.log(data?);

  if (isLoading) {
    return <LoadingC></LoadingC>;
  }
  if (isError) {
    return <p>Error Occured</p>;
  }
  if (sentData.current) {
    const quantity = cart.find((el) => el.id === data.product.id)?.qty || 0;
    setPreview([{ ...data.product, qty: quantity }]);
    sentData.current = false;
  }
  const handleClick = (item) => {
    setCart((prev) => {
      const res = prev.find((el) => el.id === item.id);
      if (res) {
        return prev.map((el) =>
          el.id === item.id ? { ...el, qty: el.qty + 1 } : el
        );
      }
      return prev.map((el) => (el.id === item.id ? { ...el, qty: 1 } : el));
    });
  };
  const handleClickOnImage = (item) => {
    sentData.current = true;
    navigate(`/ProductDetails/${item.id}`);
  };
  return (
    <>
      <CustomModal></CustomModal>
      <div className={styles.overlay}></div>
      <div className={styles.purchaseContainer}>
        <Preview data={data.product.images}></Preview>
        <ProductShowCase data={data.product}></ProductShowCase>
        <div className={styles.related}>
          <h2>Related Products</h2>
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 px-2 py-4">
              {products?.map((product) => {
                if (
                  product.tags.find((el) =>
                    data.product.tags.some((element) => element === el)
                  )
                ) {
                  return (
                    <div
                      key={product.id}
                      className="min-w-[238px] bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col">
                      <div
                        className="relative min-h-[200px] w-full bg-gray-100 rounded-t-xl overflow-hidden"
                        onClick={() => {
                          handleClickOnImage(product);
                        }}>
                        <img
                          style={{ height: "200px", width: "100%" }}
                          src={`${product?.images[0]}`}
                          alt="NULL"
                        />
                        <button
                          className={`${styles.button}`}
                          onClick={() => handleClick(product)}>
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                      <div className="flex flex-col px-4 py-3 flex-1">
                        <p className="text-lg font-semibold text-teal-700">
                          ${product?.discountedPrice.toFixed(2)}
                        </p>
                        <p className="text-sm line-through text-gray-400">
                          {`${
                            product?.price === product?.discountedPrice
                              ? ""
                              : "$"
                          }${
                            product?.price === product?.discountedPrice
                              ? ""
                              : product?.price
                          }`}
                        </p>
                        <p className="text-base font-medium mt-1">
                          {product?.name}
                        </p>
                        <p className="text-xs text-gray-400 mt-auto">
                          #Reviews {product?.reviews}
                        </p>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
