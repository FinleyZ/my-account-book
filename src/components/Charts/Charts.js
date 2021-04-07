import React , {useState}from 'react'
import {Tabs, Tab} from 'react-bootstrap'
import { Container} from 'react-bootstrap'
import LineChart from './LineChart'

const Charts =(props) => {
	const [key, setKey] = useState('1');

	return(
		<Container className= "h-100" >
				<Tabs
					id="controlled-tab-example"
					activeKey={key}
					onSelect={(k) => setKey(k)}
				>
					<Tab eventKey="1" title="1">
						<Container>
							<LineChart></LineChart>
						</Container>
						
					</Tab>
					<Tab eventKey="2" title="2">
					</Tab>
					<Tab eventKey="3" title="3">
						abc
					</Tab>
			</Tabs>
			<LineChart></LineChart>
		</Container>
	)

};

export default Charts