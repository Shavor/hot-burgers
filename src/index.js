import React, { StrictMode } from "react";
import { render } from "react-dom";
import Router from "./components/Router";
import "./css/style.css";

const root = document.getElementById("root");
render(
  <StrictMode>
    <Router />
  </StrictMode>,
  root
);
