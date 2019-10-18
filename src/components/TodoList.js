import React, { Component } from 'react'
import ToDo from './ToDo'
import '../css/TodoList.css'
class TodoList extends Component {
    render() {
        return(
            <div className="List">
                <ToDo />
            </div>
        )
    }
}

export default TodoList