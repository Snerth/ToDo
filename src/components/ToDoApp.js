import React from 'react';
import Input from './Input'
import TodoList from './TodoList'
import { ToDoProvider } from '../utils/context'

function ToDoApp() {
  return (
    <div className="app">  
      <ToDoProvider>
        <Input />
        <TodoList />
      </ToDoProvider>       
      
    </div>  
  );
}

export default ToDoApp;
