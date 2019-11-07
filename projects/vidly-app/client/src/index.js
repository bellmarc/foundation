import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'antd/dist/antd.css';
import 'tachyons';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import UserProvider from './context/UserProvider.js';

ReactDOM.render(
    <BrowserRouter>
        <UserProvider>
            <App />
        </UserProvider>
    </BrowserRouter>,
document.getElementById('root'));

