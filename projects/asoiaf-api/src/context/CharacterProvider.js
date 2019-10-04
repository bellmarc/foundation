import React from 'react';
import axios from 'axios';


const CharContext = React.createContext()
//CharContext.Provider
//CharContext.Consumer

class CharacterProvider extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            searchResult: {},
            houses: [],
            search: "",
            page: 1
            // filtered: []
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
//Normalize casing of user search results
    formattedSearch = () => {
        const nameInDB = this.state.search.split(" ");
        const firstName = nameInDB[0][0].toUpperCase() + nameInDB[0].slice(1).toLowerCase()
        const lastName = nameInDB[1][0].toUpperCase() + nameInDB[1].slice(1).toLowerCase()
        const fullName = firstName + " " + lastName
        return fullName
        }

//getting data
    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state.search) change first ltr of of each word toUpperCase
            const formatted = this.formattedSearch()
            axios.get(`https://api.got.show/api/show/characters/${formatted}`)
            .then(res => {
                this.setState({
                    searchResult: res.data,
                    search: ""
               }, ()=> console.log(this.state.searchResult ))
            })
            .catch(err => console.log(err))
    }

    handleChange = (e) => {
    //users input to save for search, form for search input, handleSubmit
        this.setState({
            search: e.target.value
        }, () => console.log(this.state.search))
    }

    //Pagination, know current page history & decrement/increment
    getNextHousePage = (obj) => {
        console.log(obj)
        if(obj.id ){
            obj.history.push(`/houses/${ (Number(obj.id) + 1) }`)
            this.getHouses(obj.id + 1)
        } else if (obj.searchResult === {}){
            // hideNextPage()
        } else  {
            obj.history.push("/houses/1")
            this.getHouses(1)
        }
    }
//if next page has results show value if it doesn't no nextPage| assign className hidden

    // hideNextPage = () => {
    //     let hideNextClass;
    //         //set nextBtn className to hidden
    //         hideNextClass: "hidden"
    // }

//validate if num is < 1 then page ==> 1
    getPrevHousePage = (obj) => {
        obj.history.push(`/houses/${(obj.id - 1)}`)
        this.getHouses(obj.id - 1)

    }

    render() {
        return (
                <CharContext.Provider
                    value={{
                        search: this.state.search,
                        houses: this.state.houses,
                        getHouses: this.getHouses,
                        getNextHousePage: this.getNextHousePage,
                        getPrevHousePage: this.getPrevHousePage,
                        handleSubmit: this.handleSubmit,
                        handleChange: this.handleChange,
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

