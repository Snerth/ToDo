import React from 'react'
import { connect } from 'react-redux'
import { changeVisibilityFilter } from './actions'

const VisibilityFilter = ({ changeVisibilityFilter }) => <div>
    <button onClick={() => changeVisibilityFilter('VisibilityFilter/SHOW_ALL')} >All</button>
    <button onClick={() => changeVisibilityFilter('VisibilityFilter/SHOW_ACTIVE')} >Active</button>
    <button onClick={() => changeVisibilityFilter('VisibilityFilter/SHOW_COMPLETED')} >Completed</button>
</div>

const mapDispatchToProps = {
    changeVisibilityFilter
}

export default connect(null, mapDispatchToProps)(VisibilityFilter)