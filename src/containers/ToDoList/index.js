import React from 'react'
import { connect } from 'react-redux'
import { selectTodos } from './selectors'
import ToDoListComponent from '../../components/ToDoList'

const ToDoList = ({ ToDoList }) => (
    <ToDoListComponent ToDoList={ToDoList} />
)

const mapStateToProps = state => ({
    ToDoList: selectTodos(state)
})

export default connect(mapStateToProps, null)(ToDoList)