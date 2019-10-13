import React from 'react';
import axios from 'axios';


class App extends React.Component {
  constructor() {
    super()
    this.state ={
      todos: []
    }
  }

  componentDidMount() {
    axios.get('/todos')
      .then (res => this.setState({ todos: res.data }))
      .catch(err => err)

  }
  render(){
    const mappedTodos = this.state.todos.map(todo => <div>{todo.title}</div>)
     return (
    <div>
      { mappedTodos }
    </div>
  );
  }
}


export default App;
