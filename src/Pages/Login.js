import {React, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {


  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const Navigate = useNavigate();
  
  const submitevent = (e) => {
    e.preventDefault();
    localStorage.setItem('user', username)
    localStorage.setItem('password', password)
    Navigate('/Class')
  }


  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address: </label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={(e) => {
                setUsername(e.target.value);
              }}

            />
            <br />
          </div>
          <div className="form-group mt-3">
            <label>Password: </label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick= {submitevent} >
              Submit
            </button>
          </div>
          <button className="forgot-password text-right mt-2">
            Forgot password?
          </button>
        </div>
      </form>
    </div>
  )
}
  

export default Login;