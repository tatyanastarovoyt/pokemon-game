import React from "react";
import ReactDOM from "react-dom";

// const el1 = React.createElement(
// "h4",
// null,
// "Hello World, React.js!"
// );

const el = (
  <div>
    <h1>Hello World!</h1>
    <ul>
      <li>My First Elements</li>
      <li>My Second Elements</li>
    </ul> 
 </div>
);

ReactDOM.render(el, document.getElementById("root"));

