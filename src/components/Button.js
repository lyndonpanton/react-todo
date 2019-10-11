import React from "react";

const Button = (props) => {
	const buttonStyling = {
		flex: 1,

		margin: "5px",
		border: "#800080 solid 1px",
		borderRadius: "0",
		backgroundColor: props.color,
		fontWeight: 200,
		color: "#000000"
	};

	return (
		<button name={props.type} style={buttonStyling} onClick={props.handleClick}>{props.type}</button>
	);
};

export default Button;