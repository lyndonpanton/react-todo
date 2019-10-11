import React from "react";

const Header = (props) => {
	const headerStyling = {
		padding: "15px 0",
		backgroundColor: "#4488FF",
		color: "#FFFFFF"
	};

	const headingStyling = {
		margin: 0,
		textAlign: "center",
		color: "#FFFFFF"
	};


	return (
		<header style={headerStyling}>
			<h1 style={headingStyling}>{props.name}</h1>
		</header>
	);
};

export default Header;