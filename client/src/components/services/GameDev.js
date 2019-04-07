import React, { Component } from "react";
import { Link } from "react-router-dom";

class GameDev extends Component {
  render() {
    return (
      <div className="container pt-5" style={{ paddingBottom: "375px" }}>
        <Link to="/">&larr; Back home</Link>
        <div className="pt-3 text-center">
          <h1 className="display-1">Game Development</h1>
          <h3 className="display-4">Currently Under Development</h3>
          <p className="lead">We will keep you updated!</p>
        </div>
      </div>
    );
  }
}

export default GameDev;
