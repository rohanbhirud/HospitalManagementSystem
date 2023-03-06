import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../../../api/profileApi';

const AddUser = () => {
  const history = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    authority: '',
    firstname: '',
    lastname: '',
    email: '',
    age: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await addUser(formData);
      console.log("User Added: ",res);
      history(-1);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='container'>
      <h1 className='mb-4'>Add User</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Username</label>
          <input type='text' name='username' value={formData.username} onChange={handleChange} className='form-control' required />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input type='password' name='password' value={formData.password} onChange={handleChange} className='form-control' required />
        </div>
        <div className='form-group'>
          <label>Authority</label>
          <select name='authority' value={formData.authority} onChange={handleChange} className='form-control' required>
            <option value=''>Select Authority</option>
            <option value='ADMIN'>Admin</option>
            <option value='DOCTOR'>Doctor</option>
            <option value='LABINCHARGE'>Lab Incharge</option>
            <option value='PHARMACIST'>Pharmacist</option>
            <option value='RECEPTIONIST'>Receptionist</option>
            <option value='WARDINCHARGE'>Ward Incharge</option>
          </select>
        </div>
        <div className='form-group'>
          <label>First Name</label>
          <input type='text' name='firstname' value={formData.firstname} onChange={handleChange} className='form-control' required />
        </div>
        <div className='form-group'>
          <label>Last Name</label>
          <input type='text' name='lastname' value={formData.lastname} onChange={handleChange} className='form-control' required />
        </div>
        <div className='form-group'>
          <label>Email</label>
          <input type='email' name='email' value={formData.email} onChange={handleChange} className='form-control' required />
        </div>
        <div className='form-group'>
          <label>Age</label>
          <input type='number' name='age' value={formData.age} onChange={handleChange} className='form-control' required />
        </div>
        <div className='form-group'>
          <label>Address</label>
          <textarea name='address' value={formData.address} onChange={handleChange} className='form-control' required />
        </div>
        <button type='submit' className='btn btn-primary'>Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
