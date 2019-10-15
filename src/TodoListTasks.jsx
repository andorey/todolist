import React from 'react';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {
	render = () => {

		let tasksElements = this.props.tasks.map(t => {
				return <TodoListTask
					task={t}
					changeTaskStatus={this.props.changeTaskStatus}
				/>
			}
		);

		return (
			<div className="todoList-tasks">
				{tasksElements}
			</div>
		);
	}
}

export default TodoListTasks;

