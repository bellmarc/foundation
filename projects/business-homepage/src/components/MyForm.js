import React from "react"

function MyForm() {
    return (
        <form className="form" noValidate>
        {/* <img /> */}
            <p>Let's get in touch</p>
            <input type="text" placeholder="Company/ Organization" required/>
            <input type="text" name="firstname" placeholder="First Name" required/>
            <input type="text" name="lastname" placeholder="Last Name" required/>
            <input type="email" name="email" placeholder="Email address" required/>
            Give us an idea about your company's personality, future goals, budget and timeline so we can better assist you.
            <input type="textarea" name="message" placeholder="Message" required/>
            <input type="text" name="current" placeholder="Current Website URL"/>
            <input type="submit" value="Submit"/>
            {/* reCAPTCHA */}
    </form>

    )
}

export default MyForm