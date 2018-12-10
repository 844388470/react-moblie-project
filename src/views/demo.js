import React from 'react'

class Todo extends React.Component{
    render(){
        return (
        <li onClick={this.props.onClick} style={{ 'textDecoration': this.props.completed ? 'line-through' : 'none' }} >
            {this.props.text}
        </li>
        )
    }
}

class TodoList extends React.Component{
    render(){
        return (<ul>
            {this.props.todos.map((todo, index) => (
                <Todo key={index} onClick={() => this.props.onTodoClick(index)} />
            ))}
        </ul>
        )
    }
}

class Link extends React.Component{
    render(){
        return (
            <a href="" onClick={e => { e.preventDefault();this.props.onClick() }} >
                {this.props.children}
            </a>
        )
    }
}

class Footer extends React.Component{
    render(){
        return (
            <p>
                Show:
                {' '}
                <FilterLink filter="SHOW_ALL">
                All
                </FilterLink>
                {', '}
                <FilterLink filter="SHOW_ACTIVE">
                Active
                </FilterLink>
                {', '}
                <FilterLink filter="SHOW_COMPLETED">
                Completed
                </FilterLink>
            </p>
        )
    }
}