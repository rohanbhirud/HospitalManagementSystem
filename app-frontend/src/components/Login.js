import React, { Component, createContext, useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { userLogin, fetchUserData, doCompleteLogin } from '../api/authenticationService';
export default function Login() {

  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    doCompleteLogin(state);
    
    if (localStorage.getItem('jwt') == null) {
      document.getElementById("login_check").hidden = true;
    } else {
      document.getElementById("login_check").hidden = false;
    }

  };

  return (
    <div className='container mt-5'>
      <form onSubmit={handleLogin}>
        <div className="row form-outline mb-4">
          <input type="text" id="username" className="form-control" value={state.username}
            onChange={(e) => setState({ ...state, username: e.target.value })} />
          <label className="form-label" htmlFor="username">Username</label>
        </div>

        <div className="row form-outline mb-4">
          <input type="password" id="password" className="form-control" value={state.password}
            onChange={(e) => setState({ ...state, password: e.target.value })} />
          <label className="form-label" htmlFor="password">Password</label>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4" >Sign in</button>
      </form>
      <div id="login_check" hidden className="alert alert-danger" role="alert">
        Invalid email or password.
      </div>
    </div>
  )
}
