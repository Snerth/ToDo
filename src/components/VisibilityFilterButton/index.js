import React from 'react'
import './style.css'

const VisibilityFilterButton = ({ buttonName, handleClick, isActive }) => {
    return <button
        className={`visibility-filter-button ${isActive && 'active'}`}
        onClick={() => handleClick()}
    >{buttonName}</button>
}

export default VisibilityFilterButton