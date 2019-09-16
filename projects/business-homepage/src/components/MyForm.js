import React from "react"

function MyForm() {
    return (
        <form className="form" noValidate>
            <div className="contact-hero">
                <div className="contact-hero-inner">
                    <p>Let's get in touch</p>
                </div>
            </div>
            <p className="contact-intro">Contact Us:</p>
            <div className="form-input">
                <input type="text" placeholder="Company/ Organization" required/>
                <input type="text" name="firstname" placeholder="First Name" required/>
                <input type="text" name="lastname" placeholder="Last Name" required/>
                <input type="email" name="email" placeholder="Email address" required/>
                <p>Give us an idea about your company's personality, future goals, budget and timeline so we can better assist you.</p>
                <input type="textarea" name="message" placeholder="Message" required/>
                <input type="text" name="current" placeholder="Current Website URL"/>
                <button className="submit">Submit</button>
                {/* reCAPTCHA */}
            </div>
    </form>

    )
}

export default MyForm