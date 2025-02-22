import { createStore, compose } from 'redux'
import rootReducer from '../reducer'

const store = createStore(
    rootReducer,
    compose(
        // applyMiddleware(
        //     thunk,
        //     forbiddenWordsMiddleware,
        //     sagaMiddleware
        // ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ))

export default store