import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/DropdownButton'

const Transations =() => {
	return(
		<Container>
			<Row>
				<Dropdown id="dropdown-basic-button" title="Dropdown button">
					<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
					<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  				<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
				</Dropdown>
			</Row>
			<Row>

			</Row>
		</Container>
	)

};

export default Transations