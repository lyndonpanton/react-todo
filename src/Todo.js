import React from "react";

class Todo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const todos = this.props.todos.map((key, index) => {
			return (
				<li key={index} className="todo">
					{ this.props.todos[index].value }
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