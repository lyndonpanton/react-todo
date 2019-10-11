import React from "react";

class Todo extends React.Component {
	handleCheck = (event, index) => {
		this.props.handleCheck(index);
	}

	handleDelete = (event, index) => {
		this.props.handleDelete(index);
	}

	render() {
		const todoStyling = {
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",

			border: "#DADADA solid 1px",
			padding: "8px 10px",
			textAlign: "center"
		};

		const checkStyling = {
			display: "flex",
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",

			border: "none",
			borderRadius: "50%",
			width: "40px",
			height: "40px",
			backgroundColor: "#00CC00"
		};

		const crossStyling = Object.assign({}, checkStyling, {
			backgroundColor: "#FF0000",
			color: "#FFFFFF !important"
		});

		const todos = this.props.todos.map((todo, index) => {
			let todoCheckedStyling;
			if (todo.checked) {
				todoCheckedStyling = Object.assign({}, todoStyling, {
					opacity: 0.6,
					textDecoration: "line-through",
					color: "#CACACA"
				});
			}

			return (
				<li key={index} style={todoCheckedStyling || todoStyling}>
					<button style={checkStyling} onClick={(event) => this.handleCheck(event, index)}>&#x2713;</button>
					<span>{this.props.todos[index].value}</span>
					<button style={crossStyling} onClick={(event) => this.handleDelete(event, index)}>X</button>
				</li>
			);
		});

		const listStyling = {
			listStyleType: "none",
			padding: 0
		}

		return (
			<ul style={listStyling}>
				{ todos }
			</ul>
		);
	};
};

export default Todo;