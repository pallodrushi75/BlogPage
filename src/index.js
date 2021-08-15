import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";

import App from "./App";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init(1000);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
