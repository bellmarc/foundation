import React from 'react';
import axios from 'axios';
import Joyride from 'react-joyride';


class App extends React.Component {
  constructor() {
    super()
    this.state ={
      todos: [],
      steps: [
        {
          target: "first-step", // Target: red button css displays on

          content: "View menu here." //modal after target clicked
        },
        {
          target: ".second-step",
          content: "Swipe left to switch to smart session"
        }
      ]
    }
  }

  componentDidMount() {
    axios.get('/todos')
      .then (res => this.setState({ todos: res.data }))
      .catch(err => err)

  }
  render(){
    const { steps } = this.state
    const mappedTodos = this.state.todos.map(todo => <div>{todo.title}</div>)
     return (
    <div>
      <Joyride steps={ steps } />
      <h1>Title</h1>
      <p className=".second-step">Learn more about our App</p>
      <button className="start-btn first-step">Get Started</button>
      { mappedTodos }
    </div>
  );
  }
}


export default App;
