import React from "react";
import '.././App.css';


const ContactUs = () => {
  return (
<main className="contact">
    <section className="contact-items">
        <h2>Contact Us</h2>
        <input type="text" className="contact-item" placeholder="Name..." required autoFocus/>
        <input type="tel" className="contact-item" placeholder="Phone number..." required/>
        <input type="email" className="contact-item" placeholder="Email..." required/>
        <textarea cols="30" rows="10" className="contact-item"></textarea>
        <input type="submit" value="Submit" className="contact-item-btn"/>
    </section>
</main>
  );
};

export default ContactUs;