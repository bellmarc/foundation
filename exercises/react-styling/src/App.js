import React from 'react';
import BoxProps from './BoxProps';

const boxes = [
  {
    boxId: "trip-plan",
    title: "We'll arrange your trip",
    subtitle: "Trip planners save you time",
    info: "Spend less time planning and more time enjoying your next trip",
    imgURL: "https://images.pexels.com/photos/721169/pexels-photo-721169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    boxId: "thai",
    title: "Thailand getaway",
    subtitle: "tropical oasis",
    info: "Come visit our resort",
    imgURL: "https://images.pexels.com/photos/2070485/pexels-photo-2070485.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    boxId: "hike",
    title: "Hiking/Outdoor Adventures",
    subtitle: "From the mountaintops",
    info: "Trek the mountains",
    imgURL: " https://images.pexels.com/photos/733162/pexels-photo-733162.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    boxId: "downtown",
    title: "Downtown Tour",
    subtitle: "Personal tour guides",
    info: "City life exploration",
    imgURL: "https://images.pexels.com/photos/415708/pexels-photo-415708.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    boxId: "bnb",
    title: "Bed & Breakfast On Us",
    subtitle: "Best Hotel resorts",
    info: "You'll be surrounded by beauty of the city",
    imgURL: "https://images.pexels.com/photos/2411759/pexels-photo-2411759.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
]

function App() {
  const mappedBoxes = boxes.map(box => {
  return (
    <BoxProps boxId={box.boxId}
              title={box.title}
              subtitle={box.subtitle}
              info={box.info}
              imgURL={box.imgURL}
    />
  )
})

  return (
      <div className="App">
        {mappedBoxes}
      </div>
  );
}

export default App;









// import React from 'react';
// import Box from './Box';

// function App() {
//   return (
//     <div className="container">
//       <Box subtitle="box1"/>
//       <Box Title="box2"/>
//       <Box Subtitle="box3"/>
//       <Box Info="box4"/>
//       {/* <Box whichSection="box5"/>
//       <Box whichSection="box6"/>
//       <Box whichSection="box7"/>
//       <Box whichSection="box8"/>
//       <Box whichSection="box9"/>
//       <Box whichSection="box10"/> */}
//     </div>
//   );
// }

// export default App;

