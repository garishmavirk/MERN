import React from "react";
import ReactDOM from "react-dom";
import "./statusStyles.css";
import status from "./status.png";
import geolocation from "./geolocation.png";
import calander from "./calander.png";
import Header from "../Header";
import Status from "../Employees/Status";
import GeoLocation from "../GeoLocation/geolocation";
import RenderCalander from "../Calander/calander";
import ReactCalendar from "../Calander/calander";

export default function Icons3() {
  var name = "Fella";
  function RenderStatus() {
    return ReactDOM.render(<Status />, document.getElementById("root"));
  }
  function RenderGeoLocation() {
    return ReactDOM.render(<GeoLocation />, document.getElementById("root"));
  }
  function RenderCalander() {
    return ReactDOM.render(<ReactCalendar />, document.getElementById("root"));
  }

  return (
    <div className="Status">
      <Header />
      <p class="welcome">Welcome {name}!</p>
      <table class="iconsborder">
        <tbody>
          <tr>
            <td>
              <button className = "button" onClick={RenderStatus}>
                <img class="imgstatus" src={status} alt="status" />
              </button>
            </td>
            <td>
              <button className = "button" onClick={RenderGeoLocation}>
                <img class="imgstatus" src={geolocation} alt="location" />
              </button>
            </td>
            <td>
              <button className = "button" onClick={RenderCalander}>
                <img class="imgstatus" src={calander} alt="calender" />
              </button>
            </td>
          </tr>
          <tr class="description">
            <td>
              <button className = "button" onClick={RenderStatus}>
                <h3>Status</h3>
              </button>
            </td>
            <td>
              <button className = "button" onClick={RenderGeoLocation}>
                <h3>GeoLocation</h3>
              </button>
            </td>
            <td>
              <button className = "button" onClick={RenderCalander}>
                <h3>Calender</h3>
              </button>
            </td>
          </tr>
          <tr class="description">
            <td>Get status of your Employees</td>
            <td>Get GeoLocation of your Employees</td>
            <td>Get attendance details of your Employees</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
