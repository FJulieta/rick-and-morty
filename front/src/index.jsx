import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
