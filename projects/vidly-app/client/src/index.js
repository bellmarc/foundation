import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
const expressJwt = require("express-jwt");
import {BrowserRouter} from "react-router-dom";
import UserProvider from './context/UserProvider';


ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
document.getElementById('root'));

