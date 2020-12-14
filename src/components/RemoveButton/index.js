import React from 'react'
import { connect } from 'react-redux'
import { remove } from '../../containers/ToDoList/actions'
import removeIcon from '../../assets/icons/Remove.svg'

const RemoveButton = ({ remove, id }) => {
    return <button
    onClick={() => remove(id)}
    ><img src={removeIcon} alt='Remove ToDo' /></button>
}

const mapDispatchToProps = {
    remove
}

export default connect(null, mapDispatchToProps)(RemoveButton)