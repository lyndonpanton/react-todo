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
				<Button type="Mark All" />
				<Button type="Delete Marked" />
				<Button type="Delete All" />
			</div>
		);
	}
};

export default Buttons;