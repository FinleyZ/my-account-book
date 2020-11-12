import React, { useState } from 'react';
import RCalendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
const today = new Date();

// const lastWeek = new Date(today.getFullYear, today.getMonth(), today.getDate() - 7)


const Calendar = () => {
    const [value, dateSelected] = useState(today)
    // console.log(value)
    return <RCalendar 
        onChange={dateSelected}
        value={value}
    />
    
}

export default Calendar;