import React from 'react';
import Form from './Form.js';
import './App.css';

//1. Create class Component
class App extends React.Component {
  constructor() {
    super() //state inputs
    this.state = { //create properties to record user's input
      name: "",
      names: [] //affix array to list
    }
  }
//Need form/input btn
//input value onChange
//form; onSubmit


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const newName = {
        name: this.state.name
      }
    this.setState(prevState => ({
      names: [...prevState.names, newName]
    }))
  }

//in Render, create Form w/inputs & Btn
  render() {
        return (
        <div>
          <Form
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                newName={this.state.name}
                names={this.state.names}
          />
        </div>
      )}
  }


export default App;
