import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
import ProductContextProvider from "./contexts/ProductContext.tsx";
import PaymentContextProvider from "./contexts/PaymentContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductContextProvider>
        <PaymentContextProvider>
          <App />
        </PaymentContextProvider>
      </ProductContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
