import React, { useState } from 'react';
import RCalendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
// const today = new Date();

// const lastWeek = new Date(today.getFullYear, today.getMonth(), today.getDate() - 7)


const Calendar = (props) => {
	// const a = props.date
  const [value, onChange] = useState(new Date())

	const dateUpdate = (dateToUpdate ) => {
		onChange(dateToUpdate)
		props.setDate(dateToUpdate)
	};

  return (

	<RCalendar 
		className="mx-auto h-100 w-100 border-0 bg-light"
    onChange={(value) => dateUpdate(value)}
    value={value}
		calendarType="ISO 8601"
		minDetail="decade"
		returnValue="start"	
		hover={new Date(2020, 0, 1)}
		/>
	)
}

export default Calendar;