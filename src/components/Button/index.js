import React from "react";

function Button(props) {
	return (
		<span className="button" {...props}>
			{props.children}
		</span>
	);
}

export default Button;
