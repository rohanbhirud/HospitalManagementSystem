import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Login from './components/Login';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
