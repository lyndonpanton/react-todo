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
				<Button handleClick={this.props.markAll} type="Mark All" color="#AAFFAA" />
				<Button handleClick={this.props.unMarkAll} type="Unmark All" color="#FFDDFF" />
				<Button handleClick={this.props.deleteMarked} type="Delete Marked" color="#AADDFF" />
				<Button handleClick={this.props.deleteAll} type="Delete All" color="#FFA500" />
			</div>
		);
	}
};

export default Buttons;