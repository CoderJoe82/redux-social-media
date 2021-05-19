import "./server.section.css";
import React, { Component } from "react";

class ServerSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
        key: 0,
      servers: [
        <button className="addServer">
          <span id="add">Add New</span>
        </button>,
        <button className="addServer">
          <span id="movies">Movies</span>
        </button>,
        <button className="addServer">
          <span id="games">Games</span>
        </button>,
      ],
    };
  }

  render() {
    return (
      <div id="serverList">
        <div id="sizeSpot">
          <button id="closeButton">
            <span id="close">x</span>
          </button>
          <button id="minimizeButton">
            <span id="min">-</span>
          </button>
          <button id="maximizeButton">
            <span id="max">O</span>
          </button>
        </div>
        <div id="serverSpot">
            {this.state.servers.map((button, index) => {
                
                return button
            })}
        </div>
      </div>
    );
  }
}

export default ServerSection;
