import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";

class App extends React.Component {

	state = {
		tasks: [
			{title: 'CSS', isDone: true, priority: 'low'},
			{title: 'HTML', isDone: false, priority: 'high'},
			{title: 'React', isDone: false, priority: 'low'},
			{title: 'Angular', isDone: true, priority: 'middle'},
		],
		filterValue: 'All'
	};

	addTask = (newTitle) => {
		let newTask = {
			title: newTitle,
			isDone: false,
			priority: 'high'
		};
		let newTasks = [...this.state.tasks, newTask];
		this.setState({
			tasks: newTasks
		})
	};

	changeFilterValue = (newFilterValue) => {
		this.setState({
			filterValue: newFilterValue
		})
	};

	changeTaskStatus = (task, isDone) => {
		let newTasks = this.state.tasks.map(t => {
			if (t !== task) {
				return t;
			} else {
				return {...t, isDone: isDone}
			}
		});
		this.setState({
			tasks: newTasks
		})
	};

	render = () => {
		return (
			<div className="App">
				<div className="todoList">
					<TodoListHeader addTask={this.addTask}/>
					<TodoListTasks change={this.changeTaskStatus}
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
									onChangeFilter={this.changeFilterValue} />
				</div>
			</div>
		);
	}
}

export default App;

