import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import {myStore} from "./store.js";
import {Provider} from "react-redux";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={myStore}>
    <App />
    </Provider>
  </StrictMode>
);
