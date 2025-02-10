import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import footerimage from '../assets/image/footer-payment.png.webp'
import '../styles/Footer.css'

import "@fontsource/inter"; 
import "@fontsource/inter/700.css"; 

function Footer(){
    return(
            <footer className="footer">
              <div className="footer-container">
                
                <div className="newsletter">
                  <h2>Stay up to date</h2><br /><br />
                  <p>Subscribe to our newsletter and get 20% discount offer in your first order.</p>
                  <div className="subscribe"><br/><br/>
                    <input type="email" placeholder="Enter your email" />
                    <button>SUBMIT</button>
                  </div>
                </div>
        
                
                <div className="contact">
                  <h2>Happy to help</h2><br /><br />
                  <p>
                    1279 Thorn Street, NY <br />
                    Phone: 307-549-2480 <br />
                    Mail: demo@gmail.com
                    
                  </p><br /><br />
                  <div className="footer-icons">
                  <FaFacebook />
                  <FaXTwitter />
                  <IoLogoLinkedin />
                  <FaInstagram />
                  </div>
                </div>
        
                
                <div className="links">
                  <div>
                    <h3>SHOP</h3><br/>
                    <ul>
                      <li>Body Lotion</li>
                      <li>Computer Gadget</li>
                      <li>Electronics</li>
                      <li>Fashion</li>
                      <li>General</li>
                      <li>Shoes</li>
                    </ul>
                  </div>
                  <div>
                    <h3>COMPANY</h3><br/>
                    <ul>
                      <li>About</li>
                      <li>Careers</li>
                      <li>Help</li>
                      <li>Contact</li>
                    </ul>
                  </div>
                  <div>
                    <h3>ABOUT</h3><br/>
                    <ul>
                      <li>Who We Are</li>
                      <li>Reviews</li>
                      <li>Contact</li>
                    </ul>
                  </div>
                
             
        
             
              <div>
                <h3>ACCEPT FOR</h3>
                <img src={footerimage} style={{
                    width:"300px",
                    marginTop:"30px"
                    }}/>
                </div>
              </div> </div>
            </footer>
          )
}
export default Footer