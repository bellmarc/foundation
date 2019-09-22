import React from 'react';


function BadgeForm(props){
  const {firstName, lastName, email, birthplace, phone, favFood, message} = props;
    return (
            <div>
          <label>Badge Completed </label>
        <form>
          <div className="badge-banner">Badge</div>
                <h4>First Name: {firstName}</h4>
                <h4>Last Name: {lastName}</h4>
                <h4>Place of Birth: {birthplace}</h4>
                <h4>Contact Number: {phone}</h4>
                <h4>Favorite Food: {favFood}</h4>
                <h4>Email: {email}</h4>
            <div className="badge-msg-display">
                <div className="badge-msg">Message: {message}</div>
            </div>
        </form>
      </div>
    )

}


export default BadgeForm
