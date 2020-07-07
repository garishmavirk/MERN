import React from "react";
import Card from "./Card";
import employees from "./employees";
import Header from "../Header";
import "./employeesStyles.css";
import Fetch from "./fetchDetails";

function Status() {
  return (
    <div className="backemployees">
      <Header />
      <div class="right">
        <Fetch />
      </div>
      <h1 className="heading">My employees</h1>
      
      <div class="left">
        <Card
          name={employees[0].name}
          img={employees[0].imgURL}
          tel={employees[0].phone}
          email={employees[0].email}
        />
        <Card
          name={employees[1].name}
          img={employees[1].imgURL}
          tel={employees[1].phone}
          email={employees[1].email}
        />
        <Card
          name={employees[2].name}
          img={employees[2].imgURL}
          tel={employees[2].phone}
          email={employees[2].email}
        />
        <Card
          name={employees[0].name}
          img={employees[0].imgURL}
          tel={employees[0].phone}
          email={employees[0].email}
        />
        <Card
          name={employees[1].name}
          img={employees[1].imgURL}
          tel={employees[1].phone}
          email={employees[1].email}
        />
        <Card
          name={employees[2].name}
          img={employees[2].imgURL}
          tel={employees[2].phone}
          email={employees[2].email}
        />
        <Card
          name={employees[0].name}
          img={employees[0].imgURL}
          tel={employees[0].phone}
          email={employees[0].email}
        />
        <Card
          name={employees[1].name}
          img={employees[1].imgURL}
          tel={employees[1].phone}
          email={employees[1].email}
        />
        <Card
          name={employees[2].name}
          img={employees[2].imgURL}
          tel={employees[2].phone}
          email={employees[2].email}
        />
        <Card
          name={employees[0].name}
          img={employees[0].imgURL}
          tel={employees[0].phone}
          email={employees[0].email}
        />
        <Card
          name={employees[1].name}
          img={employees[1].imgURL}
          tel={employees[1].phone}
          email={employees[1].email}
        />
        <Card
          name={employees[2].name}
          img={employees[2].imgURL}
          tel={employees[2].phone}
          email={employees[2].email}
        />
        <Card
          name={employees[0].name}
          img={employees[0].imgURL}
          tel={employees[0].phone}
          email={employees[0].email}
        />
        <Card
          name={employees[1].name}
          img={employees[1].imgURL}
          tel={employees[1].phone}
          email={employees[1].email}
        />
        <Card
          name={employees[2].name}
          img={employees[2].imgURL}
          tel={employees[2].phone}
          email={employees[2].email}
        />
        <Card
          name={employees[0].name}
          img={employees[0].imgURL}
          tel={employees[0].phone}
          email={employees[0].email}
        />
        <Card
          name={employees[1].name}
          img={employees[1].imgURL}
          tel={employees[1].phone}
          email={employees[1].email}
        />
        <Card
          name={employees[2].name}
          img={employees[2].imgURL}
          tel={employees[2].phone}
          email={employees[2].email}
        />
      </div>
    </div>
  );
}

export default Status;
