import * as t from './actionTypes'

const initialState = [
    {
        id: 1,
        title: '1',
        completed: false,
        importance: 5,
        isEdited: false
    },
    {
        id: 2,
        title: '2',
        completed: false,
        importance: 4,
        isEdited: false
    },
    {
        id: 3,
        title: '3',
        completed: false,
        importance: 3,
        isEdited: false
    },
    {
        id: 4,
        title: '4',
        completed: true,
        importance: 2,
        isEdited: false
    },
    {
        id: 5,
        title: '5',
        completed: false,
        importance: 1,
        isEdited: false
    }
]

const ToDoList = (state = initialState, action) => {
    const reduce = {
        [t.ADD]: () => [...state, action.payload],
        [t.REMOVE]: () => state.filter(todo => todo.id !== action.payload),
        [t.EDIT]: () => state.map(todo => todo.id === action.payload ? { ...todo, isEdited: true } : todo),
        [t.SAVE]: () => state.map(todo => todo.id === action.payload.id ? { ...todo, isEdited: false, title: action.payload.title } : todo),
        [t.CANCEL]: () => state.map(todo => todo.id === action.payload ? { ...todo, isEdited: false } : todo),
        [t.COMPLETE]: () => state.map(todo => todo.id === action.payload ? { ...todo, completed: true } : todo),
        [t.COMPLETE_ALL]: () => state.map(todo => ({...todo, completed: true })),
        [t.REMOVE_ALL]: () => [],
        'default': () => state
    }
    return (reduce[action.type] || reduce['default'])()
}

export default ToDoList