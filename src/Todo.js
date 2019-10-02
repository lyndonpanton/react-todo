import React from "react";

class Todo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const todos = this.props.todos.map((key, index) => {
			return (
				<li key={index} className="todo">
					<span className="todo-value">{ this.props.todos[index].value }</span>
					<span className="todo-cross"></span>
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