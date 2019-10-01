import React from 'react';
import axios from 'axios';


const CharContext = React.createContext()
//CharContext.Provider
//CharContext.Consumer

class CharacterProvider extends React.Component {
    constructor(){
        super()
        this.state = {
            characters: [],
            houses: [],
            search: "",
            page: 1
        }
    }

    getHouses = () => {
        //?page=2
        axios.get(`https://www.anapioficeandfire.com/api/houses?page=${this.state.page}`)
        .then(res => {
            // console.log(res)
            this.setState({ houses: res.data})
        })
        .catch(err => (err))
    }

    // searchCharacters = () => {
    //     axios.get(`https://www.anapioficeandfire.com/api/characters?page=${this.state.page}`)
    //     .then(res => {
    //         this.setState({ characters: res.data,
    //                         search: res.data
    //                     })
    //     })
    //     .catch(err => (err))
    // }

    //make next page method, this.setState & update page to be prevState.page + 1, after it calls this .getHouses()
    //then make prev page -1 (create btns for both)

    //Pagination
    getNextHousePage = () => {
        this.setState((prevState) => ({
            page: prevState.page + 1
        }), () => this.getHouses()
        )
    }

    getPrevHousePage = () => {
        this.setState((prevState) => ({
            page: prevState.page - 1
        }), () => this.getHouses()
        )
    }

    render() {
        return (
                <CharContext.Provider
                    value={{
                        houses: this.state.houses,
                        getHouses: this.getHouses,
                        getNextHousePage: this.getNextHousePage,
                        getPrevHousePage: this.getPrevHousePage,
                        ...this.state

                    }}>
                    {this.props.children}
                </CharContext.Provider>
        )
    }
}

export default CharacterProvider

export const withChar = C => props => (
    <CharContext.Consumer>
        { value => <C {...value} {...props}/> }
    </CharContext.Consumer>
)

  {/* searchCharacters: this.searchCharacters */}