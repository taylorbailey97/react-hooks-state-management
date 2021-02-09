import React from "react";
import ReactDOM from "react-dom";
import AppMain from "./controllers/AppMain";

import "./theme.css";

function App() {
  return (
    <div className="cssApp">
      <AppMain />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
