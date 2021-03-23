import React from 'react';

import {ButtonGroup} from 'react-bootstrap'
import AddSpending from './AddSpending/AddSpending'
import FinanceInfo from '../../components/FinanceInfo/FinanceInfo'
import Budget from '../../components/Budget/Budget'
import {Container, Row, Col} from 'react-bootstrap'
const ControlComponent = () => {
    return (
        <Container>
          <FinanceInfo/>
	        <Budget/>
          <Row>
        		<ButtonGroup vertical>
                <AddSpending titleName='Add Spending' btnColor='flat' isShown isSpending/>
                <AddSpending titleName='Add Income' btnColor='success' isIncome/>
                <AddSpending titleName='Compare' btnColor='info' Compare/>
        		</ButtonGroup>
            </Row>
        </Container>
        )
}

export default ControlComponent;
