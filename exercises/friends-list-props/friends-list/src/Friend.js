import React from 'react'
import Pet from './Pet';

//Age even = blue : odd = green which component's job is to rcv age & display it (friends)

// receives a prop
const Friend = props => {
    // needs to receive data & display it

    const mappedPets = props.pets.map(pet =>
                                <Pet
                                    name={ pet.name }
                                    bred={ pet.breed }
                                    key={ Math.random() }
                                />)
    // let chosenColor

    // if(props.age % 2 === 0) {
    //     chosenColor = "dodgerblue"
    // } else {
    //     chosenColor= "palegreen"
    // }

    return (
        // <div className="friend-container" style={{backgroundColor: chosenColor}}>
        <div
            className="friend-container"
            style={{backgroundColor: props.age % 2 === 0 ? "palegreen" : "dodgerblue" }}>
            <h1>{ props.name }</h1>
            <p>{ props.age }</p>
            { mappedPets }
        </div>
    )
}


export default Friend