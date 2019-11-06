import React from 'react';
import './App.css';
import TodoList from "./TodoList";


class App extends React.Component {

	state = {
		todolists: [
			{id: 1, title: 'What to learn'},
			{id: 2, title: 'Week tasks'},
			{id: 3, title: 'Year tasks'}
		]
	};

	render = () => {
		const todolists = this.state.todolists
			.map(t => <TodoList id={t.id} title={t.title} />);

		return (
			<>
			<div>
				<input />
				<button onClick={this.addTodoList}>Add</button>
			</div>

			<div className="App">
				{todolists}
			</div>
			</>
		);
	}
}

export default App;

