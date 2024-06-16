import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <div className="signup-page">
      <h2>Create your account</h2>
      <p>Welcome! Please fill in your details to sign up.</p>
      <form>
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
        
        <label>Password</label>
        <input type="password" placeholder="********" />
        
        <label>Confirm Password</label>
        <input type="password" placeholder="********" />
        
        <button type="submit">Sign up</button>
        
        <button type="button" className="google-btn">
          Sign up with Google
        </button>
      </form>
      <p>Already have an account? <a href="#">Log in</a></p>
    </div>
  );
};

export default Signup;
