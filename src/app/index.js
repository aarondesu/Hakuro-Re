import React from "react";
import ReactDom from "react-dom";

const Index = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      {process.env.NODE_ENV}
    </div>
  );
};

ReactDom.render(<Index />, document.getElementById("app"));
