import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";


class App extends React.Component {

	state = {
		todolists: []
	};

	nextTodoListId = 4;

	componentDidMount() {
		this.restoreState();
	};

	saveState = () => {
		let stateAsString = JSON.stringify(this.state);
		localStorage.setItem("todolists", stateAsString);
	};

	restoreState = () => {
		let state = {
			todolists: [],
		};
		let stateAsString = localStorage.getItem('todolists');
		if (stateAsString !== null) {
			state = JSON.parse(stateAsString);
		}
		this.setState(state, () => {
			this.state.todolists.forEach(t => {
				if (t.id >= this.nextTodoListId) {
					this.nextTodoListId = t.id + 1;
				}
			})
		});
	};

	addTodoList = (title) =>{
		let newTodoList = {
			id: this.nextTodoListId,
			title: title
		}
		this.nextTodoListId++;
		let newTodoLists = [...this.state.todolists, newTodoList];
		this.setState({
			todolists: newTodoLists
		}, ()=>{this.saveState()} );
	}

	render = () => {
		const todolists = this.state.todolists
			.map(t => <TodoList id={t.id} title={t.title} />);

		return (
			<>
				<AddNewItemForm  addItem={this.addTodoList}/>

			{/*<div>*/}
			{/*	<input />*/}
			{/*	<button onClick={this.addTodoList}>Add</button>*/}
			{/*</div>*/}

			<div className="App">
				{todolists}
			</div>
			</>
		);
	}
}

export default App;

