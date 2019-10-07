import React from "react";

const Button = (props) => {
	const type = props.type;
	const styles = {
		borderRadius: "0",
		fontFamily: "Palatino, Palatino Linotype, Palatino LT STD, Book Antiqua, Georgia, serif"
	};

	return (
		<button style={styles} onClick={(event) => props.clearChecked(event)}>{type}</button>
	);
}

export default Button;