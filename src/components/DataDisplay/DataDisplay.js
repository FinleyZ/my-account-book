import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export const DataDisplay = () => {
	return (
		<Container fluid className="h-100" style={{overflow: "scroll"}}>
			<Row className="h-50 bg-success " lg="12">
				<Col className="bg-success" lg="6" md="6" style={{minHeight: "350px"}}>this is Calander</Col>
				<Col className="bg-warning" lg="6" md="6" style={{minHeight: "350px"}}>this is Transactions </Col>
			</Row>
			
			<Row className="h-50" lg="12">
				<Col className="bg-info" lg="6" md="6" style={{minHeight: "350px"}}>this is Data</Col>
				<Col className="bg-secondary" lg="6" md="6" style={{minHeight: "350px"}}>this is Graph</Col>
			</Row>
		</Container>

	)
}

export default DataDisplay
