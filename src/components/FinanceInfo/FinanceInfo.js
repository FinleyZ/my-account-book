import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


const asset=500
const debt=1500

export const FinanceInfo = () => {
	return (
		<Container fluid className="my-0" >


			<Row className="h-25" lg="6">
				<Col  className="bg-info " lg="4" md="3" style={{minHeight: "50px", fontSize: 18, opacity: 0.75}}>My asset </Col>
				<Col className="bg-info " lg="4" md="3" style={{minHeight: "50px", fontSize: 18,  opacity: 0.75}}>My debt </Col>

			</Row>
			<Row className="h-25" lg="3">
				<Col  className="bg-info " lg="4" md="3" style={{minHeight: "50px", fontSize: 22, color: 'white'}}>$ {asset}</Col>
				<Col className="bg-info " lg="4" md="3" style={{minHeight: "50px", fontSize: 22,color: 'white'}}>$ {debt} </Col>

			</Row>

		</Container>

	)
}

export default FinanceInfo
