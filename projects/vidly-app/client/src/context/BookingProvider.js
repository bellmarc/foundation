import React from 'react';
import axios from 'axios';

const BookingContext = React.createContext()
let userAxios = axios.create();

userAxios.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

class BookingProvider extends React.Component {
    constructor(){
        super()
        this.state = {
            users: [],
            locations: [],
        }
    }

    getLocations = () => {
        userAxios.get("/api/user")//find pro userType
        .then (res =>{
            this.setState({
                locations:[...res.data]
            })
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <BookingContext.Provider
                value={{
                    ...this.state,
                    getLocations: this.getLocations
                }}>
                { this.props.children }
            </BookingContext.Provider>
        )
    }
}

export default BookingProvider

export const withBooking = C => props => (
    <BookingContext.Consumer>
        { value => <C {...value} {...props}/>}
    </BookingContext.Consumer>
)