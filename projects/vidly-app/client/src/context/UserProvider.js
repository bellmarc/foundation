import React, { useState } from 'react';
import axios from 'axios';


export const UserContext = React.createContext()
const userAxios = axios.create()

userAxios.interceptors.request.use((config)=> {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function UserProvider(props) {
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        locations:
    }
    const [userState, setUserState] = useState(initState)
    //signup receives username & pw
    const signup = credentials = {
        axios.post("/auth/signup", credentials)
        .then(res => {
            const { user, token } = res.data
            localStorage.setItem ("user", JSON.stringify(user))
            localStorage.getItem("token", token)
             setUserState(res.data)
        })
        .catch(err =>
            console.log(err.response.data.errMsg))
    }

    //Login
    const login = credentials = {
        axios.post("/auth/login", credentials)
        .then(res => {
            localStorage.setItem("user", JSON.stringify(user))
            localStorage.setItem("token", token)
             setUserState(res.data)
        })
        .catch(err =>
            console.log(err.response.data.errMsg))
    }

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            locations: [],
            userLocations: []
        })
    }
    const getAllLocations = () = {
        userAxios.get("/api/locations")
            .then(res => {
                setUserState(prevUserState)
                console.log(res)
            })
            .catch(err = console.log(err))
    }

    const getUserLocations = () => {
        userAxios.get("api/post/user")
        .then(res => {
            setUserState(prevUserState)
        })
    }

    return(
        <UserContext.Provider
                value={{
                    user:userState.user,
                    token: userState.token,
                    signup: signup,
                    login: login,
                    logout: logout,
                    getAllLocations: getAllLocations,
                    getUserLocations: getUserLocations
                }}>
            { props.children }
        </UserContext.Provider>
    )
}

export default UserProvider