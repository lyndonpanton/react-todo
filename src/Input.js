import React from "react";

class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ""
		}
	}

	handleInput = (event) => {
		this.setState({
			text: event.target.value
		});
	}

	render() {
		return (
			<div className="input">
				<input id="todo" type="text" name="todo" onChange={(event) => this.handleInput(event)} />

			</div>
		);
	}
};

export default Input;