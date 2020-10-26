import React from "react";
import ReactDOM from "react-dom";

var greeting = "Hello World!";

ReactDOM.render(
  <div>
    <h1>
      {greeting}
    </h1>
  </div>,
  document.getElementById("root")
);
