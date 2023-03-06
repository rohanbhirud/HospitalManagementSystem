import React, { useEffect, useState } from 'react';
import { updateProfile, getUser } from '../api/profileApi';
import '../css/Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [editing, setEditing] = useState(false);
  const [updatedProfile, setUpdatedProfile] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    age: "",
    address: ""
  });

  useEffect(() => {
    getUser(localStorage.getItem('username')).then((response) => {
      setProfile(response.data);
      setUpdatedProfile(response.data)
    });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedProfile((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleUpdate = () => {
    const { username, firstname, lastname, email, age, address } = updatedProfile;
    const updatedUser = {
      username,
      firstname,
      lastname,
      email,
      age,
      address
    };
    updateProfile(updatedUser).then(() => {
      setProfile(updatedProfile);
      setEditing(false);
    }).catch((error) => {
      console.log(error);
    });
  };

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <div className='row'>
            <div className='col'>
              <h3>Profile</h3>
            </div>
            <div className='col'>
              {editing ? (
                <button onClick={handleUpdate} className="btn btn-primary">Confirm Changes</button>
              ) : (
                <button onClick={() => setEditing(true)} className="btn btn-primary">Update Profile</button>
              )}
            </div>
          </div>
        </div>
        <div className="card-body">
          <form>
            <div className="row mb-3">
              <div className="col-sm-4">
                <strong>Username:</strong>
              </div>
              <div className="col-sm-8">
                {profile.username}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-4">
                <strong>First Name:</strong>
              </div>
              <div className="col-sm-8">
                {editing ? (
                  <input type="text" className="form-control" name="firstname" value={updatedProfile.firstname} onChange={handleInputChange} />
                ) : (
                  profile.firstname
                )}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-4">
                <strong>Last Name:</strong>
              </div>
              <div className="col-sm-8">
                {editing ? (
                  <input type="text" className="form-control" name="lastname" value={updatedProfile.lastname} onChange={handleInputChange} />
                ) : (
                  profile.lastname
                )}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-4">
                <strong>Email:</strong>
              </div>
              <div className="col-sm-8">
                {editing ? (
                  <input type="email" className="form-control" name="email" value={updatedProfile.email} onChange={handleInputChange} />
                ) : (
                  profile.email
                )}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-4">
                <strong>Age:</strong>
              </div>
              <div className="col-sm-8">
                {editing ? (
                  <input type="number" className="form-control" name="age" value={updatedProfile.age} onChange={handleInputChange} />
                ) : (
                  profile.age
                )}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-4">
                <strong>Address:</strong>
              </div>
              <div className="col-sm-8">
                {editing ? (
                  <input type="text" className="form-control" name="address" value={updatedProfile.address} onChange={handleInputChange} />
                ) : (
                  profile.address
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;