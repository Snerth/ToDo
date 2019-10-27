import React from 'react';
import nextId from "react-id-generator";

export const ToDoContext = React.createContext();

export class ToDoProvider extends React.Component {
  fetchTodos = newTodos => {
    console.log("setting todos to context")
    console.log(newTodos)
    this.setState({ todos: newTodos })
  }
  handleInput = e => {
    this.setState({ inputValue: e.target.value })
  }
  addToDo = () => {
    console.log("i will add new todo")
    console.log(this.state.inputValue)
    let newTodo = {
      id: nextId(),
      title: this.state.inputValue
    }
    let newTodos = [...this.state.todos, newTodo]
    this.setState({todos: newTodos})
  }
  state = {
    todos: [],
    inputValue: "",
    fetchTodos: this.fetchTodos,
    handleInput: this.handleInput,
    addToDo: this.addToDo
  }
  render() {
    return (
      <ToDoContext.Provider value={this.state}>
        {this.props.children}
      </ToDoContext.Provider>
    );
  }
}

export const ToDoConsumer = ToDoContext.Consumer;