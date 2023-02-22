import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { AuthcontextProvider } from "./context/Authcontext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthcontextProvider>
    <App />
  </AuthcontextProvider>
);
