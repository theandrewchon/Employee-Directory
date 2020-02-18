import React from "react";
import "./style.css";

function SearchForm(props) {
	return (
		<form className="search">
			<div>
				<label htmlFor="language">Search Employee Name:</label>
				<input
					value={props.search}
					onChange={props.handleInputChange}
					type="text"
					className="input"
					placeholder="Type in a search term to begin"
					id="term"
				/>
			</div>
		</form>
	);
}

export default SearchForm;
