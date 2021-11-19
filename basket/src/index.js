import React from "react";
import ReactDOM from "react-dom";
import Header from "./core/Header";
import Main from "./core/Main";
import style from "./style.css";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);
