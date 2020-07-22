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
    const [status, setStatus] = useState("");
    const [empName, setempName] = useState("");
    const [empID, setempID] = useState(user.empID);
    const [loggedInUser, set] = useState()
    const [message, setMessage] = useState("");
    
    
    function onChangeempName(event){
        setempName(event.target.value);
        console.log(event.target.value);
    }

    function onClick1(event){
        event.preventDefault();
        console.log("on clicking get attendance details by name");
        setStatus("");
      
      const user2 = {
        empName: empName
      }
      
      console.log(user2);
      console.log("user2.name" + user2.empName);
  
     axios.post('http://localhost:5000/page1/findByName', user2)
     .then(res => {
         setempID(res.data[0].empID);
         setMessage("Calendar record for "+empName);
         console.log("searching details for empID: "+res.data[0].empID); 
    })
     .catch(err => console.log("errorrr--->>in searching name"));
    }

    const onChange = date => {
        setDate(date);
        console.log("check on change "+empID);
        var user1 = {
            empID: empID,
            date: date.toDateString()
        }
        axios.post('http://localhost:5000/page3/find', user1)
        .then(res => {console.log("Fetching employee all statuses");
            display = "";
            res.data.map(data1 => {
            display = display+data1.status+'  ['+data1.time+"]\n";
            });
            setStatus(display);
            })
        .catch(err => {console.log("some errorrr in fetching emp status on date");});
    };

    return(
        <div class="calendar">
            <Header />
            <div class="calLeft">
            <h1>Calendar</h1>
            <div>
            <input type="text" id="calendarbyname" name="calendarbyname" placeholder=" Search attendance details by empName" onChange={onChangeempName} />
            <button class="getName" onClick={onClick1}>Search</button>
            </div>
            </div>
            <div class="calRight">
            <div class="cal">
                {message}
                <Calendar onChange={onChange} value={date}/>
                {console.log("same as before or not: "+date)}
                {date.toDateString()}
                <br /><br />
                {nl2br(status)}
            </div>
            </div>
        </div>
    );
};

export default ReactCalendar;