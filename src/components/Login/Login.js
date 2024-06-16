import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-page">
      <h2>Log in to your account</h2>
      <p>Welcome back! Please enter your details.</p>
      <form>
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
        
        <label>Password</label>
        <input type="password" placeholder="********" />
        
        <div className="actions">
          <div>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember for 30 days</label>
          </div>
          <a href="#">Forgot password</a>
        </div>
        
        <button type="submit">Sign in</button>
        
        <button type="button" className="google-btn">
          Sign in with Google
        </button>
      </form>
      <p>Don’t have an account? <a href="#">Sign up</a></p>
    </div>
  );
};

export default Login;
