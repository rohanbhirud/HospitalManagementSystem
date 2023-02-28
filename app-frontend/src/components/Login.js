import React, { Component } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();

  const [state, setState] = React.useState({
    username: '',
    password: '',
    isValid: false
  });

  const checkLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/login', {
        username: state.username,
        password: state.password
      });
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(await checkLogin()){
      navigate('/home', { state: { username: state.username } })
    }
  }

  return (
    <div className='container mt-5'>
      <form onSubmit={handleSubmit}>
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
