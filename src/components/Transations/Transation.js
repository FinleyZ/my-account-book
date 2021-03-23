import React from 'react'

const Transation =() => {
	return(
		<Container>
			<Row>
				<select className="browser-default custom-select" defaultValue="default">
          <option value="default" disabled>Choose Category</option>
					{categorys.map((category, index) =>(
						<option key={category+ index} value={category}> {category} </option>
					  ))};
        </select>
			</Row>
			<Row>

			</Row>
		</Container>
	)

};
export default Transation