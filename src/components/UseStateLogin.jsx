import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "../styles/Login.css";
import UseStateRegister from "./UseStateRegister";

const UseStateLogin = ({ closeform }) => {
  const [register, setRegister] = useState(false);

  const handleregister = () => {
    setRegister(true); // Show Register Form
  };

  const handleLogin = () => {
    setRegister(false); // Show Login Form
  };

  return (
    <div className="login-overlay">
      {register ? (
        <UseStateRegister handleLogin={handleLogin} closeform={closeform} />
      ) : (
        <div className="login-container">
          <MdClose className="close-icon" onClick={closeform} />
          <h2>Botiga</h2>
      
          <h3>Log In</h3>

          <label>Email</label>
          <input type="email" placeholder="username@gmail.com" />

          <label>Password</label>
          <input type="password" placeholder="Enter password" />

          <a href="#" className="forgot-password">Forgot Password?</a>

          <button type="button" className="login-btn">Sign in</button>

          <span>
            Don't have an account yet?{" "}
            <a href="#" onClick={handleregister}>Register for free</a>
          </span>
        </div>
      )}
    </div>
  );
};

export default UseStateLogin;
