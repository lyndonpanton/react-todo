import React from "react";

const Button = (props) => {
	const type = props.type;

	return (
		<button onClick={(event) => props.clearChecked(event)}>{type}</button>
	);
}

export default Button;