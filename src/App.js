import React from "react";
import Input from "./Input";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todo: []
		};
	}
	render() {
		return (
			<div className="app">
				<h1>Hello React</h1>
				<Input />
			</div>
		);
	}
};

export default App;