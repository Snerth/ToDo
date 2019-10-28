import React from 'react';

export const ToDoContext = React.createContext();

export class ToDoProvider extends React.Component {
  fetchTodos = newTodos => {
    this.setState({ todos: newTodos })
  }
  handleInput = e => {
    this.setState({ inputValue: e.target.value })
  }
  addToDo = () => {
    if(this.state.inputValue) {
      let newTodo = {
        id: Math.floor(Math.random() * 1000000000),
        title: this.state.inputValue
      }
      let newTodos = [...this.state.todos, newTodo]
      this.setState({todos: newTodos})
      alert("ToDo successfully added")
    }
    else alert("Please, enter a ToDo")
  }
  removeToDo = (id) => {
    let newToDos = this.state.todos.filter((todo) => todo.id !== id)
    this.setState({todos: newToDos})
  }
  editToDo = (id) => {
    let editedToDo = this.state.todos.filter((e,i) => e.id == id)
    editedToDo[0].title = this.state.inputvalue
    let newToDos = this.state.todos.filter((todo) => todo.id !== id)
    newToDos.push(editedToDo[0])
    this.setState({todos: newToDos})

  }
  state = {
    todos: [],
    inputValue: "",
    fetchTodos: this.fetchTodos,
    handleInput: this.handleInput,
    addToDo: this.addToDo,
    removeToDo: this.removeToDo,
    editToDo: this.editToDo
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