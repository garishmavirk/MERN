import React from "react";
import ReactDOM from "react-dom";
import img from "./2.png";
import "./Dashboard.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Icons3 from "./Home/Icons3";
import Dashboard from "./Dashboard";

function Render1() {
  return ReactDOM.render(<Icons3 />, document.getElementById("root"));
}

function Render2() {
  return ReactDOM.render(<Dashboard />, document.getElementById("root"));
}

function Header() {
  return (
    <header>
      <img src={img} />
      <div class="menu">
        <button onClick={Render1}>Home</button>
        <button onClick={Render2}>Dashboard</button>
      </div>
    </header>
  );
}

export default Header;
