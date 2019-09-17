import React from "react";
import MyForm from "./MyForm";

function Contact(){
    return (
        <div className="contact-container">
            <MyForm />
            <p className="address-title">Our Address:</p>
            <p>
                159 Broadway
                Suite 200
                Salt Lake City, UT 84101
            </p>
        </div>
    )
}


export default Contact