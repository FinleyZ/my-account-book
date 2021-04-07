import React,{useState}from 'react' ;

import {ButtonGroup} from 'react-bootstrap'
import AddSpending from './AddSpending/AddSpending'
import AddIncome from './AddIncome/AddIncome'
import FinanceInfo from '../../components/FinanceInfo/FinanceInfo'
import Budget from './Budget/Budget'
import Compare from './Compare/Compare'
import {Container, Row, Col} from 'react-bootstrap'
const ControlComponent = (props) => {

 let monthlyData = props.monthlyData

 


//Function updateAsset


    return (
        <Container>
          <FinanceInfo monthlyData={props.monthlyData}/>

          <Row>
        		<ButtonGroup vertical>
                <Budget monthlyData={props.monthlyData} titleName='Set Monthly Budget'btnColor='info' isBudget/>
                <AddSpending  monthlyData={props.monthlyData} UpdateData={props.setData} titleName='Add Spending' btnColor='flat' isShown isSpending/>
                <AddIncome  monthlyData={props.monthlyData} UpdateData={props.setData} titleName='Add Income' btnColor='success' isIncome/>
                <Compare  monthlyData={props.monthlyData} titleName='Compare' btnColor='danger' Compare/>
        		</ButtonGroup>
            </Row>
        </Container>
        )
}

export default ControlComponent;
