import React from 'react';


function BoxContainer(props) {
    const bgColors = props.bgColors
    const textColor = props.textColor

    return (
        <div className="box-container">
            <header>DJ React</header>
            <p>With Colors</p>
            <div className="box1" style={{backgroundColor: bgColors[0],
                color: textColor[0]}}>Box 1</div>
            <div className="box2" style={{backgroundColor: bgColors[1],
            color: textColor[1]}}>Box 2</div>
            <div className="box3" style={{backgroundColor: bgColors[2],
            color: textColor[2]}}>Box 3</div>
            <div className="box4" style={{backgroundColor: bgColors[3],
            color: textColor[3]}}>Box 4</div>

        </div>

    )
}


export default BoxContainer