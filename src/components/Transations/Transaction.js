import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'


const Transaction =(props) => {
	return(
		<Container className="pb-1" >
			<Row style={{background:"rgb(255,255,255,0.6)", borderRadius: "5px"}}>
				<Col xs={12} md={8} style={{overflow: "scroll"}}>
						{props.comment}
				</Col>
				<Col xs={6} md={4}>
						{props.amount}
				</Col>
			</Row>
		</Container>
	)

};
export default Transaction