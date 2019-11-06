import React from 'react';
import './App.css';
import AddNewItemForm from "./AddNewItemForm";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import TodoListTitle from "./TodoListTitle";

class TodoList extends React.Component {

	state = {
		tasks: [],
		filterValue: 'All'
	};

	nextTaskId = 0;

	saveState = () => {
		let stateAsString = JSON.stringify(this.state);
		localStorage.setItem('our-state' + this.props.id, stateAsString);
	};

	restoreState = () => {
		let state = {
			tasks: [],
			filterValue: 'All'
		};
		let stateAsString = localStorage.getItem('our-state' + this.props.id);
		if (stateAsString !== null) {
			state = JSON.parse(stateAsString);
		}
		this.setState(state, () => {
			this.state.tasks.forEach(t => {
				if (t.id >= this.nextTaskId) {
					this.nextTaskId = t.id + 1;
				}
			})
		});
	};

	componentDidMount() {
		this.restoreState();
	};


	addTask = (newTitle) => {
		let newTask = {
			id: this.nextTaskId,
			title: newTitle,
			isDone: false,
			priority: 'high'
		};
		this.nextTaskId++;
		let newTasks = [...this.state.tasks, newTask];
		this.setState({
			tasks: newTasks
		}, this.saveState);
	};

	changeFilterValue = (newFilterValue) => {
		this.setState({
			filterValue: newFilterValue
		}, this.saveState);
	};

	changeTaskStatus = (taskId, isDone) => {
		this.changeTask(taskId, {isDone: isDone})
	};

	changeTitle = (taskId, newTitle) => {
		this.changeTask(taskId, {title: newTitle})
	};


	changeTask = (taskId, newPropsObj) => {
		let newTasks = this.state.tasks.map(t => {
			if (t.id !== taskId) {
				return t;
			} else {
				return {...t, ...newPropsObj}
			}
		});
		this.setState({
			tasks: newTasks
		}, this.saveState);
	};


	render = () => {
		return (
			<div className="todoList">
				<div className="todoList-header">
				<TodoListTitle title={this.props.title} />
				<AddNewItemForm addTask={this.addTask} title={this.props.title}/>
				</div>
				<TodoListTasks
					change={this.changeTaskStatus}
					changeTitle={this.changeTitle}
					tasks={this.state.tasks.filter(t => {
							if (this.state.filterValue === 'All') {
								return true;
							}
							if (this.state.filterValue === 'Active') {
								return !t.isDone;
							}
							if (this.state.filterValue === 'Completed') {
								return t.isDone;
							}
						}
					)}/>
				<TodoListFooter filterValue={this.state.filterValue}
								onChangeFilter={this.changeFilterValue}/>
			</div>
		);
	}
}

export default TodoList;

