import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Pages/Router/Routes";
import {Provider} from "react-redux";
import store from "./Store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter >
          <Routes />
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
