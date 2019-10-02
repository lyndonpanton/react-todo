import React from "react";

class Button extends React.Component {
	render() {
		const type = this.props.type;

		return (
			<button onClick={(event) => this.props.clearCheck(event)}>{type}</button>
		);
	}
}

export default Button;