import React from 'react';
import "../style/Registration.css";
import SignUp from './SignUp.js';


function Register() {
    return (
        <div className="registration-container">
            <SignUp />
            {/* Toggle Between Sign-Up/Login Forms */}
            {/* <Login /> */}
        </div>
    )
}


export default Register