import React from "react";
import Header from "./Header";
import Input from "./Input";
import Todo from "./Todo";
import Button from "./Button";
import "./App.css";

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

	clearChecked = (event) => {
		const filtered = this.state.todos.filter((todo) => {
			return todo.checked === false;
		});

		const todos = filtered.map((todo) => {
			return {
				value: todo.value,
				checked: false
			};
		})

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

	markAll = (event) => {
		const marked = this.state.todos.map((todo, index) => {
			return {
				value: todo.value,
				checked: true
			};
		});
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
				<Header />
				<Input handleSubmit={(event) => this.handleSubmit(event)} />
				<Todo todos={this.state.todos} handleClick={(event) => this.removeTodo(event)} checkTodo={(event, index) => this.checkTodo(event, index)} />
				<Button type="Clear Checked" handleClick={(event) => this.clearChecked(event)} />
				<Button type="Mark All" handleClick={(event) => this.markAll(event)} />
			</div>
		);
	}
};

export default App;