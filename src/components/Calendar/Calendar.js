import React, { useState } from 'react';
import RCalendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
const today = new Date();

// const lastWeek = new Date(today.getFullYear, today.getMonth(), today.getDate() - 7)


const Calendar = () => {
  const [value, dateSelected] = useState(today)
  // console.log(value)
  return (
	<RCalendar 
		className="mx-auto h-100 w-100 border-0 bg-light"
    onChange={(value, event) => console.log(value)}
    value={value}
		calendarType="ISO 8601"
		minDetail="decade"
		returnValue="start"	
		hover={new Date(2020, 0, 1)}
		/>
	)
}

export default Calendar;