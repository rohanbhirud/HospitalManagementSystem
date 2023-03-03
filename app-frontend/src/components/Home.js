import React from 'react'

const Home = () => {
    const username = localStorage.getItem('username');
  return (
    <div>Hello, {username}</div>
  )
}

export default Home