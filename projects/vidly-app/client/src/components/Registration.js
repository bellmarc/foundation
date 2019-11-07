import React from 'react';
import "../style/Registration.css";
import SignUpForm from './SignUpForm.js';


class Register extends React.Component {

    render() {
        return (
            <div className="registration-container">
                <SignUpForm
                   />
                {/* Toggle Between Sign-Up/Login Forms */}
                {/* <Login /> */}
            </div>
        )
    }
}


export default Register