import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // 🟡 WAJIB: ini yang load Tailwind

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
