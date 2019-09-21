import React from 'react';

function Form(props) {
     console.log(props)
    return (
      <div>
          <label>Badge Form Sign-In</label>
        <form onSubmit={props.handleSubmit}>

                <input
                    type="text"
                    name="firstName"
                    value={props.firstName}
                    onChange={props.handleChange}
                    placeholder="First Name"
                    required/>
            <input
                    type="text"
                    name="lastName"
                    value={props.lastName}
                    onChange={props.handleChange}
                    placeholder="Last Name"
                    required/>
            <input
                    type="email"
                    name="email"
                    value={props.email}
                    onChange={props.handleChange}
                    placeholder="Email address"
                    />
            <input
                    type="birthplace"
                    name="birthplace"
                    value={props.birthplace}
                    onChange={props.handleChange}
                    placeholder="Place of Birth"
                    />
            <input
                    type="phone"
                    name="phone"
                    value={props.phone}
                    onChange={props.handleChange}
                    placeholder="Contact Number"/>
            <input
                    type="favFood"
                    name="favFood"
                    value={props.favFood}
                    onChange={props.handleChange}
                    placeholder="Favorite food"/>
            <input
                    className="textarea"
                    type="textarea"
                    name="message"
                    value={props.message}
                    onChange={props.handleChange}
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