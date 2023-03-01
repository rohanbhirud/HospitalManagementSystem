import axios from 'axios';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const jwtToken = location.state?.jwtToken;

  async function getUserInfo(jwtToken) {
    await axios.get('http://localhost:8080/api/v1/auth/userinfo', {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
      .then(response => {
        //console.log(response.data)
        return response.data;
      })
      .catch(error => console.error(error));
  }
  var userInfo = getUserInfo(jwtToken);
  console.log(userInfo);
  return (
    <div>Welcome, {}</div>
  )
}

export default Home