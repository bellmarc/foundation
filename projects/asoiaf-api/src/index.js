import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './style/App.css';
import './style/navbar.css';
import './style/splash.css';
import './style/house-card.css';
import './style/characters.css';
import './style/footer.css';
import App from './App';
import CharacterProvider from './context/CharacterProvider';



ReactDOM.render(
    <BrowserRouter>
    <CharacterProvider>
        <App />
    </CharacterProvider>
    </BrowserRouter>,
 document.getElementById('root'));

