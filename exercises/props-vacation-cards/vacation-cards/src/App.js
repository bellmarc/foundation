import React from 'react';
import './App.css';
import Card from './Card';


let vacationSpots = [
  {
    place: "Valencia, Spain",
    price: 450,
    timeToGo: "Spring",
    imgURL: "https://images.pexels.com/photos/256150/pexels-photo-256150.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
  },{
    place: "Bali, Indonesia",
    price: 900,
    timeToGo: "Winter",
    imgURL: "https://images.pexels.com/photos/2659475/pexels-photo-2659475.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
  },{
    place: "Boracay, Philippines",
    price: 600,
    timeToGo: "Fall",
    imgURL: "https://images.pexels.com/photos/1714455/pexels-photo-1714455.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
  },{
    place: "Santiago del Teide, Spain",
    price: 700,
    timeToGo: "Summer",
    imgURL: "https://images.pexels.com/photos/2486194/pexels-photo-2486194.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
  },{
    place: "Kyoto, Japan",
    price: 1500,
    timeToGo: "Spring",
    imgURL: " https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
  }
]

function App() {
  const mappedSpots = vacationSpots.map(spot => {
     return (
      <Card place={spot.place}
            price={spot.price}
            timeToGo={spot.timeToGo}
            imgURL={spot.imgURL}
      />
    );
  })

  return (
    <div className="App">
      {mappedSpots}
    </div>
  )
}

export default App;
