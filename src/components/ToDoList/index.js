import React from 'react'
import ToDo from '../../containers/ToDo'
import './style.css'

const ToDoListComponent = ({ ToDoList }) => {
    console.log('ToDoListComponent rendered')
    return <ul className='todo-list'>
        {
            ToDoList.map(todo => <ToDo todo={todo} key={todo.id} />)
        }
    </ul>
}

export default ToDoListComponent