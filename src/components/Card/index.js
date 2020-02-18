import React from "react";
import "./style.css";

function Card(props) {
	return (
		<div className="card">
			<div className="card-image">
				<figure className="image is-4by3">
					<img
						src="https://bulma.io/images/placeholders/1280x960.png"
						alt="Profile"
					/>
				</figure>
			</div>
			<div className="card-content">
				<div className="media-content">
					<p className="title is-4">{props.name}</p>
					<p className="subtitle is-6">{props.title}</p>
					<p className="subtitle is-6">Salary: {props.salary}</p>
					<p className="subtitle is-6">Age: {props.age}</p>
				</div>
			</div>
		</div>
	);
}

export default Card;
