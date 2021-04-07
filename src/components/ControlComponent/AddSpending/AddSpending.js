import React, {useState} from 'react';
import { Container, Row, Col, Modal, InputGroup, FormControl}from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import PieChart from '../PieChart/pieChart'
import Aux from '../../../hoc/AuxProject'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';





export const AddSpending = (props) => {

    const [SpendingMoney, ChangeSpending] = useState(0);
    const [Budget, SetBudget] = useState(props.monthlyData[0].budget);
    const [value,ChangeValue]= useState(0);

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
      "amount": amount.toString(),
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
    props.monthlyData[0].account[accountNumber].transaction[TransCount]=AddSpendingJson(accountNumber, category, date, amount*-1, comment);
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

  var SelectDate="";


function SetDate(day){
    const monthNames = ["01", "02", "03", "04", "05", "06",
  "07", "08", "09", "10", "11", "12"];
    SelectDate=day;
    const month=monthNames[SelectDate.getMonth()];
    const date=String(SelectDate.getDate()).padStart(2, '0')
    SelectDate=  month +  "/" + date   + "/" + SelectDate.getFullYear();
    return SelectDate;
}

function reload(id, newContent){
    var container = document.getElementById(id);
    container.innerHTML=  newContent;
   //this line is to watch the result in console , you can remove it later
    console.log("Refreshed");
}

function reloadFinance(id, newContent){
    var container = document.getElementById(id);
    container.innerHTML=  "$" + newContent;
   //this line is to watch the result in console , you can remove it later
    console.log("Refreshed");
}


// overall function to handle transactions
function handleTransactions(){

        try{
            console.log(SpendingMoney);
            var SpendComment=showValueTag("input",0);
            var SpendMoney=showValueTag("input",1);
            var SpendType=showValueId("SpendSelectType");
            var SpendCateg=showValueId("SpendSelectCateg");
            var SpendDate=SelectDate;
            console.log(SpendComment,SpendMoney,SpendType,SpendCateg,SpendDate);
            AddNewSpending(SpendType, SpendCateg, SpendDate, SpendMoney, SpendComment);
            //console.log(props.monthlyData[0]);
            ChangeSpending(parseFloat(SpendingMoney)+parseFloat(SpendMoney));
            console.log(SpendingMoney);
            SetBudget(props.monthlyData[0].budget);
            reloadFinance("AssetFinance",Math.round(parseFloat(props.monthlyData[0].asset)*10)/10);
            ChangeValue(props.monthlyData);
            props.UpdateData(props.monthlyData);
            console.log(props.monthlyData[0].account[0].transaction);
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
                    <Col lg='4'>
                        <Row>
                            {props.isShown ? <PieChart spending={Math.round(parseFloat(Budget)*100)/100-Math.round(parseFloat(SpendingMoney)*100)/100} remaining= {Math.round(parseFloat(SpendingMoney)*100)/100}/> : null}
                        </Row>
                    </Col>
                    <Col lg='8'>
                        <Row><Col className="mt-1 font-weight-bold" style={{fontSize: 14}}>{titleName}</Col></Row>
                        {props.isSpending ?

                                    <Row>
                                        <Col className="mt-2" style={{fontSize: 12}}>Current</Col>
                                        <Col className="mt-2" style={{fontSize: 12}}>Monthly Avg</Col>
                                    </Row>
                                    : null
                                    }

                        {props.isSpending ?

                                    <Row>
                                        <Col className="mt-0" style={{fontSize: 12}} id="spending money">${Math.round(parseFloat(SpendingMoney)*100)/100}</Col>
                                        <Col className="mt-0" style={{fontSize: 12}}>${currentSpendingAvg}</Col>
                                    </Row>

                                    : null}
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


                    {props.isSpending ?
                        <InputGroup>
                        <InputGroup>
                            <InputGroup.Prepend>
                            <InputGroup.Text>Comment</InputGroup.Text>
                            </InputGroup.Prepend>
                            <input id="SpendComment" />
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Prepend>
                            <InputGroup.Text>$CAD</InputGroup.Text>
                            </InputGroup.Prepend>
                            <input id="SpendMoney" placeholder="amount"/>
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Prepend>
                            <select className="browser-default custom-select" defaultValue="default" id="SpendSelectType">
                                <option value="default" disabled>Choose Account Number</option>
                                <option value="0"> 0</option>
                                <option value="1">  1</option>
                                <option value="2">  2</option>

                            </select>

                            </InputGroup.Prepend>

                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Prepend>
                            <select className="browser-default custom-select" defaultValue="default" id="SpendSelectCateg">
                                <option value="default" disabled>Choose Category</option>
                                <option value="1">MISC</option>
                                <option value="2">Education</option>
                                <option value="3">Shopping</option>
                                <option value="4">Personal Care</option>
                                <option value="5">Health & Fitness</option>
                                <option value="6">Kids</option>
                                <option value="7">Food & Dining</option>
                                <option value="8">Investments</option>
                                <option value="9">Transport</option>
                                <option value="10">Fees & Charges</option>
                            </select>

                            </InputGroup.Prepend>

                        </InputGroup>

                        <InputGroup>
                            <InputGroup.Prepend>
                            <select className="browser-default custom-select" defaultValue="default" id="SelectSpending">
                                <option value="default" disabled>Choose Frequency</option>
                                <option value="1">Once</option>
                                <option value="2">Weekly</option>
                                <option value="3">Monthly</option>
                            </select>

                            </InputGroup.Prepend>

                        </InputGroup>
                        <InputGroup>
                        <InputGroup.Prepend>
                        <InputGroup.Text style={
                          {  height:'30px'}

                        }>Choose date</InputGroup.Text>

                        </InputGroup.Prepend>
                        <DayPickerInput onDayChange={day =>SetDate(day)} />


                        </InputGroup>
                        </InputGroup>
                        : null
                    }




                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" data-target='Modal' onClick={() => handleTransactions()}>
                    Apply
                </Button>
                </Modal.Footer>
            </Modal>
        </Aux>
    )
}

export default AddSpending;
