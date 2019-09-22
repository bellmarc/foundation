import React from 'react';

function Form(props) {
//      console.log(props)
     const {firstName, lastName, email, birthplace, phone, favFood, message, handleChange, handleSubmit} = props;
    return (
      <div>
          <label>Badge Form Sign-In</label>
        <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required/>
            <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required/>
            <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Email address"
                    required
                    />
            <input
                    type="birthplace"
                    name="birthplace"
                    value={birthplace}
                    onChange={handleChange}
                    placeholder="Place of Birth"
                    required
                    />
            <input
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={handleChange}
                    placeholder="Contact Number"
                    required/>
            <input
                    type="favFood"
                    name="favFood"
                    value={favFood}
                    onChange={handleChange}
                    placeholder="Favorite food"
                    required/>
            <input
                    className="textarea"
                    type="textarea"
                    name="message"
                    value={message}
                    onChange={handleChange}
                    placeholder="Tell us about yourself"
                    required/>
            <div>
                <button>Submit</button>
            </div>

        </form>
      </div>
    )
}


export default Form