import React, {useState} from 'react';
import { Container, Row, Col, Modal, InputGroup, FormControl}from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import PieChart from '../PieChart/pieChart'
import Aux from '../../../hoc/AuxProject'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';




export const Compare = (props) => {

    const [SpendingMoney, ChangeSpending] = useState(0)



    var currentSpendingVal = 0
    var currentSpendingAvg = 1240.57

    function GetNbrofTransactionsPerAccount(accountNumber){
        return Object.keys(props.monthlyData[0].account[accountNumber].transaction).length
      }



function AddSpendingJson(accountNumber, category, date, amount, comment){
    var TransCount=GetNbrofTransactionsPerAccount(accountNumber);
    var id=TransCount;
    var JsonBody={
      "id": id,
      "date": date,
      "amount": amount*-1,
      "category": category,
      "comment": comment
    }

    return JsonBody;
  }

  function AddIncomeJson(accountNumber, category, date, amount, comment){
    var TransCount=GetNbrofTransactionsPerAccount(accountNumber);
    var id=TransCount;
    var JsonBody={
      "id": id,
      "date": date,
      "amount": amount,
      "category": category,
      "comment": comment
    }

    return JsonBody;
  }

function AddNewSpending(accountNumber, category, date, amount, comment){
    var newAmountTotal=0;
    var TransCount=GetNbrofTransactionsPerAccount(accountNumber);
    props.monthlyData[0].account[accountNumber].transaction[TransCount]=AddSpendingJson(accountNumber, category, date, amount, comment);
   newAmountTotal=parseFloat(props.monthlyData[0].asset.toString().replace(/,/, ''))-amount;
  props.monthlyData[0].asset=newAmountTotal;
  }


  function AddNewIncome(accountNumber, category, date, amount, comment){
    var newAmountTotal=0;
    var TransCount=GetNbrofTransactionsPerAccount(accountNumber);
    props.monthlyData[0].account[accountNumber].transaction[TransCount]=AddIncomeJson(accountNumber, category, date, amount, comment);
   newAmountTotal=parseFloat(props.monthlyData[0].asset.toString().replace(/,/, ''))+amount;
  props.monthlyData[0].asset=newAmountTotal;
  }

// for input money
  function showValueTag(tag,tagnbr){
        var value=document.getElementsByTagName(tag)[tagnbr].value;
      return value;
  }

  // for select drop down

  function showValueId(id){
    var x=document.getElementById(id);
    var value = x.options[x.selectedIndex].text;
    return value;
}

// for date

  var SelectDate1="";
  var SelectDate2="";
  var SelectDate3="";
  var SelectDate4="";

function SetDate1(day){
    SelectDate1=day;
    SelectDate1= SelectDate1.getDate() + "/" + (SelectDate1.getMonth() + 1) + "/" + SelectDate1.getFullYear();
    return SelectDate1;
}
function SetDate2(day){
    SelectDate2=day;
    SelectDate2= SelectDate2.getDate() + "/" + (SelectDate2.getMonth() + 1) + "/" + SelectDate2.getFullYear();
    return SelectDate2;
}
function SetDate3(day){
    SelectDate3=day;
    SelectDate3= SelectDate3.getDate() + "/" + (SelectDate3.getMonth() + 1) + "/" + SelectDate3.getFullYear();
    return SelectDate3;
}
function SetDate4(day){
    SelectDate4=day;
    SelectDate4= SelectDate4.getDate() + "/" + (SelectDate4.getMonth() + 1) + "/" + SelectDate4.getFullYear();
    return SelectDate4;
}

function reload(id, newContent){
    var container = document.getElementById(id);
    container.innerHTML=  newContent;
   //this line is to watch the result in console , you can remove it later
    console.log("Refreshed");
}


// overall function to handle transactions
function handleDates(){
    try{
    var IncomeDate1=SelectDate1;
    var IncomeDate2=SelectDate2;
    var IncomeDate3=SelectDate3;
    var IncomeDate4=SelectDate4;
    console.log(IncomeDate1,IncomeDate2,IncomeDate3,IncomeDate4);
    }
        catch (error){
            console.log(error);

        }


}

    var budget = 1000
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
                            {props.isShown ? <PieChart spending={SpendingMoney} remaining={budget+SpendingMoney}/> : null}
                        </Row>
                    </Col>
                    <Col lg='8'>
                        <Row><Col className="mt-1 font-weight-bold" style={{fontSize: 14}}>{titleName}</Col></Row>
                        {props.Compare ?
                                    <Row>
                                        <Col className="mt-2" style={{fontSize: 12}}>Last Month</Col>
                                    </Row>
                                    :
                                    null
                                    }

                        {props.Compare ?
                                    <Row>
                                        <Col className="mt-0" style={{fontSize: 12}}>${SpendingMoney}</Col>
                                    </Row>
                                    :
                                    null
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




                    {props.Compare ?
                      <InputGroup>
                      <InputGroup>

                      <InputGroup.Prepend>
                      <InputGroup.Text style={
                        {  height:'30px'}

                      }> Choose range 1 initial day</InputGroup.Text>

                      </InputGroup.Prepend>
                      <DayPickerInput  onDayChange={day =>SetDate1(day)} />



                      </InputGroup>

                      <InputGroup>

                      <InputGroup.Prepend>
                      <InputGroup.Text style={
                        {  height:'30px',
                          width:'209px'
                      }

                      }> Choose range 1 final day</InputGroup.Text>

                      </InputGroup.Prepend>
                      <DayPickerInput  onDayChange={day =>SetDate2(day)} />



                      </InputGroup>

                      <InputGroup>

                      <InputGroup.Prepend>
                      <InputGroup.Text style={
                        {  height:'30px'}

                      }> Choose range 2 initial day</InputGroup.Text>

                      </InputGroup.Prepend>
                      <DayPickerInput  onDayChange={day =>SetDate3(day)} />



                      </InputGroup>

                      <InputGroup>

                      <InputGroup.Prepend>
                      <InputGroup.Text style={
                        {  height:'30px',
                          width:'209px'
                      }

                    }> Choose range 2 final day</InputGroup.Text>

                      </InputGroup.Prepend>
                      <DayPickerInput  onDayChange={day  =>SetDate4(day)} />



                      </InputGroup>

                      </InputGroup>
                      : null
                    }


                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" data-target='Modal' onClick={() => handleDates()}>
                    Apply
                </Button>
                </Modal.Footer>
            </Modal>
        </Aux>
    )
}

export default Compare;
