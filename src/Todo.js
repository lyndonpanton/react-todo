import React from "react";

class Todo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		const todos = this.props.todos.map((key, index) => {
			const marked = this.props.todos[index].checked ? 
				{
					textDecoration: "line-through",
					color: "#CACACA"
				} : 
				{
					textDecoration: "none",
					color: "#000000"
				};

			return (
				<li key={index} className="todo" style={marked}>
					<input className="check" type="checkbox" name={"check-" + index} onClick={(event) => this.props.checkTodo(event, index)} />
					<span className="todo-value">{ this.props.todos[index].value }</span>
					<div className="cross" onClick={(event) => this.props.handlePress(index)} tabIndex="0">
						<div className="cross-left"></div>
						<div className="cross-right"></div>
					</div>
				</li>
			);
		});

		return (

			<ul className="todos">
				{ todos }
			</ul>
		);
	}
}

export default Todo;