import React, { useState } from 'react'
import { connect } from 'react-redux'
import ToDoComponent from '../../components/ToDo'
import { cancel, save, complete } from '../ToDoList/actions'

const ToDo = ({ todo, cancel, save, complete }) => {
    const [newToDoTitle, setNewToDoTitle] = useState('')

    return <ToDoComponent
        setNewToDoTitle={setNewToDoTitle}
        newToDoTitle={newToDoTitle}
        todo={todo}
        cancel={cancel}
        save={save}
        complete={complete}
    />
}

const mapDispatchToProps = {
    cancel,
    save,
    complete
}

export default connect(null, mapDispatchToProps)(ToDo)