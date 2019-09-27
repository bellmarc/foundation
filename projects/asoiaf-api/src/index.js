import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './style/App.css';
import App from './App';
import CharacterProvider from './context/CharacterProvider';



ReactDOM.render(
    <BrowserRouter>
    <CharacterProvider>
        <App />
    </CharacterProvider>
    </BrowserRouter>,
 document.getElementById('root'));

