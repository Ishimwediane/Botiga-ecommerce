import React from "react";
import '../styles/Contact.css'

import "@fontsource/inter"; 
import "@fontsource/inter/700.css"; 
import MyGoogleMap from "./MyGoogleMap";
const Contact = () => {
  return (<>
    {/* <MyGoogleMap /> */}
    <div className="contact-container">
      <div className="form-section">
        <h2>Leave Us a Message</h2>
        <form>
          <label>Name *</label><br />
          <div className="name-fields">
            <input type="text" placeholder="First" required />
            <input type="text" placeholder="Last" required />
          </div>
          <label>Email *</label>
          <input type="email" placeholder="Enter your email" required />
          <label>Comment or Message</label>
          <textarea placeholder="Write your message here..." />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
      <div className="info-section">
        <h2>Our Store</h2><br /> 
        <p>501-521 Fashion Ave, New York, NY 10018, USA</p><br /><br /><br />
        <p>PHONE:<br /> +1 212 244 2681</p><br /><br /><br />
        <p>E-MAIL:<br /> office@example.org</p><br /><br /><br /><br /><br />
        <h2>Store Hours</h2><br />
        <p>Sun: Closed</p><br />
        <p>Mon to Sat: 10 AM – 5:30 PM</p>
      </div>
    </div></>
  );
};

export default Contact;