import React from 'react';
import './App.css';
import './style.css';
import FriendList from './FriendList';


const App = ()=> {
  const friends = [
    {
      name: "Anja",
      age: 29,
      pets: [
        {
          name: "Lehi",
          breed: "tabby"
        },{
          name: "Eli",
          breed: "husky"
        },{
          name: "Samson",
          breed: "labrador retriever"
        }
      ]
    },{
      name: "Fira",
      age: 31,
      pets: [
        {
          name: "Diego",
          breed: "Belgian Shepard"
        }
      ]
    },{
      name: "Alessandro",
      age: 25,
      pets: [
        {
          name: "Rodriguez",
          breed: "Akita"
        },{
          name: "Nali",
          breed: "persian cat"
        }
      ]
    },{
      name: "Aki",
      age: 20,
      pets: [
        {
          name: "Kai",
          breed: "Savannah cat"
        },{
          name: "Miki",
          breed: "Scottish fold  cat"
        },{
          name: "Nami",
          breed: "Ragdoll cat"
        },{
          name: "Hibiki",
          breed: "Siamese cat"
        }
      ]
    }
  ]

  return (
    <div className="App">
        <FriendList friends={ friends }/>
    </div>
  )
}

export default App;
