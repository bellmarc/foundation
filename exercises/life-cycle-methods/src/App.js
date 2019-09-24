import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
      super()
      this.state = {
        bgColor: "teal",
        text: "",
        radius: 0
      }
  }

  componentDidMount() {
    window.addEventListener("keydown", (event) => {
      if(event.which === 65){ //a key
        this.setState({ bgColor: "turquoise" })
      } else if (event.which === 82) { //r
        this.setState({ bgColor: "indianred" })
      } else if (event.which === 71){ //g
        this.setState({ bgColor: "palegreen" })
      }
    })
  }

  componentDidUpdate( prevState){
    const color = this.state.bgColor
    if(prevState === "teal") {
      this.setState({color})
      // this.setState({text: color})
    }
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", null)
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <div style={{
          width: 200,
          height: 200,
          border: '1px solid black',
          backgroundColor: this.state.bgColor
        }}>
        </div>
        <h1>{this.state.text}</h1>
      </div>
    )
  }

}

export default App;
