import React from 'react';

export const ToDoContext = React.createContext();

export class ToDoProvider extends React.Component {
  fetchTodos = newTodos => {
    this.setState({ todos: newTodos })
  }
  handleInput = e => {
    this.setState({ inputValue: e.target.value })
  }
  state = {
    todos: [],
    inputValue: "",
    fetchTodos: this.fetchTodos,
    handleInput: this.handleInput
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