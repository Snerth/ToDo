import React from 'react'
import { connect } from 'react-redux'
import { changeVisibilityFilter } from './actions'
import VisibilityFilterComponent from '../../components/VisibilityFilter'
import { selectVisibilityFilter } from './selector'

const VisibilityFilter = ({ changeVisibilityFilter, visibilityFilter }) => {
    return <VisibilityFilterComponent 
    changeVisibilityFilter={changeVisibilityFilter}
    visibilityFilter={visibilityFilter} 
    />
}

const mapDispatchToProps = {
    changeVisibilityFilter
}

const mapStateToProps = (state) => ({
    visibilityFilter: selectVisibilityFilter(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(VisibilityFilter)