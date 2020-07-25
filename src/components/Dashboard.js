import React from "react";
import "./Dashboard.css";
import total from "./total.png";
import onwork from "./onwork.png";
import employeeofmonth from "./employeeofmonth.png";
import Header from "./Header";
import BarGraph1 from "./bargraph";

var details = {
  o: 0,
  h: 0,
  l: 0,
  sl: 0,
  b: 0
}

function Dashboard(props) {
  console.log("inside dashboard: "+props.employees.totalEmployees+" working:"+props.employees.working);
  details = {
    o: props.employees.o,
    h: props.employees.h,
    l: props.employees.l,
    sl: props.employees.sl,
    b: props.employees.b
  }
  console.log("dashboard: "+details);
  return (
    <div class="dashboardCard">
      <Header />
      <div class="tables">
        <table cellspacing="4rem">
          <tbody>
            <tr>
              <td rowspan="2">
                <img class="imgtotal" src={total} />
              </td>
              <td class="tdwidth">
                Total Number of Employees
                <hr />
              </td>
            </tr>
            <tr>
              <td>{props.employees.totalEmployees}</td>
            </tr>
          </tbody>
        </table><br />

        <table cellspacing="4rem">
          <tbody>
            <tr>
              <td rowspan="2">
                <img class="imgtotal" src={onwork} />
              </td>
              <td class="tdwidth">
                Employees on work
                <hr />
              </td>
            </tr>
            <tr>
              <td>{props.employees.working}</td>
            </tr>
          </tbody>
        </table><br />

        <table cellSpacing="4rem">
          <tbody>
            <tr>
              <td rowspan="2">
                <img class="imgtotal" src={employeeofmonth} />
              </td>
              <td class="tdwidth">
                Employee of the month
                <hr />
              </td>
            </tr>
            <tr>
              <td>Fella</td>
            </tr>
          </tbody>
        </table><br />
      </div>
      <div class="dashboardLeft">
      <br /><br/>
      {console.log(details)}
      <BarGraph1 number = {details}/>
      <br />
      </div>
    </div>
  );
}
export default Dashboard;
