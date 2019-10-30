import React from 'react';
import './App.css';


class TodoListTask extends React.Component {

	state ={
		editMode: false
	};

	activatedEditMode = () => {
		this.setState({editMode: true})
	};
	deactivateEditMode = () => {
		this.setState({editMode: false})
	};


	onIsDoneChanged = (e) => {
		this.props.change(this.props.task.id, e.currentTarget.checked);
	};

	onTitleChanged = (e) => {
		this.props.changeTitle(this.props.task.id, e.currentTarget.value);
	};

	render = () => {

		const taskClass = this.props.task.isDone ? 'todoList-task done' : 'todoList-task';

		return (
			<div className={taskClass}>
				<input onClick={this.onIsDoneChanged} type="checkbox"
					   checked={this.props.task.isDone}/>
				{this.state.editMode
					? <input
						onBlur={this.deactivateEditMode}
						autoFocus={true}
						value={this.props.task.title}
						onChange={this.onTitleChanged}
					/> :
					<span onClick={this.activatedEditMode}>
						{this.props.task.id} - {this.props.task.title}
					</span>
				}, priority: {this.props.task.priority}
			</div>
		);
	}
}

export default TodoListTask;

