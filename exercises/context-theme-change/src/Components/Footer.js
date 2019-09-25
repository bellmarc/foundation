import React from 'react'
import {withTheme} from '../Context/ThemeProvider';


const Footer = (props) => {
    return (
        <footer className={`footer-${props.theme}`}>
            <div className="link">SM1</div>
            <div className="link">SM2</div>
            <div className="link">SM3</div>
        </footer>
    )

}




export default withTheme(Footer)