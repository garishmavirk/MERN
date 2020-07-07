import React from "react";
import "./Dashboard.css";
import total from "./total.png";
import onwork from "./onwork.png";
import employeeofmonth from "./employeeofmonth.png";
import Header from "./Header";
import BarGraph from "./Graph";

function Dashboard() {
  return (
    <div class="card">
      <Header />
      <div class="tables">
        <table cellspacing="4rem">
          <tbody>
            <tr>
              <td rowspan="2">
                <img class="imgtotal" src={total} />
              </td>
              <td>
                Total Number of Employees
                <hr />
              </td>
            </tr>
            <tr>
              <td>90</td>
            </tr>
          </tbody>
        </table>

        <table cellspacing="4rem">
          <tbody>
            <tr>
              <td rowspan="2">
                <img class="imgtotal" src={onwork} />
              </td>
              <td>
                Employees on work
                <hr />
              </td>
            </tr>
            <tr>
              <td>80</td>
            </tr>
          </tbody>
        </table>

        <table cellSpacing="4rem">
          <tbody>
            <tr>
              <td rowspan="2">
                <img class="imgtotal" src={employeeofmonth} />
              </td>
              <td>
                Employee of the month
                <hr />
              </td>
            </tr>
            <tr>
              <td>Fella</td>
            </tr>
          </tbody>
        </table>
      </div>
      <BarGraph />
    </div>
  );
}
export default Dashboard;
