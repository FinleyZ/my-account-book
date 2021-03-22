import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


const budget=1000

export const Budget = () => {
	return (
		<Container fluid className="my-0"  >

			<Row className="h-25" lg="6"  >
				<Col  className="bg-info " lg="6" md="3" style={{minHeight: "50px", fontSize: 18, opacity: 0.75}}>Your Budget </Col>


			</Row>
			<Row className="h-25" lg="6">
				<Col  className="bg-info " lg="6" md="3" style={{minHeight: "50px", fontSize: 22, color: 'white'}}>Monthly $ {budget}</Col>

			</Row>

		</Container>

	)
}

export default Budget
