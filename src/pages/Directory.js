import React, { useState, useEffect } from "react";
import employee from "../employees.json";
import Card from "../components/Card";
import ColumnWrapper from "../components/ColumnWrapper/index.js";
import Column from "../components/Column";
import SearchForm from "../components/SearchForm/index.js";
import Button from "../components/Button/index.js";

function Directory() {
	const [employees, setEmployees] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		if (search) {
			return;
		}
		setEmployees(employee);
	}, [employees]);

	const handleInputChange = event => {
		setSearch(event.target.value);
		const filtered = employees.filter(employee => {
			return employee.name.toLowerCase().includes(search.toLowerCase());
		});
		setEmployees(filtered);
	};
	const sortAge = () => {
		employees.sort((a, b) => a.age - b.age);
		setEmployees(employees);
	};

	const sortSalary = () => {
		employees.sort((a, b) => a.salary - b.salary);
		setEmployees(employees);
	};
	console.log("employees state", employees);
	console.log("search state", search);

	return (
		<div className="container">
			<SearchForm handleInputChange={handleInputChange}></SearchForm>
			<Button
				onClick={() => {
					sortAge();
				}}
			>
				Sort by Age
			</Button>
			<Button
				onClick={() => {
					sortSalary();
				}}
			>
				Sort by Salary
			</Button>
			<ColumnWrapper>
				{employees.map(employee => (
					<Column key={employee.id}>
						<Card
							name={employee.name}
							salary={employee.salary}
							title={employee.title}
							age={employee.age}
							picture={employee.picture}
						/>
					</Column>
				))}
			</ColumnWrapper>
		</div>
	);
}

export default Directory;
