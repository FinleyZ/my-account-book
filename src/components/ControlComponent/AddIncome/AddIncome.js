import React, {useState} from 'react';
import { Container, Row, Col, Modal, InputGroup, FormControl}from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import PieChart from '../PieChart/pieChart'
import Aux from '../../../hoc/AuxProject'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';





export const AddIncome = (props) => {

    const [IncomeMoney, ChangeIncome] = useState(0)
    const [Budget, SetBudget] = useState(props.monthlyData[0].budget);
    const [value,ChangeValue]= useState(0);

    var currentIncomeAvg = 4329.68

    function GetNbrofTransactionsPerAccount(accountNumber){
        return Object.keys(props.monthlyData[0].account[accountNumber].transaction).length
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

    var IncomeComment=showValueTag("input",0);
    var IncomeCash=parseFloat(showValueTag("input",1));
    var IncomeType=showValueId("IncomeSelectType");
    var IncomeCateg=showValueId("IncomeSelectCateg");
    var IncomeDate=SelectDate;
    console.log(IncomeComment,IncomeCash,IncomeType,IncomeCateg,IncomeDate);
    AddNewIncome(IncomeType, IncomeCateg, IncomeDate, IncomeCash, IncomeComment);
    console.log(props.monthlyData[0]);
    ChangeIncome(IncomeMoney+IncomeCash);
console.log(IncomeMoney);
SetBudget(props.monthlyData[0].budget);
reloadFinance("AssetFinance",Math.round(parseFloat(props.monthlyData[0].asset)*10)/10);
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
                            {props.isShown ? <PieChart spending={Math.round(parseFloat(Budget)*100)/100-Math.round(parseFloat(IncomeMoney)*100)/100} remaining= {Math.round(parseFloat(IncomeMoney)*100)/100}/> : null}
                        </Row>
                    </Col>
                    <Col lg='8'>
                        <Row><Col className="mt-1 font-weight-bold" style={{fontSize: 14}}>{titleName}</Col></Row>
                        {props.isIncome ?

                                    <Row>
                                        <Col className="mt-2" style={{fontSize: 12}}>Current</Col>
                                        <Col className="mt-2" style={{fontSize: 12}}>Monthly Avg</Col>
                                    </Row>
                                    : null
                                    }

                        {props.isIncome ?

                                    <Row>
                                        <Col className="mt-0" style={{fontSize: 12}} id="income money">${Math.round(parseFloat(IncomeMoney)*100)/100}</Col>
                                        <Col className="mt-0" style={{fontSize: 12}}>${currentIncomeAvg}</Col>
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
                    {props.isIncome ?
                      <InputGroup>
                      <InputGroup>
                            <InputGroup.Prepend>
                            <InputGroup.Text>Comment</InputGroup.Text>
                            </InputGroup.Prepend>
                            <input id="IncomeComment" />
                        </InputGroup>
                      <InputGroup >
                          <InputGroup.Prepend>
                          <InputGroup.Text>$CAD</InputGroup.Text>
                          </InputGroup.Prepend>
                          <input  type="text" />
                      </InputGroup>
                      <InputGroup>
                          <InputGroup.Prepend>
                          <select className="browser-default custom-select" defaultValue="default" id="IncomeSelectType">
                          <option value="default" disabled>Choose Account Number</option>
                                <option value="0"> 0</option>
                                <option value="1">  1</option>
                                <option value="2">  2</option>

                          </select>

                          </InputGroup.Prepend>

                      </InputGroup>
                      <InputGroup>
                          <InputGroup.Prepend>
                          <select className="browser-default custom-select" defaultValue="default" id="IncomeSelectCateg">
                              <option value="default" disabled>Choose Category</option>
                              <option value="1">MISC</option>
                              <option value="2">Job Salary</option>
                              <option value="3">Investments</option>
                              <option value="4">Incentives/Awards</option>
                          </select>

                          </InputGroup.Prepend>

                      </InputGroup>

                      <InputGroup>
                          <InputGroup.Prepend>
                          <select className="browser-default custom-select" defaultValue="default" id="IncomeSelectFreq">
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

export default AddIncome;
