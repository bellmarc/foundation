import React from 'react'

const Card = ({place, price, timeToGo, imgURL})=> {

    const imgStyle = {
        width:'100%',
    }
    // Adding Dollar Signs based on price
    let dollarCost

    if(price <= 500) {
        console.log(dollarCost = "$")
    } else if (price <= 800){
        console.log(dollarCost = "$$")
    } else {
        console.log(dollarCost = "$$$")
    }

    // Adding colors based on Season
    let bgColor

    if(timeToGo === "Fall"){
        bgColor = "#F7DEB8"
    } else if (timeToGo === "Winter"){
        bgColor = "whitesmoke"
    } else if (timeToGo === "Spring"){
        bgColor = "palegreen"
    } else {
        bgColor = "#F1B4B1"
        // Above if statement could use: backgroundColor: "green" as another way and call BgColor in bgStyle
    }

    const bgStyle = {
        backgroundColor: bgColor
    }

    return (
        <div className="card-container" style={bgStyle}>
        <div>
            <h1>{place} </h1>
            <h2>{price} </h2>
            <h3>{dollarCost}</h3>
            </div>
            <h3>{timeToGo} </h3>
            <img alt={place} style={imgStyle} src={imgURL}/>
        </div>

    )
}


export default Card