import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import DataDisplay from '../../components/DataDisplay/DataDisplay'
import Navigation from '../../components/Navbar/Navbar'
const MyAccountBook = () =>{
	
	return(
		// <Container fluid className="h-92">
		<Container fluid className="h-100" style={{overflow: "scroll"}}>
			<Navigation/>
			<Row className="h-100">
				<Col className="bg-primary" lg="3" style={{minHeight: "500px"}}>
				menu
				</Col>

				<Col className="bg-light" lg="9" style={{borderRadius: "2rem 2rem 0 0"} }>
				<DataDisplay/>
				</Col>
			</Row>



		</Container>
	)
}

export default MyAccountBook