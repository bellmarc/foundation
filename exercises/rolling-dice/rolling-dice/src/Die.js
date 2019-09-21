import React from 'react';


const Die = (props) => { //MAPPING W/ARRAY
    //below newDie fcn returns 3 things: value, indexOfValue in Arr & entire Arr
    function newDie(value, index, array){
        return <div className="die" key={index}>
           
            <div className=".circle">
                {/* //put dots in places */}
                </div>
            </div>
    }//this fcn runs 5 times & passes 5 divs
    const newArr = props.num.map(newDie) //newDie ran for however many # in array (5x, returns 5 numbers)

    return newArr

}



//Same as:
// export default (props) => {
//     // props.secondkey
//     return props.num.map(function(value, index, arr)=>{
//        return (
//        <div>{props.value}</div>
//    })
// }


export default Die


