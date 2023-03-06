import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { changePassword } from '../api/profileApi';
import Error from '../components/ErrorPage';

const ChangePassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await changePassword({username: localStorage.getItem('username'), password: password});
      navigate('/profile');
    } catch (err) {
      setError('Error changing password');
    }
  };

  useEffect(() => {
    setError('');
  }, [password, confirmPassword]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Change Password</h2>
          <form onSubmit={handleSubmit}>
            {error && <Error message={error} />}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">New Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
