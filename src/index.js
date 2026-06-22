import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { SearchProvider } from "./context/serachTerm";

ReactDOM.render(
  <SearchProvider>
    <App />
  </SearchProvider>,
  document.getElementById("root"),
)
