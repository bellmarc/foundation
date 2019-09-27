import React from 'react';


const CharContext = React.createContext()
//CharContext.Provider
//CharContext.Consumer

class CharacterProvider extends React.Component {
    constructor(){
        super()
        this.state = {
            // characters: []
        }
    }

    // getAllChars = () => {
    //     axios.get("https://www.anapioficeandfire.com/api/characters")
    //     .then(res => console.log(res))
    //     .catch(err => (err))
    // }

    render() {
        return (

                <CharContext.Provider >
                    {/* value={{
                        characters: this.state.characters
                        getAllChars: this.getAllChars
                    }}> */}
                    {this.props.children}
                </CharContext.Provider>

        )
    }
}




export default CharacterProvider