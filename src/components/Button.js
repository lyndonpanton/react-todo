import React from "react";

const Button = (props) => {
	const buttonStyling = {
		flex: 1
	};

	return (
		<button name={props.type} style={buttonStyling} onClick={props.handleClick}>{props.type}</button>
	);
};

export default Button;