import React, { Component } from 'react'
import ToDo from './ToDo'
import '../css/TodoList.css'
import { ToDoProvider } from '../utils/context'

class TodoList extends Component {
    render() {
        return(
            <div className="List">
                <ToDoProvider>
                    <ToDo />
                </ToDoProvider>                
            </div>
        )
    }
}

export default TodoList