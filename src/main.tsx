import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Pages/Router/Routes";
import { Provider } from "react-redux";
import store from "./Store";
import isPropValid from "@emotion/is-prop-valid";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

function shouldForwardProp(propName: string, target: unknown) {
  if (typeof target === "string") {
    // For HTML elements, forward the prop if it is a valid HTML attribute
    return isPropValid(propName);
  }
  // For other elements, forward all props
  return true;
}
