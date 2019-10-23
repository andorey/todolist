import React from 'react';

class TodoListFooter extends React.Component {

    state = {
        isHidden: true
    }


    onAllFilterClick = () => {this.props.onChangeFilter('All')};
    onCompletedFilterClick = () => {this.props.onChangeFilter('Completed')};
    onActiveFilterClick = () => {this.props.onChangeFilter('Active')};
    onShowFiltersClick = () => {this.setState({isHidden: true})};
    onHideFiltersClick = () => {this.setState({isHidden: false})};


    render = () => {

        let classForAll = this.props.filterValue === 'All' ? 'filter-active': '';
        let classForCompleted = this.props.filterValue === 'Completed' ? 'filter-active': '';
        let classForActive = this.props.filterValue === 'Active' ? 'filter-active': '';

        return (
                <div className="todoList-footer">
                    {this.state.isHidden && <div>
                    <button onClick={this.onAllFilterClick } className={classForAll}>All</button>
                    <button onClick={this.onCompletedFilterClick } className={classForCompleted}>Completed</button>
                    <button onClick={this.onActiveFilterClick} className={classForActive}>Active</button>
                    </div>}
                    { !this.state.isHidden && <span onClick={this.onShowFiltersClick}> show </span>}
                    { this.state.isHidden && <span onClick={this.onHideFiltersClick}> hide </span>}
                </div>
        );
    }
}

export default TodoListFooter;

