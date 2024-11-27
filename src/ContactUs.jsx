import React, { useState } from "react";
import "./ContactUs.css";

function Contactus() {
    const [contactForm, setContactForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

   
    return (
        <div className="contact-form-container">
            <h1 id="cu-head ">Contact Us</h1>
            <form action="https://formspree.io/f/xwpknnqg" method="POST">
                <label htmlFor="cu-name" className="cu-name">
                    <strong>Name:</strong>
                </label>
                <input
                    type="text"
                    id="cu-name"
                    name="name"
                    placeholder="Enter your First Name"
                    required
                    value={contactForm.name}
                    onChange={handleChange}
                />

                <label htmlFor="cu-emailaddress">
                    <strong>Email:</strong>
                </label>
                <input
                    type="email"
                    id="cu-emailaddress"
                    name="email"
                    placeholder="Enter your Email"
                    required
                    value={contactForm.email}
                    onChange={handleChange}
                />

                <label htmlFor="cu-message">
                    <strong>Message:</strong>
                </label>
                <textarea
                    placeholder="Your Message"
                    id="cu-message"
                    name="message"
                    required
                    value={contactForm.message}
                    onChange={handleChange}
                ></textarea>

                <button type="submit" id="cu-send">
                    Send
                </button>
            </form>
        </div>
    );
}

export default Contactus;