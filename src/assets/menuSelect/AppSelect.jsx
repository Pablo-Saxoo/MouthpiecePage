import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import BasicSelect from "./Menu";

createRoot(document.getElementById("menuID")).render(
  <StrictMode>
    <BasicSelect />
  </StrictMode>
);
