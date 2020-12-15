import React from 'react'

const CompleteButton = ({ handleClick, todoId }) => {
    return <button
        className='complete-button'
        onClick={() => handleClick(todoId)}
    >Complete</button>
}

export default CompleteButton