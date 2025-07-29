import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import PreviewContextProvider from "./context/PreviewContext.jsx";
import { ProductsProvider } from "./context/ProductsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PreviewContextProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </PreviewContextProvider>
  </StrictMode>
);
