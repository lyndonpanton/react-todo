import React from "react";

const Button = (props) => {
	const type = props.type;
	const styles = {
		margin: "2px",
		borderRadius: "0",
		fontFamily: "Palatino, Palatino Linotype, Palatino LT STD, Book Antiqua, Georgia, serif"
	};

	return (
		<button style={styles} onClick={(event) => props.handleClick(event)}>{type}</button>
	);
}

export default Button;