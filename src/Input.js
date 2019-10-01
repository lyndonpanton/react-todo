import React from "react";

class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ""
		}
	}

	render() {
		return (
			<div className="input">
				<input id="todo" type="text" name="todo" value={this.state.text} />

			</div>
		);
	}
};

export default Input;