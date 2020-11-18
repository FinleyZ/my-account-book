import React from 'react'

import Logo from '../Logo/Logo'
import {Navbar, Nav} from 'react-bootstrap'


const Navigation = (props) => {

	return(
	<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
  <Navbar.Brand href="#home" ><Logo/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className=" mr-auto ml-auto" >
      <Nav.Item >
        <Nav.Link eventKey="Overview">Overview</Nav.Link> 
      </Nav.Item>
      <Nav.Item >
        <Nav.Link eventKey="Weekly">Weekly</Nav.Link> 
      </Nav.Item>
      <Nav.Item >
        <Nav.Link eventKey="Monthly">Monthly</Nav.Link> 
      </Nav.Item>
      <Nav.Item >
        <Nav.Link eventKey="Yearly">Yearly</Nav.Link> 
      </Nav.Item>
    </Nav>

    <Nav>
      <Nav.Item ><Nav.Link>User Name</Nav.Link></Nav.Item>
		 	<Nav.Item ><Nav.Link>Photo</Nav.Link></Nav.Item>
    </Nav>
  </Navbar.Collapse>
</Navbar>

	)
}

export default Navigation
