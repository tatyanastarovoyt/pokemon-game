import React from "react";
import ReactDOM from "react-dom";

const AppList = () => {
  return (
    <ul>
      <li>My First Elements</li>
      <li>My Second Elements</li>
    </ul> 
  )
}

const AppHeader = () => {
  return <h2>Hello World!!!!!!</h2>
}

const App = () => {
  return <div>
    <AppHeader />
    <AppList />
  </div>
}

ReactDOM.render(<App />, document.getElementById("root"));

