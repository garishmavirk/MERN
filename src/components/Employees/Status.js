import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import employees from "./employees";
import Header from "../Header";
import "./employeesStyles.css";
import Fetch from "./fetchDetails";
import ByFilter from "./byfilter";
import axios from "axios";

function Status() {
  function Render(){
  axios.get('http://localhost:5000/page1/')
   .then(res => {
     console.log("data correctly fetched" + res.data);
     const data = res.data;
    ReactDOM.render(
      <ByFilter
      user = {res.data}
       />, document.getElementById("root"));
  })
   .catch(err => console.log("errorrr--->>in displaying all"));
}

  return (
    <div className="backemployees">
      <Header />
      <div class="right">
        <Fetch />
      </div>
      <div class="left">
      <h1 className="heading">My employees</h1>
      {Render()}
      </div>
    </div>
  );
}

export default Status;
