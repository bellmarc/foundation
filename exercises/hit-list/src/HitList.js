import React from 'react';
// const asoiaf = require('asoiaf-api')


function HitList(props) {
    console.log(props)
   const mappedList = props.hitlist.map( (hit, i) => {
            return (
                <div key={i} >
                    <h1 style={{backgroundColor: `#${props.bgColor}`}}>{hit.name}
                    </h1>
                    <img className="image" alt="item" src={hit.image}/>
                </div>

            )
    })
    return (
        <div className="hit-container">
           {mappedList}
        </div>
    )
}




export default HitList