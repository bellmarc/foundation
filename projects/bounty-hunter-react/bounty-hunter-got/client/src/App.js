import React from 'react';
import axios from 'axios';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      bounties: []
    }
  }

  componentDidMount(){
    axios.get('/bounties')
      .then(res => this.setState({ bounties: res.data }))
      .catch(err => err)
  }

  render(){
    const mappedBounties = this.state.bounties.map(bounty => <div>{bounty.firstName}</div>)
     return (
    <div>
        { mappedBounties }
    </div>
  );
  }

}

export default App;
