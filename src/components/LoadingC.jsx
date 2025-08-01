import React from "react";
import {
  fullPage,
  animationContainer,
  one,
  two,
  three,
  four,
} from "./Loading.module.css";
const LoadingC = () => {
  return (
    <div className={fullPage}>
      <div className={animationContainer}>
        <div className={one}></div>
        <div className={two}></div>
        <div className={three}></div>
        <div className={four}></div>
      </div>
    </div>
  );
};

export default LoadingC;
