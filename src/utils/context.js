import React, { createContext } from 'react';

const UserContext = createContext({
  todos: [],
  fetchTodos: () => {},
});

export class UserProvider extends React.Component {
  fetchTodos = newTodos => {
    this.setState({ todos: newTodos });
  };

  state = {
    todos: [],
    fetchTodos: this.fetchTodos
}
    

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export const UserConsumer = UserContext.Consumer;