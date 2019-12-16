import React, { Component } from 'react';

class HoverEffect extends React.Component {
  constructor(){
    super()
    this.state = {
      show: false
    }
  }
  showInfo = () => {
    this.setState({show: true})
  }
  hideInfo = () => {
    this.setState({show: false})
  }

  render(){
    const itemStyles = {
      backgroundColor: this.state.show ? "cornflowerblue" : "white",
      transition: "all .3s linear",
      opacity: this.state.show ? .35 : 1
    }
    return (
      <div>
        <div
          style={itemStyles}
          className="item"
          onMouseEnter={this.showInfo}
          onMouseLeave={this.hideInfo}>
          <div
            className={`popup ${this.state.show ? "show" : "hide"}`}>
            <h1>Game Of Thrones Fan page</h1>
            <p>This is info we want to have slide in and out</p>
            <p>Icons icons icons</p>
          </div>
        </div>
      </div>
    )
  }
}
export default HoverEffect