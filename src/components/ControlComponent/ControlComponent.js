import React,{useState}from 'react' ;

import {ButtonGroup} from 'react-bootstrap'
import AddSpending from './AddSpending/AddSpending'
import FinanceInfo from '../../components/FinanceInfo/FinanceInfo'
import Budget from '../../components/Budget/Budget'
import {Container, Row, Col} from 'react-bootstrap'
const ControlComponent = (props) => {

 let monthlyData = props.monthlyData
 

//Function updateAsset 


    return (
        <Container>
          <FinanceInfo monthlyData={props.monthlyData}/>
	        <Budget/>
          <Row>
        		<ButtonGroup vertical>

                <AddSpending  monthlyData={props.monthlyData} titleName='Add Spending' btnColor='flat' isShown isSpending/>
                <AddSpending  monthlyData={props.monthlyData} titleName='Add Income' btnColor='success' isIncome/>
                <AddSpending monthlyData={props.monthlyData} titleName='Compare' btnColor='info' Compare/>
        		</ButtonGroup>
            </Row>
        </Container>
        )
}

export default ControlComponent;
