import React, {useState} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ControlComponent from '../../components/ControlComponent/ControlComponent'
import DataDisplay from '../../components/DataDisplay/DataDisplay'
import Navigation from '../../components/Navbar/Navbar'

import monthlyDummyData from '../../components/DummyData/Dummydata.json'



const MyAccountBook = () =>{
	const [monthlyData , setMonthlyData] = useState(monthlyDummyData);
	//const [CurrentAccount , setCurrentAccount] = useState();
	
	//console.log(monthlyData[0]);

	return(
		// <Container fluid className="h-92">
		<Container fluid className="h-100" style={{overflow: "scroll"}}>
			<Navigation/>
			<Row className="h-100">
				<Col className="bg-primary" lg="3" style={{minHeight: "500px"}}>
				<ControlComponent monthlyData = {monthlyData} setData={setMonthlyData}/>
				</Col>

				<Col className="bg-light" lg="9" style={{borderRadius: "2rem 2rem 0 0"} }>
				<DataDisplay monthlyData={monthlyData} />
				</Col>
			</Row>



		</Container>
	)
}

export default MyAccountBook
