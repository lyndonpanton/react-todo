import React from "react";
import Button from "./Button";

class Buttons extends React.Component {
	render() {
		const divStyling = {
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between"
		};

		return (
			<div style={divStyling}>
				<Button type="Mark All" color="#AAFFAA" />
				<Button type="Delete Marked" color="#AADDFF" />
				<Button type="Delete All" color="#FFA500" />
			</div>
		);
	}
};

export default Buttons;