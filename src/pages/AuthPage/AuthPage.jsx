import React, { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import "./AuthPage.css";

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main>
      <div className="full-screen-container">
      <div className="login-container">
      <h1 className="authpage">Glow Up Suite</h1>
      <h2 className="authpage">Please Enter Your Log In Information Below</h2> 
      <div className="input-group">
      { showSignUp ?
       
        <SignUpForm setUser={setUser} />
        :
        <LoginForm setUser={setUser} />
        
      }
      <button className="login-button" onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
      </div>
      </div>
      </div>
      </main>
  );
}