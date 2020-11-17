import React, {useState} from 'react';

import {Button, Container, Row, Col }from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import PieChart from '../PieChart/pieChart'


const addSpending = (props) => {
    const currentVal = 1000
    const currentAvg = 1000
    const budget = 1500
    const titleName = props.titleName
    console.log('abuifgbwuifgi')
    console.log(props.titleName)
    const innerText = () =>{
        return(
            <Container >
                <Row>
                    <Col>
                        <Row>
                            <PieChart spending={currentVal} remaining={budget-currentVal}/>
                        </Row>
                    </Col>
                    <Col>
                        <Row><Col style={{fontSize: 14}}>{titleName}</Col></Row>
                        <Row>
                            <Col style={{fontSize: 10}}>Current</Col>
                            <Col style={{fontSize: 10}}>Monthly</Col>
                        </Row>
                        <Row>
                            <Col style={{fontSize: 10}}>{currentVal}</Col>
                            <Col style={{fontSize: 10}}>{currentAvg}</Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            
        )
    }
    return(
            <Button className='btn btn-lg btn-primary'>{innerText()}</Button>
    )
}

export default addSpending;
