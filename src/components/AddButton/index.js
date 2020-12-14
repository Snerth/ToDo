import React from 'react'
import { connect } from 'react-redux'
import { add } from '../../containers/ToDoList/actions'

const AddButton = ({ createToDo, add }) => {
    return <button className='add-button' onClick={() => add(createToDo) }>Add</button>
}

const mapDispatchToProps = {
    add
}

// AddButton.whyDidYouRender = {
//     logOnDifferentValues: true,
//     customName: 'Add Button'
//   }

export default connect(null, mapDispatchToProps)(AddButton) 