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

const Image = () => {
  return <img src="https://www.theknot.com/tk-media/images/8d7f9239-ddb5-47e7-8c81-eb39283c8262~rs_768.h" alt="IMAGE NULL" width="200" height="150s"/>
}

const AppHeader = () => <h2>Hello World!!!!!!</h2>

const App = () => {
  return <div>
    {/* <Image /> */}
    <AppHeader />
    <AppList />
    <Image />

  </div>
}

ReactDOM.render(<App />, document.getElementById("root"));

