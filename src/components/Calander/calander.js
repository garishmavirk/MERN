import React, { Component, useState } from 'react';
import Calendar from 'react-calendar';
import "./calendar.css";
import "react-calendar/dist/Calendar.css";
import Header from "../Header";

const ReactCalendar = () => {
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);

    };

    return(
        <div class="calendar">
            <Header />
            <h1>Calendar</h1>
            <div class="cal">
                <Calendar onChange={onChange} value={date}/>
                {console.log(date)}
                {date.toDateString()}
            </div>
            <div className="scheduler">
                
            </div>
        </div>
    );
};

export default ReactCalendar;