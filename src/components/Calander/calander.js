import React, { Component, useState } from 'react';
import Calendar from 'react-calendar';
import "./calendar.css";
import "react-calendar/dist/Calendar.css";
import Header from "../Header";
import { user } from "../Login";
import axios from "axios";
import nl2br from 'react-newline-to-break';

var display = "";

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
            display = "";
            res.data.map(data1 => {
                console.log(data1.status);
                console.log(data1.time);
                display = display+data1.status+'  ['+data1.time.slice(11,18)+"]\n";
            });
            console.log("check display\n"+display);
            setState(display);
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
                <br />
                {nl2br(status)}
            </div>
        </div>
    );
};

export default ReactCalendar;