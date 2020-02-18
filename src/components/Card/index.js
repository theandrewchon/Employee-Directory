import React from "react";
import "./style.css";

function Card(props) {
	return (
		<div class="card">
			<div class="card-image">
				<figure class="image is-4by3">
					<img
						src="https://bulma.io/images/placeholders/1280x960.png"
						alt="Placeholder image"
					/>
				</figure>
			</div>
			<div className="card-content">
				<div class="media-content">
					<p class="title is-4">{props.name}</p>
					<p class="subtitle is-6">{props.title}</p>
				</div>
			</div>
		</div>
	);
}

export default Card;
