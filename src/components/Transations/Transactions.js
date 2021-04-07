import React ,{useState}from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Transaction from './Transaction'


const categoroies = ["All Categories","Income", "MISC", "Expense", "Education", "Shopping", 
									 "Personal Care", "Health & Fitness", "Kids", "Food & Dining", 
									 "Investments", "Transport","Fees & Charges"];

const Transactions =(props) => {
	const [CurrentCategory , setCurrentAccount] = useState("All Categories");
	const selectDate = props.selectDate;
	// console.log(selectDate)

	const handleCategoroiesChange = (e) => setCurrentAccount(e.target.value)

	const monthlyTransactions = props.monthlyData[0].account[0].transaction;

	const displayTransactions = monthlyTransactions.filter(t => {
		if(CurrentCategory==="All Categories"){
			return (t.date === selectDate);
		}else{
			return ((t.date === selectDate)&&(t.category==CurrentCategory));
		}
	 });

	

	console.log(displayTransactions)
	console.log(CurrentCategory)
	return(
		<Container className= "h-100" >
				<select 
					className="browser-default custom-select" 
					defaultValue={"All Categories"}
					style={{width: "40%"}}
					onChange={e => handleCategoroiesChange(e)}
				>
          {/* <option value="default" disabled>Choose Category</option> */}
						{categoroies.map((category, index) =>(
							<option key={category+index} value={category}> {category } </option>
						))};
        </select>

				<Container className= "overflow-auto mt-2 " style ={{height:"90%"}}>
						{displayTransactions.map((transaction, index)=>(
							<Transaction key={index} amount = {transaction.amount} comment= {transaction.comment}/>
						))}
				</Container>
		</Container>
	)

};

export default Transactions