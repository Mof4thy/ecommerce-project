import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import PreviewContextProvider from "./context/PreviewContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PreviewContextProvider>
      <App />
    </PreviewContextProvider>
  </StrictMode>
);
