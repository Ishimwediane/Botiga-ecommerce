import React from "react";
import "../styles/Login.css";
import { MdClose } from "react-icons/md";

const UseStateRegister = ({ handleLogin, closeform }) => {
  return (
    <div className="login-overlay">
      <div className="login-container">
        <MdClose className="close-icon" onClick={closeform} />
        <h2>Botiga</h2>
        <h3>Create an Account</h3>

        <label>Full Name</label>
        <input type="text" placeholder="Enter your full name" required />

        <label>Email Address</label>
        <input type="email" placeholder="username@gmail.com" required />

        <label>Password</label>
        <input type="password" placeholder="Enter a strong password" required />

        <label>Confirm Password</label>
        <input type="password" placeholder="Re-enter your password" required />

        <button type="button" className="login-btn">Register</button>

        <span>
          Already have an account?{" "}
          <a href="#" onClick={handleLogin}>Sign in</a>
        </span>
      </div>
    </div>
  );
};

export default UseStateRegister;
