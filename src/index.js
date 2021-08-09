import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";

import App from "./App";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init(1000);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
