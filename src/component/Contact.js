import React from "react";
import '../styles/Contact.css'
import maharashtra from '../images/maharashtra.png'

function Contact()
{
    return(
        <div className="contact">
            <div className="leftSide">
            <div style={{backgroundImage: `url(${maharashtra})`}}></div>

            </div>
            <div className="rightSide">
                <h1>Contact Us</h1>
                <form id="contact-form">
                    <lable>Name:</lable>
                    <input type="text" placeholder="Enter your Name" />
                    <label>Email</label>
                    <input type="email" placeholder="Enter your Email ID" />
                    <label>Message</label>
                    <textarea name="message" 
                    placeholder="Enter Your Message"
                    rows={7}>
                         </textarea>
                        <button type="submit">Submit</button>


                </form>
            </div>
        </div>
    )
}
export default Contact;