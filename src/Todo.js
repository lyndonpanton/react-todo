import React from "react";

class Todo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const todos = this.props.todos.map((key, index) => {
			return (
				<li key={index} className="todo">
					<input className="check" type="checkbox" name={"check-" + index} onClick={(event) => this.props.checkTodo(event, index)} />
					<span className="todo-value">{ this.props.todos[index].value }</span>
					<div className="cross" onClick={(event) => this.props.handleClick(index)} >
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