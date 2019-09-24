import React from 'react';


const ThemeContext = React.createContext()
class ThemeProvider extends React.Component {
    constructor() {
        super()
        this.state = {
            theme: ""
        }
    }
    
//function to be passed to App
   toggleTheme = () => {
    this.setState(prevState => ({
        theme: prevState.theme === "dark" ? "light" : "dark"
    }))
 }

    render() {
        return (
            <ThemeContext.Provider
                value={{
                    theme: this.state.theme,
                    toggleTheme: this.toggleTheme
                }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export const withTheme = C => props => (
    <ThemeContext.Consumer>
    { value => <C {...value} {...props}/> }
    </ThemeContext.Consumer>
)


export default ThemeProvider