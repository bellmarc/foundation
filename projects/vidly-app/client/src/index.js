import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'antd/dist/antd.css';
import 'tachyons';
import App from './App';
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
document.getElementById('root'));

