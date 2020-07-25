import React from 'react';
import "./Dashboard.css";

import { Chart, SeriesTemplate, CommonSeriesSettings, Title } from 'devextreme-react/chart';
//import { dataSource } from './data.js';

function BarGraph1(props) {
  console.log("inside bar graph function:"+props.number.o);
  const dataSource = [
    { status: 'Working From Home', number: props.number.h },
    { status: 'At Office', number: props.number.o },
    { status: 'On Leave', number: props.number.l },
    { status: 'On Sick Leave', number: props.number.sl },
    { status: 'Business Trip', number: props.number.b }
  ];
      return (
      <Chart
        id="chart"
        palette="Soft"
        dataSource={dataSource}>
        <CommonSeriesSettings
          argumentField="status"
          valueField="number"
          type="bar"
          ignoreEmptyPoints={true}
        />
        <SeriesTemplate nameField="status" />
        <Title
          text="Status Of Employees"
          subtitle="as of 24 July 2020"
        />
      </Chart>
    );
  }


export default BarGraph1;