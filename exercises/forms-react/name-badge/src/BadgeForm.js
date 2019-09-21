import React from 'react';


function BadgeForm(props){
    return (
            <div>
          <label>Badge Completed </label>
        <form>

                <h4>First Name: {props.firstName}</h4>
                <h4>Last Name:{props.lastName}</h4>
                <h4>Place of Birth:{props.birthplace}</h4>
                <h4>Favorite Food:{props.favFood}</h4>
                <h4>Email:{props.email}</h4>
            <div>
                <div>Message:</div>
            </div>
        </form>
      </div>
    )

}


export default BadgeForm