import React from "react";
import ReactDOM from "react-dom";
import img from "./statusneo.png";
import setStatus from "./editStatusIcon.png";
import "./Dashboard.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Icons3 from "./Home/Icons3";
import Dashboard from "./Dashboard";
import { SetStatus } from "./Employees/setStatus/setStatus"; 
import axios from "axios";

function Render1() {
  return ReactDOM.render(<Icons3 />, document.getElementById("root"));
}

function Render2() {
  axios.get('http://localhost:5000/page1/')
   .then(res => {
    ReactDOM.render(<Dashboard totalEmployees = {res.data.length}/>, document.getElementById("root"));
  })
   .catch(err => {console.log("errorrr");});
 // return ReactDOM.render(<Dashboard />, document.getElementById("root"));
}

function Render3() {
  return ReactDOM.render(<SetStatus />, document.getElementById("root"));
}

function Header() {
  return (
    <header> 
      <div>
        <div class="hImg">
          <img className="hImg" src={img} />
        </div>
        <div className="menu">
          <button class="buttonHeader" onClick={Render1}>Home</button>
          <button class="buttonHeader" onClick={Render2}>Dashboard</button>
          <button class="buttonHeader" onClick={Render3} title="Set your status"><img class="setStatusImg" src={setStatus} /></button>
        </div>
      </div>
    </header>
  );
}

export default Header;
