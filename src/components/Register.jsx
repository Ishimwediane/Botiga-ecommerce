import React, { useState } from "react";
import '../styles/Register.css'

const Register = () => {
  const [role, setRole] = useState("customer");

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <form>
          <label>
            Username or email address *
            <input type="text" required />
          </label>
          <label>
            Password *
            <input type="password" required />
          </label>
          <div className="checkbox-container">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <button type="submit">LOG IN</button>
          <a href="#">Lost your password?</a>
        </form>
      </div>
      <div className="auth-box">
        <h2>Register</h2>
        <form>
          <label>
            Email address *
            <input type="email" required />
          </label>
          <p>A link to set a new password will be sent to your email address.</p>
          <div className="radio-container">
            <label>
              <input
                type="radio"
                name="role"
                value="customer"
                checked={role === "customer"}
                onChange={() => setRole("customer")}
              />
              I am a customer
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="vendor"
                checked={role === "vendor"}
                onChange={() => setRole("vendor")}
              />
              I am a vendor
            </label>
          </div>
          <button type="submit">REGISTER</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
