import React from 'react'

const BoxProps = ({boxId, title, subtitle, info, imgURL}) => {
    const style = {
        display:"grid",
        gridTemplateColumns:"1fr 1fr 1fr",
        textAlign: "center",
        border: "2px solid #D4E6E6",
        background: "linear-gradient(#F2BD89, #D4E6E6)"
    }

    const imgStyle = {
       width: '100%',

    }
    // const style2 { //to change 1 part of boxDeco

    // }


    return (
        <div style={style} className={boxId}>
        <div>
            <h1>{title} </h1>
            <h2>{subtitle} </h2>
            </div>

            <h3>{info} </h3>
            <img alt={title} style={imgStyle} src={imgURL}/>
        </div>
    )
}


export default BoxProps
