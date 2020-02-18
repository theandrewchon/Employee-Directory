import React, { useState, useEffect } from "react";
import employee from "../employees.json";
import Card from "../components/Card";
import ColumnWrapper from "../components/ColumnWrapper/index.js";
import Column from "../components/Column/Column";

function Directory() {
	const [employees, setEmployees] = useState([]);

	useEffect(() => {
		setEmployees(employee);
	}, []);

	return (
		<div className="container">
			<ColumnWrapper>
				{employees.map(employee => (
					<Column>
						<Card
							name={employee.name}
							salary={employee.salary}
							id={employee.id}
							title={employee.title}
							age={employee.age}
						/>
					</Column>
				))}
			</ColumnWrapper>
		</div>
	);
}

export default Directory;
