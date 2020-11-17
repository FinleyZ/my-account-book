import React from 'react';

import {ButtonGroup} from 'react-bootstrap'
import AddSpending from './AddSpending/AddSpending'
const ControlComponent = () => {
    return (
        // <Container>
        //     <Row>
        <ButtonGroup vertical>
                <AddSpending titleName='Add Spending'/>
                <AddSpending titleName='Add Income'/>
                <AddSpending titleName='Compare'/>
        </ButtonGroup>
                
        //     </Row>
        // </Container>
        )
}

export default ControlComponent;