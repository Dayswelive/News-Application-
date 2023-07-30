import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/NavBar";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
      </div>
    );
  }
}
