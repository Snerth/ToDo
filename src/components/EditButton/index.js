import React from 'react'
import { connect } from 'react-redux'
import { edit } from '../../containers/ToDoList/actions'
import editIcon from '../../assets/icons/Edit.svg'

const EditButton = ({ edit, id }) => {
    return <button
    onClick={() => edit(id)}
    ><img src={editIcon} alt='Edit ToDo' /></button>
}

const mapDispatchToProps = {
    edit
}

export default connect(null, mapDispatchToProps)(EditButton)