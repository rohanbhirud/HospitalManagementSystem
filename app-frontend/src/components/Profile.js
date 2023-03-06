import React, { useEffect, useState } from 'react';
import { getUser } from '../api/profileApi';

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getUser(localStorage.getItem('username')).then((response) => {
      console.log(response)
      setProfile(response.data);
    });
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container mt-5'>
      <h1>Profile</h1>
      <ul>
        <li>User ID: {profile.userId}</li>
        <li>Username: {profile.username}</li>
        <li>First Name: {profile.firstname}</li>
        <li>Last Name: {profile.lastname}</li>
        <li>Email: {profile.email}</li>
        <li>Age: {profile.age}</li>
        {/* <li>Address: {profile.address}</li>
        <li>Enabled: {profile.enabled ? 'Yes' : 'No'}</li>
        <li>Account Non-Locked: {profile.accountNonLocked ? 'Yes' : 'No'}</li>
        <li>Credentials Non-Expired: {profile.credentialsNonExpired ? 'Yes' : 'No'}</li>
        <li>Account Non-Expired: {profile.accountNonExpired ? 'Yes' : 'No'}</li>
        <li>Authorities: {profile.authorities.map((auth) => auth.authority).join(', ')}</li> */}
      </ul>
    </div>
  );
};

export default Profile;
