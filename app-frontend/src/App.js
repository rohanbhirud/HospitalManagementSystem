import './App.css';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Login from './components/Login';
import Navbar from './components/Navbar';
import ErrorPage from './components/ErrorPage';
import Ward from './components/ward/Ward';
import Admin from './components/admin/Admin';
import Profile from './components/Profile';
import ChangePass from './components/ChangePass';
import Doctor from './components/doctor/Doctor';
import Pharmacist from './components/pharmacist/Pharmacist';
import LabIncharge from './components/labincharge/LabIncharge';
import Receptionist from './components/receptionist/Receptionist';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ward" element={<Ward />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/doctor/*" element={<Doctor />} />
        <Route path="/receptionist/*" element={<Receptionist />} />
        <Route path="/pharmacist/*" element={<Pharmacist />} />
        <Route path="/labincharge/*" element={<LabIncharge />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/changepass" element={<ChangePass/>} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
export default App;
