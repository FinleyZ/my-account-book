import React, {useState} from 'react';
import { Container, Row, Col, Modal, InputGroup, FormControl}from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import PieChart from '../PieChart/pieChart'
import Aux from '../../../hoc/Aux'

const AddSpending = (props) => {
    const currentVal = 1000
    const currentAvg = 1000
    const budget = 1500
    const titleName = props.titleName
    const [clicked, handleClick] = useState(false)
    const handleShow = () => handleClick(true)
    const handleClose = () => handleClick(false)
    const innerText = () =>{
        return(
            <Container >
                <Row>
                    <Col lg='4'>
                        <Row>
                            {props.isShown ? <PieChart spending={currentVal} remaining={budget-currentVal}/> : null}
                        </Row>
                    </Col>
                    <Col lg='8'>
                        <Row><Col className="mt-1 font-weight-bold" style={{fontSize: 14}}>{titleName}</Col></Row>
                        {props.isCompare ? 
                                    <Row>
                                        <Col className="mt-2" style={{fontSize: 12}}>Last Month</Col>
                                    </Row>
                                    :
                                    <Row>
                                        <Col className="mt-2" style={{fontSize: 12}}>Current</Col>
                                        <Col className="mt-2" style={{fontSize: 12}}>Monthly</Col>
                                    </Row>
                                    }
                        
                        {props.isCompare ? 
                                    <Row>
                                        <Col className="mt-0" style={{fontSize: 12}}>${currentVal}</Col>
                                    </Row>
                                    :
                                    <Row>
                                        <Col className="mt-0" style={{fontSize: 12}}>${currentVal}</Col>
                                        <Col className="mt-0" style={{fontSize: 12}}>${currentAvg}</Col>
                                    </Row>
                                    }
                    </Col>
                </Row>
            </Container>
            
        )
    }
    
    return(
        <Aux>
            <style type="text/css">
            {`
                .btn-flat {
                background-color: purple;
                color: white;
                }
            `}
            </style>
            <Button 
                className="mt-3 mb-3 w-100" 
                
                variant={props.btnColor} 
                style={{
                    borderRadius: "1.5rem 0 1.5rem 1.5rem",
                    height:'125px'
                }} 
                onClick={handleShow}
                >
                    {innerText()}
            </Button>
            <Modal show={clicked&&!props.isCompare} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{props.titleName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.isIncome ? 
                        <InputGroup>
                            <InputGroup.Prepend>
                            <InputGroup.Text>$</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl placeholder="Amount"/>
                        </InputGroup> : null
                    }
                
                    {props.isSpending ? 
                        <InputGroup>
                            <InputGroup.Prepend>
                            <select className="browser-default custom-select" defaultValue="default">
                                <option value="default" disabled>Choose your option</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select> 
                            <InputGroup.Text>$</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl placeholder="Amount"/>
                        </InputGroup> 
                        : null
                    }
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Apply
                </Button>
                </Modal.Footer>
            </Modal>
        </Aux>
    )
}

export default AddSpending;
