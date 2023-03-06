import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { doCompleteLogin } from '../api/authenticationService';
export default function Login() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const handleLogin = async (e) => {

    e.preventDefault();
    await doCompleteLogin(state);
    const localuser = localStorage.getItem('username');
    if (localuser != null) {
      if(localStorage.getItem('authority')==='ADMIN'){
        navigate('/admin')
      } else if (localStorage.getItem('authority')==='RECEPTIONIST') {
        navigate('/receptionist')
      } else if (localStorage.getItem('authority')==='DOCTOR') {
        navigate('/doctor')
      } else if (localStorage.getItem('authority')==='PHARMACIST') {
        navigate('/pharmacist')
      } else if (localStorage.getItem('authority')==='LABINCHARGE') {
        navigate('/labincharge')
      } else if (localStorage.getItem('authority')==='WARDINCHARGE') {
        navigate('/ward')
      } else {
        navigate('/error')
      }
    } else {
      document.getElementById("login_check").hidden = false;
    }

  };

  return (
    <div className="container mt-3" style={{ backgroundColor: '#f7f7f7', padding: "50px"}}>
      <form className="login-form" onSubmit={handleLogin} style={{ maxWidth: "500px", margin: "20px auto" }}>
        <div className='mb-3' style={{ fontSize: "25px", fontWeight: "bold" }}>
          Welcome, Please Sign In
        </div>
        <div className="form-outline mb-3">
          <input
            type="text"
            id="username"
            className="form-control"
            value={state.username}
            onChange={(e) =>
              setState({ ...state, username: e.target.value })
            }
            style={{ padding: "10px", marginBottom: "10px", borderRadius: "5px", width: "80%" }}
          />
          <label className="form-label" htmlFor="username" style={{ fontSize: "18px", fontWeight: "bold" }}>
            Username
          </label>
        </div>

        <div className="form-outline mb-3">
          <input
            type="password"
            id="password"
            className="form-control"
            value={state.password}
            onChange={(e) =>
              setState({ ...state, password: e.target.value })
            }
            style={{ padding: "10px", marginBottom: "10px", borderRadius: "5px", width: "80%" }}
          />
          <label className="form-label" htmlFor="password" style={{ fontSize: "18px", fontWeight: "bold" }}>
            Password
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block mb-3"
          style={{ backgroundColor: "#007bff", border: "none", borderRadius: "5px", padding: "10px", fontSize: "18px", fontWeight: "bold" }}
        >
          Sign in
        </button>
      </form>

      <div
        id="login_check"
        hidden
        className="alert alert-danger"
        role="alert"
        style={{ backgroundColor: "#F8CBC8",  borderRadius: "5px" }}
      >
        Invalid email or password.
      </div>
    </div>

  )
}
