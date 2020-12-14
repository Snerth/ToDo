import './wdyr'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
// import { changeVisibilityFilter } from './containers/VisibilityFilter/actions'
// import { add, cancel, complete, completeAll, edit, remove, removeAll, save } from './containers/ToDoList/actions'

// store.dispatch(changeVisibilityFilter('VisibilityFilter/SHOW_ACTIVE'))
// store.dispatch(add({id: 89, title: 'Test todo', completed: true, importance: 3, isEdited: false}))
// store.dispatch(remove(4))
// store.dispatch(edit(2))
// store.dispatch(save(2, 'Save edited todo'))
// store.dispatch(cancel(2))
// store.dispatch(complete(1))
// store.dispatch(completeAll())
// store.dispatch(removeAll())
// store.dispatch(add({id: 89, title: 'Test todo', completed: false, importance: 3, isEdited: false}))

render(
    <Provider store={store}>
        <Router>
            <Route exact path="/" component={App} />
        </Router>
    </Provider>,
    document.getElementById('root')
)