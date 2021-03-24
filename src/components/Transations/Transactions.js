import React ,{useState}from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Transaction from './Transaction'


const categoroies = ["All Categories","Income", "MISC", "Expense", "Education", "Shopping", 
									 "Personal Care", "Health & Fitness", "Kids", "Food & Dining", 
									 "Investments", "Transport","Fees & Charges"];

const Transactions =(props) => {
	const [CurrentCategory , setCurrentAccount] = useState();


const monthlyTransactions = props.monthlyData[0].account[0].transaction;

	console.log(monthlyTransactions)

	return(
		<Container className= "h-100" >
				<select 
					className="browser-default custom-select" 
					defaultValue="All Categorys" 
					style={{width: "40%"}}
				>
          {/* <option value="default" disabled>Choose Category</option> */}
						{categoroies.map((category, index) =>(
							<option key={category+index} value={category}> {category } </option>
						))};
        </select>

				<Container className= "overflow-auto mt-2 " style ={{height:"90%"}}>
						{monthlyTransactions.map((transaction, index)=>(
							<Transaction amount = {transaction.amount} comment= {transaction.comment}/>
						))}
				</Container>
			
		</Container>
	)

};

export default Transactions