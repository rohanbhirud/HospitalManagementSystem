import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Navbar';
import { useEffect, useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(()=>{
    const username = localStorage.getItem('username');
    if (username) {
      setIsLoggedIn(true);
    } else{
      setIsLoggedIn(false);
    }
  },[])
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* {isLoggedIn ? (
          <Route path="/home">
            <Home />
          </Route>
        ) : (
          <Navigate to="/login" />
        )} */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
