import React, { Component, useState } from 'react';
import Calendar from 'react-calendar';
import "./calendar.css";
import "react-calendar/dist/Calendar.css";
import Header from "../Header";
import { user } from "../Login";
import axios from "axios";

const ReactCalendar = () => {
    const [date, setDate] = useState(new Date());
    const [status, setState] = useState("");
    
    
    const onChange = date => {
        setDate(date);
        var user1 = {
            empID: user.empID,
            date: date.toDateString()
        }
        console.log("check id and date======= "+user1.empID+" "+user1.date);
        axios.post('http://localhost:5000/page3/find', user1)
        .then(res => {console.log("Fetching employee all statuses");
            console.log(res.data);
            res.data.map(display => {
                console.log(display.status);
                console.log(display.time);
            });
            })
        .catch(err => {console.log("some errorrr in fetching emp status on date");});
    };

    return(
        <div class="calendar">
            <Header />
            <h1>Calendar</h1>
            <div class="cal">
                <Calendar onChange={onChange} value={date}/>
                {console.log("same as before or not: "+date)}
                {date.toDateString()}
            </div>
            <div className="scheduler">
                
            </div>
        </div>
    );
};

export default ReactCalendar;