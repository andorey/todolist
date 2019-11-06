import React from 'react';

class AddNewItemForm extends React.Component {

	state = {
		error: false,
		title: ""
	};

	onAddTaskClick = () => {
		let newTitle = this.state.title;
		if (newTitle.trim() === '') {
			this.setState({error: true});
		} else {
			this.setState({error: false});
			this.setState({title: ""});
			this.props.addTask(newTitle);
		}
	};

	onTaskTitleChanged = (e) => {
		this.setState({
			error: false,
			title: e.currentTarget.value
		})
	};


	oneAddTaskKeyPress = (e) => {
		if (e.key === 'Enter') {
			this.onAddTaskClick();
		}
	};


	render = () => {
		return (
			<div className="todoList-newTaskForm">
				<input ref={this.newTaskTitleRef}
					   type="text"
					   placeholder="New task name"
					   className={this.state.error ? "error" : ''}
					   onChange={this.onTaskTitleChanged}
					   onKeyPress={this.oneAddTaskKeyPress}
					   value={this.state.title}
				/>
				<button onClick={this.onAddTaskClick}>Add</button>
			</div>
		);
	}
}

export default AddNewItemForm;

