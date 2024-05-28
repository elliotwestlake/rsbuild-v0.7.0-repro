import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "braid-design-system/reset"; // <-- Must be first
import apacTheme from "braid-design-system/themes/apac";
import { BraidProvider } from "braid-design-system";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <BraidProvider theme={apacTheme}>
      <App />
    </BraidProvider>
  </React.StrictMode>
);
