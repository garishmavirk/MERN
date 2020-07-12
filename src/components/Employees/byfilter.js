import React from "react";
import Card from "./Card";
import employees from "./employees";
import Header from "../Header";
import "./employeesStyles.css";
import Fetch from "./fetchDetails";

function ByFilter(user) {
  console.log(user.user[0])

  function createCard(user1){
    return (
    <Card 
    name={user1.empName}
    img={employees[0].imgUrl}
    tel={user1.phone}
    status={user1.status} />);
  }

  function loop(user){
  return (
        <div>
          {user.user.map(createCard)}
        </div>
      );
    }


  return (
    <div className="backemployees">
      <Header />
      <div class="right">
        <Fetch />
      </div>
      <h1 className="heading">My employees</h1>
      
      <div class="left">
        {loop(user)}
      </div>
    </div>
  );
}

export default ByFilter;