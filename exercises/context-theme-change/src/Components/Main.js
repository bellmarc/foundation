import React from 'react'
import {withTheme} from '../Context/ThemeProvider.js';


const Main = (props) => {
    return (
      <main className={`main-${props.theme}`}>
      </main>
    )

}


export default withTheme(Main)