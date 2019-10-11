import React from "react";
import Header from "./Header";
import Form from "./Form";
import Todo from "./Todo";
import Buttons from "./Buttons";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "React Todo",
			todos: []
		};
	};

	deleteAll = () => {
		this.setState({
			todos: []
		});
	};

	deleteMarked = () => {
		const todos = this.state.todos.filter((todo, index) => {
			return todo.checked === false;
		});

		this.setState({
			todos: todos
		});
	};

	handleCheck = (index) => {
		const todos = this.state.todos.map((todo, todoIndex) => {
			if (index !== todoIndex) {
				return todo;
			} else {
				return {
					value: todo.value,
					checked: !todo.checked
				};
			}
		});

		this.setState({
			todos: todos
		});
	};

	handleDelete = (index) => {
		const todos = this.state.todos.filter((todo, todoIndex) => {
			return index !== todoIndex;
		});

		this.setState({
			todos: todos
		});
	};

	handleSubmit = (text) => {
		const todos = this.state.todos.concat({
			value: text,
			checked: false
		});

		this.setState({
			todos: todos
		});
	};

	markAll = () => {
		const todos = this.state.todos.map((todo, index) => {
			return {
				value: todo.value,
				checked: true
			};
		});

		this.setState({
			todos: todos
		});
	};

	unMarkAll = () => {
		const todos = this.state.todo.map((todo, index) => {
			return {
				value: todo.value,
				checked: false
			};
		});

		this.setState({
			todos: todos
		});
	};

	render() {
		const appStyling = {
			fontFamily: "Palatino, Palatino Linotype, Palatino LT STD, Book Antiqua, Georgia, serif"
		};

		return (
			<div className="app" style={appStyling}>
				<Header name={this.state.name} />
				<Form handleSubmit={this.handleSubmit} />
				<Buttons deleteAll={this.deleteAll} deleteMarked={this.deleteMarked} markAll={this.markAll} />
				<Todo todos={this.state.todos} handleCheck={this.handleCheck} handleDelete={this.handleDelete} />
			</div>
		);
	};
};

export default App;