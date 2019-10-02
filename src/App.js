import React from "react";
import Input from "./Input";
import Todo from "./Todo";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [

			]
		};
	}

	handleSubmit = (event) => {
		if (event.keyCode === 13 && event.target.value !== "") {
			const todos = this.state.todos;

			this.setState({
				todos: todos.concat({
					value: event.target.value
				})
			});
		}
	}

	removeTodo = (index) => {
		const todos = this.state.todos;

		this.setState({
			todos: todos.filter((todo, todoIndex) => {
				return index !== todoIndex;
			})
		});
	}

	render() {
		return (
			<div className="app">
				<h1>Hello React</h1>
				<Input handleSubmit={(event) => this.handleSubmit(event)} />
				<Todo todos={this.state.todos} handleClick={(event) => this.removeTodo(event)} />
			</div>
		);
	}
};

export default App;