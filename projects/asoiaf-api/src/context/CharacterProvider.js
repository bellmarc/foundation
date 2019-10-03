import React from 'react';
import axios from 'axios';

const CharContext = React.createContext()
//CharContext.Provider
//CharContext.Consumer

class CharacterProvider extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            characters: [],
            houses: [],
            search: "",
            page: 1,

            // return: { show : false }
        }
    }

    getHouses = (pageNum) => {
        //?page=2
        axios.get(`https://www.anapioficeandfire.com/api/houses?page=${pageNum}`)
        .then(res => {
            // console.log(res)
            this.setState({ houses: res.data
            })
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

    //toggle prevBtn visibility && display currentPage


    //Pagination, know current page & decrement/increment
    //history push method
    getNextHousePage = (obj) => {
        // console.log(obj.pageNum)
        obj.history.push(`/houses/${(obj.pageNum + 1)}`)
        this.getHouses(obj.pageNum + 1)
    }

//validate if num is < 1 then page ==> 1
    getPrevHousePage = (obj) => {
        obj.history.push(`/houses/${(obj.pageNum - 1)}`)
        this.getHouses(obj.pageNum - 1)

    }
    //Return to Houses from SwornMembers Page
    // getToPrevPage = () => {
    //     const { show } = this.state.return;
    //         this.setState({ show: true })
    // }


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

