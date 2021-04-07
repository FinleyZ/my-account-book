import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Calendar from '../Calendar/Calendar'
import Transactions from '../Transations/Transactions'
import Charts from '../Charts/Charts'

const DataDisplay = (props) => {
	const [CurrentDate , setCurrentDate] = useState(new Date());


	const dateParsing = (dateObj) => {
		const monthNames = ["01", "02", "03", "04", "05", "06",
        "07", "08", "09", "10", "11", "12"];
    const tempDateObj = dateObj;
    const month = monthNames[tempDateObj.getMonth()];
    const day = String(tempDateObj.getDate()).padStart(2, '0');
    const year = tempDateObj.getFullYear();
    const output = month  + '/'+ day  + '/' + year;
		return output
	};

	const parsedDate =  dateParsing(CurrentDate)

	console.log(parsedDate)
	return (
		<Container fluid className="h-100" style={{overflow: "scroll"}}>
		<Row className="h-50 pt-2" lg="12">
			<Col /*className="bg-success"*/ lg="6" md="6" style={{height: "475px"}}>
				<Calendar
				date={CurrentDate}
				setDate={setCurrentDate}
				/>
			</Col>
			<Col className="bg-warning " lg="6" md="6" style={{height: "475px"}}>
				<Transactions 
					monthlyData= {props.monthlyData} 
					selectDate = {parsedDate}
				/>
			</Col>
		</Row>
		
		<Row className="h-50" lg="12">
			<Col className="bg-info " lg="6" md="6" style={{height: "475px"}}>
				this is Data
			</Col>
			
			<Col /*className="bg-secondary"*/ lg="6" md="6" style={{height: "475px"}}>
				<Charts/>
			</Col>
		</Row>
	</Container>
	)
}

export default DataDisplay
