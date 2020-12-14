import { combineReducers } from 'redux'
import ToDoList from '../containers/ToDoList/reducer'
import VisibilityFilter from '../containers/VisibilityFilter/reducer'

const rootReducer = combineReducers({
    ToDoList,
    VisibilityFilter
})

export default rootReducer