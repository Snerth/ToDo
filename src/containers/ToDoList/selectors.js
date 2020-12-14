import { createSelector } from 'reselect'

const getVisibilityFilter = state => state.VisibilityFilter 
const getToDoList = state => state.ToDoList

export const getTodos = createSelector(
    [ getVisibilityFilter, getToDoList ],
    (filter, todos) => {
        console.log('todos', todos)
        switch(filter) {
            case 'VisibilityFilter/SHOW_ALL':
                return todos
            case 'VisibilityFilter/SHOW_ACTIVE':
                return todos.filter(todo => !todo.completed)
            case 'VisibilityFilter/SHOW_COMPLETED':
                return todos.filter(todo => todo.completed)
        }
    }
)