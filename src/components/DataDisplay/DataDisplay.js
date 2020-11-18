import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export const DataDisplay = () => {
	return (
		<Container fluid className="h-100">
			<Row className="h-50 bg-success">
				<Col className="bg-success ">this is Calander</Col>
				<Col className="bg-warning ">this is Transactions </Col>
			</Row>
			
			<Row className="h-50">
				<Col className="bg-info">this is Data</Col>
				<Col className="bg-secondary">this is Graph</Col>
			</Row>
		</Container>

	)
}

export default DataDisplay
