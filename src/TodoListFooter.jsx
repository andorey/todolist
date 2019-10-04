import React from 'react';

class TodoListFooter extends React.Component {
    render = () => {

        let classForAll = 'filter-active';
        let classForCompleted = 'filter-active';
        let classForActive = 'filter-active';

        return (
                <div className="todoList-footer">
                    <button className={classForAll}>All</button>
                    <button className={classForCompleted}>Completed</button>
                    <button className={classForActive}>Active</button>
                </div>
        );
    }
}

export default TodoListFooter;

