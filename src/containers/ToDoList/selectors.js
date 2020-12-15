import { createSelector } from 'reselect'

const getVisibilityFilter = state => state.VisibilityFilter 
const getToDoList = state => state.ToDoList

export const selectTodos = createSelector(
    [ getVisibilityFilter, getToDoList ],
    (filter, todos) => {
        return {
            'VisibilityFilter/SHOW_ALL': () => todos,
            'VisibilityFilter/SHOW_ACTIVE': () => todos.filter(todo => !todo.completed),
            'VisibilityFilter/SHOW_COMPLETED': () => todos.filter(todo => todo.completed)
        }[filter]()
    }
)

