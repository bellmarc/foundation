import React, { useContext } from 'react';
import Auth from 'components/Auth.js'
import PublicPosts from './components/PublicPosts.js';
import Profile from './components/Profile.js';
import Navbar from './components/Navbar.js';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { UserContext } from './context/UserProvider';

function App() {
  const { token, logout } = useContext(UserContext)
  return (
    <div>
      <Switch>
        {token && <Navbar logout={logout}/> }
        <Route exact path="/"
               render={rProps => token ?
                              <Redirect to ="/public"/>
                              : <Auth {...rProps}/> }/>
        <Route path="/public"
               render={rProps =>                           <PublicPosts {...rProps}/> }/>
        <Route path="/profile"
               render={rProps =>                           <Profile {...rProps}/> }/>
      </Switch>

    </div>
  )
}



export default App;
