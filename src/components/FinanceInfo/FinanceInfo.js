import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'




export const FinanceInfo = (props) => {
	const asset=props.monthlyData[0].asset;
	const debt=props.monthlyData[0].debt;
	return (
		<Container fluid className="my-0 w-100" >


			<Row className="h-50" lg="6">
				<Col  lg="6" md="3" style={{minHeight: "50px", color:"rgb(255,255,255,0.5)", fontSize: 16,  opacity: 0.75}}> <strong>My asset</strong>  </Col>
				<Col  lg="6" md="3" style={{minHeight: "50px", color:"rgb(255,255,255,0.5)", fontSize: 16,  opacity: 0.75}}> <strong>My debt</strong> </Col>

			</Row>
			<Row className="h-50" lg="3">
				<Col  className="bg-dark " lg="6" md="3" style={{minHeight: "50px", fontSize: 20, color: 'white'}}>$ {asset}</Col>
				<Col className="bg-dark " lg="6" md="3" style={{minHeight: "50px", fontSize: 20,color: 'white'}}>$ {debt} </Col>

			</Row>

		</Container>

	)
}

export default FinanceInfo
