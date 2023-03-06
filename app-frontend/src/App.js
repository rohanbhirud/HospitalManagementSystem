import './App.css';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Ward from './components/ward/Ward';
import Admin from './components/admin/Admin';
import Profile from './components/Profile';
import ChangePass from './components/ChangePass';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/ward" element={<Ward />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/changepass" element={<ChangePass/>} />
      </Routes>
    </>
  );
}
export default App;
