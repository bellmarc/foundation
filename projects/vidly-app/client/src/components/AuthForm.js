import React from 'react';


function AuthForm(props) {
    const { handleChange, handleSubmit, inputs}
    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name=""
                value={username}
                onChange={handleChange}
                placeholder="UserName"/>
            <input
                type="text"
                name=""
                value={password}
                onChange={handleChange}
                placeholder="Password"/>
            <button>SignUp</button>
        </form>
    )
}


export default AuthForm