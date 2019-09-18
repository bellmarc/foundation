import React from 'react';
import PropTypes from 'prop-types';

// PropTypes to make sure data you receive is valid

const NumberDisplayer = (props) => {
    return (
        <div>
            {props.num}
        </div>
    )
}

const address = {
    street: "600 Corporate Point",
    city: "Culver City",
    zip: 90230
}

// reinforces these rules
NumberDisplayer.propTypes = {
    num: PropTypes.number,
    name: PropTypes.string.isRequired,
    isAlive: PropTypes.bool,
    speak: PropTypes.func,
    friends: PropTypes.arrayOf(PropTypes.string),
    address: PropTypes.shape({ //reinforces your types, ways to validate
        street: PropTypes.string,
        city: PropTypes.string,
        zip: PropTypes.number
    })
}


export default NumberDisplayer