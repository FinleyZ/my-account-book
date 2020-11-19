import React from 'react';

import {ButtonGroup} from 'react-bootstrap'
import AddSpending from './AddSpending/AddSpending'
const ControlComponent = () => {
    return (
        // <Container>
        //     <Row>
        <ButtonGroup vertical>
                <AddSpending titleName='Add Spending' btnColor='primary' isShown isSpending/>
                <AddSpending titleName='Add Income' btnColor='success' isIncome/>
                <AddSpending titleName='Compare' btnColor='info' isCompare/>
        </ButtonGroup>
                
        //     </Row>
        // </Container>
        )
}

export default ControlComponent;