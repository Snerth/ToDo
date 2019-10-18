import React from 'react';
import Input from './Input'
import TodoList from './TodoList'
import { UserProvider } from '../utils/context'

function ToDoApp() {
  return (
    <UserProvider>
        <div className="app">      
        <Input />
        <TodoList />
        </div>  
    </UserProvider>  
   );
}

export default ToDoApp;
