import React from 'react';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {
	render = () => {

		let tasksElements = this.props.tasks.map(t => {
				return <TodoListTask
					task={t}
					change={this.props.change} />}
		);

		return (
			<div className="todoList-tasks">
				{tasksElements}
			</div>
		);
	}
}

export default TodoListTasks;

