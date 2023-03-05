import React from 'react'


const Home = () => {

  const user = localStorage.getItem('username');

  return (
    <div>Home {user}</div>
  )
}

export default Home