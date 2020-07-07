import React from "react";
import { Bar } from "react-chartjs-2";
import "./Dashboard.css";

const state = {
  labels: [
    "At Office",
    "Working from Home",
    "On Leave",
    "Sick Leave",
    "Business Trip"
  ],
  datasets: [
    {
      label: "Number of Employees",
      backgroundColor: "rgba(240, 240, 214, 1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [20, 60, 6, 4, 0]
    }
  ]
};

export default class BarGraph extends React.Component {
  render() {
    return (
      <div class="bargraph">
        <Bar
          data={state}
          options={{
            title: {
              display: true,
              text: "Employees status",
              fontSize: 20
            },
            legend: {
              display: true,
              position: "right"
            }
          }}
        />
      </div>
    );
  }
}
