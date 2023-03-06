import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import AddUser from './user/AddUser';
import EditUser from './user/EditUser';
import ViewUsers from './user/ViewUsers';

const Admin = () => {
  const navigate = useNavigate();

  const handleAddUserClick = () => {
    console.log("add user clicked")
    navigate('/admin/user/add');
  };

  const handleViewUserClick = () => {
    console.log("view user clicked")
    navigate('/admin/users');
  };

  return (
    <div className='row'>
      <div className='col col-3'>
        <AdminSidebar
          onAddUserClick={handleAddUserClick}
          onViewUserClick={handleViewUserClick}
        />
      </div>
      <div className='col'>
        <h2>Admin Panel</h2>
        <Routes>
          <Route path='/users' element={<ViewUsers />} />
          <Route path='/user/add' element={<AddUser />} />
          <Route path='/user/edit/:username' element={<EditUser />} />   
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
