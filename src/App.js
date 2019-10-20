import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Info from './components/Info'
import ToDoApp from './components/ToDoApp'
import './css/Main.css'



function App() {
  return (
      <Router>
        <Link to="Info-Components-Lifecycle" >
          <p>Info</p>
        </Link>     
        <Route exact path="/"  component={ToDoApp} />
        <Route path="/Info-Components-Lifecycle" component={Info} />
      </Router>   
  );
}

export default App;
