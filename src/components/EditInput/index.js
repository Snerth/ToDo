import React from 'react'

const EditInput = ({ newToDoTitle, setNewToDoTitle }) => {
    return <input
        type='text'
        placeholder='Edit ToDo...'
        value={newToDoTitle}
        onChange={(e) => setNewToDoTitle(e.target.value)}
    />
}

export default EditInput