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

	render() {
		return (
			<div className="app">
				<h1>Hello React</h1>
				<Input />
				<Todo todos={this.state.todos} />
			</div>
		);
	}
};

export default App;