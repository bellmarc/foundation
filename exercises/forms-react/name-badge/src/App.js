import React from 'react';
import './App.css';
import Form from './Form.js';
import BadgeForm from './BadgeForm.js';


class App extends React.Component {
  constructor() {
    super()
    this.state= {
      firstName: "",
      lastName: "",
      email: "",
      birthplace: "",
      phone: "",
      favFood: "",
      message: "",
      userInput: [] //will be an Arr of objs, each ob represents 1 badge
    }
  }
  //Methods

  handleChange = event => {
    // console.log(event.target)
    this.setState ({
      [event.target.name]: event.target.value,
    })
    }

  handleSubmit = event => {
    console.log("test") //create obj
    event.preventDefault()
    const newBadge = {
      firstName: this.state.firstName,
      lastName:this.state.lastName,
      email: this.state.email,
      birthplace: this.state.birthplace,
      phone: this.state.phone,
      favFood: this.state.favFood,
      message: this.state.message
    }
    this.setState(prevState => ({
      userInput: [newBadge, ...prevState.userInput] //store all data from state here, all prevObjects + new Objects | Could switch the order & it signifies the newBadge would be displayed last.
    }),
    () => console.log(this.state)
  )
  }

  render(){
//creating a var for mapped Badges
    let mappedBadges = this.state.userInput.map((badge, i) => ( //badge represents current iteration of badges
      <BadgeForm
                firstName={badge.firstName}
                lastName={badge.lastName}
                email={badge.email}
                birthplace={badge.birthplace}
                phone={badge.phone}
                favFood={badge.favFood}
                message={badge.message}
                key={i}
      />
    ))

    return (
      <div>
        <Form
              handleChange={this.handleChange}
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              email={this.state.email}
              birthplace={this.state.birthplace}
              phone={this.state.phone}
              favFood={this.state.favFood}
              message={this.state.message}
              handleSubmit={this.handleSubmit}
        />
        {mappedBadges}
      </div>
    )
  }
}

export default App;
