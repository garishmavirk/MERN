import React from "react";
import Card from "./Card";
import employees from "./employees";
import Header from "../Header";
import "./employeesStyles.css";
import Fetch from "./fetchDetails";

function ByName(user) {
  return (
    <div className="backemployees">
      <Header />
      <div class="right">
        <Fetch />
      </div>
      <h1 className="heading">My employees</h1>
      
      <div class="left">
        <Card
          name={user.name}
          img={employees[0].imgURL}
          tel={user.tel}
          status={user.status}
        />
        </div>
    </div>
  );
}

export default ByName;