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

var wfh, atOffice, totalWorking=0, total;

function Render1() {
  return ReactDOM.render(<Icons3 />, document.getElementById("root"));
}

function Render2() {
  totalWorking = 0;
  axios.get('http://localhost:5000/page1/')
   .then(res => {
    total = res.data.length;
    var filterStatus = {
      filter: 'At Office'
    }

   axios.post('http://localhost:5000/page1/findByFilter', filterStatus)
   .then(res => {
     atOffice = res.data.length;
     console.log("at office:"+atOffice);
     totalWorking = totalWorking + atOffice;
     console.log(totalWorking);
  })
   .catch(err => console.log("errorrr--->>in filtering"));

   filterStatus = {
    filter: 'Working From Home'
  }

    axios.post('http://localhost:5000/page1/findByFilter', filterStatus)
    .then(res => {
      wfh = res.data.length;
      console.log("wfh:"+wfh);
      totalWorking = totalWorking + wfh;
      console.log(totalWorking);
      var details = {
        totalEmployees: total,
        working: totalWorking
      }
      console.log(details);
      ReactDOM.render(<Dashboard employees = {details}/>, document.getElementById("root"));
    })
    .catch(err => console.log("errorrr--->>in filtering"));


    //ReactDOM.render(<Dashboard totalEmployees = {res.data.length}/>, document.getElementById("root"));
  })
   .catch(err => {console.log("errorrr");});
  //return ReactDOM.render(<Dashboard />, document.getElementById("root"));
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
