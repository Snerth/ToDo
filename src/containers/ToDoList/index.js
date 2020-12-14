import React from 'react'
import ToDo from '../../components/ToDo'
import { connect } from 'react-redux'
import './style.css'
import { getTodos } from './selectors'

const ToDoList = ({ ToDoList }) => <ul className='todo-list'>
    {
        // ToDoList.map(todo => <ToDo todo={todo} key={todo.id} />)
    }
</ul>

// const mapStateToProps = ({ ToDoList }) => ({
//     ToDoList
// })

const mapStateToProps = state => ({
    ToDoList: getTodos(state)
})

export default connect(mapStateToProps, null)(ToDoList)