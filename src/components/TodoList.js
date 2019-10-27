import React, { Component } from 'react'
import ToDo from './ToDo'
import '../css/TodoList.css'
import { ToDoProvider } from '../utils/context'

class TodoList extends Component {
    render() {
        console.log("TodoList context:")
        console.log(this.context)
        return(
            <div className="List">
                
                    <ToDo />
                               
            </div>
        )
    }
}

export default TodoList