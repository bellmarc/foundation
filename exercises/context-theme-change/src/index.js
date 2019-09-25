import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/App.css';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './Context/ThemeProvider';

ReactDOM.render(
    <BrowserRouter>
    <ThemeProvider>
        <App />
        </ThemeProvider>
    </BrowserRouter>,
document.getElementById('root'));


