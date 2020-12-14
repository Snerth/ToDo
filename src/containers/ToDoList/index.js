import React from 'react'
import ToDo from '../../components/ToDo'
import { connect } from 'react-redux'
import './style.css'
import { selectTodos } from './selectors'

const ToDoList = ({ ToDoList }) => {
    console.log('ToDoList rendered')
    return <ul className='todo-list'>
        {
            ToDoList.map(todo => <ToDo todo={todo} key={todo.id} />)
        }
    </ul>
}

const mapStateToProps = state => ({
    ToDoList: selectTodos(state)
})

export default connect(mapStateToProps, null)(ToDoList)