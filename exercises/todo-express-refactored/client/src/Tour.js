import React from 'react'
import Tour from 'reactour'

class App extends Component {
  // ...

  render  (
    <>
      { /* other stuff */}
      <Tour
        steps={steps}
        isOpen={this.state.isTourOpen}
        onRequestClose={this.closeTour}
     />
    </>
  )
}


const steps = [
    {
      selector: '.first-step',
      content: 'This is my first Step',
    },
    // ...
]




export default Tour