import React, {Component} from 'react';
import BoxContainer from './BoxContainer';
import Button from './Button';
import './style.css';


 class App extends Component{ //needs access to State or LC Methods
   //where data "state" is held
  constructor() {
    super()
      this.state = {
          bgColors: ["white", "white", "white", "white"],
          textColor: [ "black", "black", "black", "black" ]
      }
  }

  //Methods here
  blackOrWhiteToggle = () => {
    this.setState(prevState =>{
      return {
        bgColors: prevState.bgColors[0] === "black"?  ["white", "white", "white", "white"] : [ "black", "black", "black", "black" ],
        textColor: prevState.textColor[0] === "white"? [ "black", "black", "black", "black"] : ["white", "white", "white", "white"]
      }
    })
}

lavenderToggle = () => {
    this.setState(prevState => {
      return {
          bgColors:["lavender", "lavender", prevState.bgColors[2],  prevState.bgColors[3]]
      }
    })
}


  render() {
    return (
      <div>
         <BoxContainer bgColors={ this.state.bgColors }
                      textColor={ this.state.textColor } />
        <Button blackOrWhiteToggle={this.blackOrWhiteToggle}
                lavenderToggle={this.lavenderToggle}

        />
      </div>
    )
  }
}


export default App;
