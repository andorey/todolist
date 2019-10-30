import React from 'react';

class TodoListHeader extends React.Component {

	state = {
		error: false
	}

	constructor(props) {
		super(props);
		this.newTaskTitleRef = React.createRef();
	};

	onAddTaskClick = () => {
		let newTitle = this.newTaskTitleRef.current.value;
		if (newTitle === ''){
			this.setState({error:true});
		}else{
		this.setState({error: false});
		this.newTaskTitleRef.current.value = '';
		this.props.addTask(newTitle);
		}
	}

	render = () => {
		return (
			<div className="todoList-header">
				<h3 className="todoList-header__title">What to Learn</h3>
				<div className={"todoList-newTaskForm"}>
					<input ref={this.newTaskTitleRef}
						   type="text"
						   placeholder="New task name"
						   className={this.state.error ? "error" : ''}
					/>
					<button onClick={this.onAddTaskClick}>Add</button>
				</div>
			</div>
		);
	}
}

export default TodoListHeader;

