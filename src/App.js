import React from "react";
import Input from "./Input";
import Todo from "./Todo";
import Button from "./Button";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [

			]
		};
	}

	checkTodo = (event, index) => {
		event.target.parentElement.classList.toggle("checked");
		const todos = this.state.todos.map((todo, todoIndex) => {
			if (index !== todoIndex) {
				return todo;
			} else {
				return {
					value: todo.value,
					checked: !todo.checked
				}
			}
		});

		this.setState({
			todos: todos
		});
	}

	clearChecked = (event, index) => {
		const todos = this.state.todos.filter((todo) => {
			return todo.checked !== true;
		});

		this.setState({
			todos: todos
		});
	}

	handleSubmit = (event) => {
		if (event.keyCode === 13 && event.target.value !== "") {
			const todos = this.state.todos;

			this.setState({
				todos: todos.concat({
					value: event.target.value,
					checked: false
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
				<Todo todos={this.state.todos} handleClick={(event) => this.removeTodo(event)} checkTodo={(event, index) => this.checkTodo(event, index)} />
				<Button type="Clear Checked" clearChecked={(event) => this.clearChecked(event)} />
			</div>
		);
	}
};

export default App;