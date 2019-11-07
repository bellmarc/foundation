import React from 'react';
import "../style/Registration.css";
import SignUpForm from './SignUpForm.js';
// import LoginForm from './LoginForm.js';
import { withUsers } from '../context/UserProvider.js';


class Register extends React.Component {
    render() {
        return (
            <div className="registration-container">
                <SignUpForm
                   />
                {/* Toggle Between Sign-Up/Login Forms */}
                {/* <LoginForm /> */}
            </div>
        )
    }
}


export default withUsers(Register)