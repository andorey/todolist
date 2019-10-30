import React from 'react';
import './App.css';


class TodoListTask extends React.Component {

	onIsDoneChanged = (e) => {
		this.props.change(this.props.task, e.currentTarget.checked);
	}

	render = () => {
		return (
			<div className="todoList-task">
				<input onClick={this.onIsDoneChanged} type="checkbox"
					   checked={this.props.task.isDone}/>
				<span>{this.props.task.title}, priority: {this.props.task.priority}</span>
			</div>
		);
	}
}

export default TodoListTask;
