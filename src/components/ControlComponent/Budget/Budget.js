import React, {useState} from 'react';
import { Container, Row, Col, Modal, InputGroup, FormControl}from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

import Aux from '../../../hoc/AuxProject'





export const Budget = (props) => {

    const [BudgetMoney, ChangeBudget] = useState(0)


    // for input money
  function showValueTag(tag,tagnbr){
    var value=document.getElementsByTagName(tag)[tagnbr].value;
  return value;
}

// overall function to handle transactions
function SetBudget(){
    try{
        var BudgetComment=showValueTag("input",0);
        var BudgetCash=parseFloat(showValueTag("input",1));
        console.log(BudgetComment,BudgetCash);
       var newBudget=BudgetCash;
        props.monthlyData[0].budget=newBudget;
        ChangeBudget(BudgetCash);

    }

    catch (error){

            console.log(error);

        }

}


    const titleName = props.titleName
    const [clicked, handleClick] = useState(false)
    const handleShow = () => handleClick(true)
    const handleClose = () => handleClick(false)
    const innerText = () =>{
        return(
            <Container >
                <Row>

                    <Col lg='12'>
                        <Row><Col className="mt-1 font-weight-bold" style={{fontSize: 14}}>{titleName}</Col></Row>
                        {props.isBudget ?

                                    <Row>
                                        <Col className="mt-2" style={{fontSize: 12}}>Current</Col>

                                    </Row>
                                    : null
                                    }

                        {props.isBudget ?

                                    <Row>
                                        <Col className="mt-0" style={{fontSize: 12}} id="budget money">${Math.round(parseFloat(BudgetMoney)*100)/100}</Col>

                                    </Row>
                                    : null
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
            <Modal show={clicked} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{props.titleName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.isBudget ?
                      <InputGroup>
                      <InputGroup>
                            <InputGroup.Prepend>
                            <InputGroup.Text>Comment</InputGroup.Text>
                            </InputGroup.Prepend>
                            <input id="IncomeComment" />
                        </InputGroup>
                      <InputGroup >
                          <InputGroup.Prepend>
                          <InputGroup.Text>Monthly budget in $CAD</InputGroup.Text>
                          </InputGroup.Prepend>
                          <input  type="text" />
                      </InputGroup>
                      </InputGroup>
                      : null
                    }

                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" data-target='Modal' onClick={() => SetBudget()}>
                    Apply
                </Button>
                </Modal.Footer>
            </Modal>
        </Aux>
    )
}

export default Budget;
