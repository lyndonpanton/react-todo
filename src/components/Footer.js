import React from "react";

const Footer = (props) => {
	const { author, copyright, date } = props;

	const footerStyling = {
		position: "absolute",
		bottom: 0,

		width: "100%",
		paddingTop: "25px",
		backgroundColor: "#4488FF",
		textAlign: "center",
		color: "#FFFFFF"
	};

	return (
		<footer style={footerStyling}>
			<p>&copy; {date} {author} | {copyright}</p>
		</footer>
	);
};

export default Footer;