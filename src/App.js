import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";

class App extends React.Component {
    tasks = [
        {title: 'CSS', isDone: true},
        {title: 'JS', isDone: false},
        {title: 'ReactJS', isDone: false},
        {title: 'Patterns', isDone: true},

    ];
    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader />
                    <TodoListTasks tasks={this.tasks}/>
                    <TodoListFooter />
                </div>
            </div>
        );
    }
}

export default App;

