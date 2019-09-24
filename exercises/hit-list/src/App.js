import React from 'react';
import './App.css';
import axios from 'axios';
import HitList from './HitList';


class App extends React.Component{
  constructor() {
    super()
    this.state = {
      hitlist: [], //has image and name, Arr: 7
      bgColor: "" //api colr
    }
  }

  componentDidMount() {
    //start axios call to load data in
    axios.get("https://s3.amazonaws.com/v-school/data/hitlist.json")
    //console.log(response.data))
      .then(response => { // console.log(response.data)
        this.setState({
            hitlist: response.data
        })
      }) // pass the data to hitlist array & component
      .catch(error => (error))
      this.getColor()
  }

  getColor() {
    axios.get("http://www.colr.org/json/color/random") //other option /7
    .then(res => //console.log(res.data.colors[0].hex))
    this.setState ({bgColor: res.data.colors[0].hex}))
    .catch(err => console.log(err))
  }

  render() {

    return (
      <div>
        <HitList
                hitlist={this.state.hitlist}
                bgColor={this.state.bgColor}
        />
      </div>
    )
  }
}

export default App;
