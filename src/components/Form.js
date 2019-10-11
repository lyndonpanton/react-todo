import React from "react";

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ""
		};
	};

	handleChange = (event) => {
		this.setState({
			text: event.target.value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();

		if (this.state.text !== "") {
			this.props.handleSubmit(this.state.text);

			this.setState({
				text: ""
			});
		}
	};

	render() {
		const formStyling = {
			border: "#9A9A9A solid 1px"
		};

		const inputStyling = {
			marginTop: "8px",
			border: "none",
			borderRadius: "30px",
			height: "100%",
			width: "100%",
			paddingRight: "11%",
			paddingLeft: "11%",
			textAlign: "center"
		};

		return (
			<form className="form" onSubmit={this.handleSubmit} style={formStyling}>
				<input type="text" value={this.state.text} placeholder="Add todo..." onChange={this.handleChange} style={inputStyling} />
			</form>
		);
	};
};

export default Form;