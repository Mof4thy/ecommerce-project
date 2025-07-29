import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import PreviewContextProvider from "./context/PreviewContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {UserProvider} from "./context/UserContext.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <PreviewContextProvider>
            <App />
        </PreviewContextProvider>
      </UserProvider>
    </QueryClientProvider>
  </StrictMode>
);
