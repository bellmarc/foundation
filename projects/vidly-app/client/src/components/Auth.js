import React, { useState, useContext } from 'react';
import AuthForm from './AuthForm.js';
import {UserContext} from '../context/UserProvider.js';
//need a form
//login & signup
//state for our inputs
//handleChange/ handleSubmit

function Auth() {
    const initState = { username: "", password = "" }
    const { signup, login } = useContext(UserContext)
    // const userData = useContext(UserContext)
    //state
    const [inputs, setInputs] = useState(initState)
    //toggle Forms, dynamically render one or the other
    const [toggle, setToggle] =useState(false)

    const handleChange = e => {
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs, //spread prev & evaluate name on next line
             [name]: value
        }))
    }
    const handleSignUpSubmit = e => {
        e.preventDefault()
        signup(inputs)
        setInputs(initState)
    }
    const handleLoginSubmit = e => {
        e.preventDefault()
        login(inputs)
        setInputs(initState)
    }

    return (
        <div>
            {!toggle ?
            <>
                <AuthForm
                        inputs={inputs}
                        handleChange={handleChange}
                        handleSubmit={handleSignupSubmit}
                        btnText="Signup"
                />
                <p onClick={()=> setToggle(prevToggle => !prevToggle)}>Already A Member?</p>
            :
                <AuthForm
                        inputs={inputs}
                        handleChange={handleChange}
                        handleSubmit={handleLoginSubmit}
                        btnText="Login"
                />
            </>
            }
        </div>
    )
}

export default Auth