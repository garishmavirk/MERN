import React, { useState } from 'react';
import Calendar from 'react-calendar';
import "./calendar.css";

const ReactCalendar = () => {
    const [date, setDate] = useState(new Date());

    const onChange = () => {
        setDate(date);
    };

    return(
        <div class="calendar">
            <div class="cal">
                <h1>Calendar</h1>
                <Calendar onChange={onChange} value={date} />
            </div>
        </div>
    );
};

export default ReactCalendar;