import React from "react";
import Header from "./Header";
import Form from "./Form";
import Todo from "./Todo";
import Buttons from "./Buttons";
import Footer from "./Footer";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			author: "Lyndon Panton",
			copyright: "All Rights Reserved",
			date: (new Date()).getFullYear(),
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
		const todos = this.state.todos.map((todo, index) => {
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
		const { author, copyright, date, name, todos } = this.state;

		const appStyling = {
			fontFamily: "Palatino, Palatino Linotype, Palatino LT STD, Book Antiqua, Georgia, serif"
		};

		return (
			<div className="app" style={appStyling}>
				<Header name={name} />
				<Form handleSubmit={this.handleSubmit} />
				<Buttons deleteAll={this.deleteAll} deleteMarked={this.deleteMarked} markAll={this.markAll} unMarkAll={this.unMarkAll} />
				<Todo todos={todos} handleCheck={this.handleCheck} handleDelete={this.handleDelete} />
				<Footer author={author} copyright={copyright} date={date} />
			</div>
		);
	};
};

export default App;