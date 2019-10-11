import React from 'react';
import axios from 'axios';


class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount(){
    axios.get('/bounties')
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }


  render(){
     return (
    <div>

    </div>
  );
  }

}

export default App;
