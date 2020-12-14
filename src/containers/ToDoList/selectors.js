import { createSelector } from 'reselect'

const getVisibilityFilter = state => state.VisibilityFilter 
const getToDoList = state => state.ToDoList

export const selectTodos = createSelector(
    [ getVisibilityFilter, getToDoList ],
    (filter, todos) => {
        // console.log('todos', todos)
        // switch(filter) {
        //     case 'VisibilityFilter/SHOW_ALL':
        //         return todos
        //     case 'VisibilityFilter/SHOW_ACTIVE':
        //         return todos.filter(todo => !todo.completed)
        //     case 'VisibilityFilter/SHOW_COMPLETED':
        //         return todos.filter(todo => todo.completed)
        // }
        return {
            'VisibilityFilter/SHOW_ALL': () => todos,
            'VisibilityFilter/SHOW_ACTIVE': () => todos.filter(todo => !todo.completed),
            'VisibilityFilter/SHOW_COMPLETED': () => todos.filter(todo => todo.completed)
        }[filter]()
    }
)

