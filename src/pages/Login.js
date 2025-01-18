import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import './Login.css';

function Login() {
  const handleSuccess = (credentialResponse) => {
    console.log(credentialResponse);
  };

  const handleError = () => {
    console.log('Login Failed');
  };

  return (
    <div className="lofocon">
      <h1 id="fh">HealthBook</h1>
      <div className="yourd">
        <p id="your">I am:</p>
        <select id="pdh" name="pdh">
          <option value="pat">Patient</option>
          <option id="doc">Doctor</option>
          <option id="hos">Hospital</option>
        </select>
      </div>

      <input type="text" id="user" name="user" placeholder="Username" />
      <input type="password" id="pass" name="pass" placeholder="Password" />
      <button type="submit" id="subtn">
        Log in
      </button>

      <p id="or">OR</p>

      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />

      <div className="donacc">
        <p id="dont">Don't have an account?</p>
        <a href="#" id="sigup">
          Sign up
        </a>
      </div>
    </div>
  );
}

export default Login;
