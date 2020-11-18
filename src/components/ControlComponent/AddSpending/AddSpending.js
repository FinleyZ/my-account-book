import React, {useState} from 'react';

import { Container, Row, Col }from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
// import 'bootstrap/dist/css/bootstrap.min.css'
import PieChart from '../PieChart/pieChart'


const addSpending = (props) => {
    const currentVal = 1000
    const currentAvg = 1000
    const budget = 1500
    const titleName = props.titleName
    
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
            <Button 
                className="mt-3 mb-3" 
                variant={props.btnColor} 
                style={{
                    borderRadius: "1.5rem 0 1.5rem 1.5rem",
                    height:'125px'
                }} 
                >
                    {innerText()}
            </Button>
    )
}

export default addSpending;
