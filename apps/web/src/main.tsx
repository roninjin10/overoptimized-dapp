import "@rainbow-me/rainbowkit/styles.css";

import React from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";

const root = document.getElementById("root");

if (!root) {
  throw new Error("no root foond");
}

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
