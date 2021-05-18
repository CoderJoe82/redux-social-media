import React, { Component } from "react";
import "./App.css";
import AppBody from "./components/appBody/app.body";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React / Redux Discord Lite Clone</h1>
        <AppBody />
      </div>
    );
  }
}

export default App;
