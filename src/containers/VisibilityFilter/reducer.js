import * as vf from './actionTypes'

const initialState = 'VisibilityFilter/SHOW_ALL'

const VisibilityFilter = (state = initialState, action) => {
    switch(action.type) {
        case vf.CHANGE_FILTER: 
            return action.payload
        default:
            return state
    }
}

export default VisibilityFilter