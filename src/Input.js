import React from "react";
import Plus from "./Plus";

class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ""
		};
	};

	handleInput = (event) => {
		this.setState({
			text: event.target.value
		});
	};

	handleSubmit = (event) => {
		if (event.keyCode === 13 && event.target.value !== "") {
			this.props.handleSubmit(event);

			this.setState({
				text: ""
			});
		}
	};

	render() {
		return (
			<div className="input" onKeyUp={(event) => this.handleSubmit(event)}>
				<input id="todo" type="text" name="todo" value={this.state.text} placeholder="Add todo..." onChange={this.handleInput} />
				<Plus />
			</div>
		);
	}
};

export default Input;