import React from 'react';

//props from HouseList
const HouseCard = (props) => {
    return (
        <div>
            <Link to={{
                    pathname: "/members",
                    state: {swornMembers: props.swornMembers}
            }} />

        <div className="house-card-container" style={bgStyle}>
            <h1>House name </h1>
            <h2>House Motto </h2>
            <h3>House region</h3>
        </div>
            {/* <img alt={house} style={imgStyle} src={imgURL}/> */}
        </div>
        )
}




export default HouseCard