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
    return ({
        [t.ADD]: [ ...state, action.payload ],
        // [t.REMOVE]: () => state.filter(todo => todo.id !== action.payload),
        // [t.EDIT]: () => state.map(todo => todo.id === action.payload ? { ...todo, isEdited: true } : todo),
        // [t.SAVE]: () => state.map(todo => {
        //     console.log(action.payload)
        //     return todo.id === action.payload ? { ...todo, isEdited: false, title: action.payload.title } : todo
        // })
    })[action.type] || state
} 

// const ToDoList = (state = initialState, action) => {
//     switch(action.type) {
//         case t.ADD:
//             return [ ...state, action.payload ]
//         case t.REMOVE: 
//             return state.filter(todo => todo.id !== action.payload)
//         case t.EDIT: 
//             return state.map(todo => todo.id === action.payload ? { ...todo, isEdited: true } : todo)
//         case t.SAVE: 
//             return state.map(todo => {
//                 return todo.id === action.payload ? { ...todo, isEdited: false, title: action.payload.todo.title } : todo
//             })
//         case t.CANCEL:
//             return state.map(todo => todo.id === action.payload ? { ...todo, isEdited: false } : todo)
//         case t.COMPLETE:
//             return state.map(todo => todo.id === action.payload ? { ...todo, completed: true } : todo)
//         case t.COMPLETE_ALL:
//             return state.map(todo => ({...todo, completed: true }))
//         case t.REMOVE_ALL:
//             return []
//         default: 
//             return state
//     }
// }

export default ToDoList