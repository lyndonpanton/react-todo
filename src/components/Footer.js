import React from "react";

const Footer = (props) => {
	const { author, copyright, date } = props;

	return (
		<footer>
			<p>&copy; {date} {author} | {copyright}</p>
		</footer>
	);
};

export default Footer;