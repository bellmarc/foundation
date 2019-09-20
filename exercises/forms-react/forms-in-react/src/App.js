import React, {Component} from 'react';
import './App.css';


class App extends Component() {
    constructor() {
      super()
      this.state = {
        firstName: "",
        lastName: "",
        names: [] //each time user hits submit it Saves name data to this array
      }
  }

  handleCharge = (event) => { //event target name is update this.state.value of w/e name is | can shorthand this
    // console.log(event.target.value)
    // console.dir(event.target.value)
    const {name, value} = event.target
    this.setState({
      [name]: value //Same as: [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    alert(this.state.firstName + " " + this.state.lastName)

    const newName = this.state.firstName + " " + this.state.lastName
    //clearing input
    this.setState(prevState => ({ //must have to specify manually per below
      names: [...prevState.names, newName],
      firstName: "",
      lastName: ""
    }))
  }

  render() {
    const mappedNames = this.state.names.map((name, i) => <h1 key={i}>{name}</h1>)

   return (
    <div>
        <form onSubmit={this.handleSubmit}>
          <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
              placeholder="FirstName"/>
          <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
              placeholder="LastName"/>
          <button>Submit</button>
        </form>
        <div>
            {mappedNames}
        </div>
      </div>
    )
  }
}

export default App;
