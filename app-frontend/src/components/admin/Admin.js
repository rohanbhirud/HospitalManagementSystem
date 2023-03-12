import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import AddUser from './user/AddUser';
import EditUser from './user/EditUser';
import ViewUsers from './user/ViewUsers';
import CreatePatient from '../receptionist/CreatePatient';
import ViewPatients from '../receptionist/ViewPatient';
import PastPrescriptions from '../doctor/PastPrescriptions';
import AddMedicine from '../pharmacist/AddMedicine';
import MedicalInventory from '../pharmacist/MedicalInventory';
import CreateAppointment from '../receptionist/CreateAppointment';
import ViewAppointments from '../receptionist/ViewAppointments';

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

  const handleAddPatientClick = () => {
    navigate('/admin/addpatient')
  };

  const handleViewPatientClick = () => {
    navigate('/admin/viewpatient')
  };

  const handleAddAppointmentClick = () => {
    navigate('/admin/addappointment')
  };

  const handleViewAppointmentClick = () => {
    navigate('/admin/viewappointment')
  };

  const handleViewPrescriptionClick = () => {
    navigate('/admin/viewprescriptions')
  };

  const handleAddMedicineClick = () => {
    navigate('/admin/addmedicine')
  };

  const handleViewMedicineClick = () => {
    navigate('/admin/viewmedicine')
  };

  return (
    <div className='row'>
      <div className='col col-3'>
        <AdminSidebar
          onAddUserClick={handleAddUserClick}
          onViewUserClick={handleViewUserClick}
          onAddPatientClick={handleAddPatientClick} 
          onViewPatientClick={handleViewPatientClick}
          onAddAppointmentClick={handleAddAppointmentClick}
          onViewAppointmentClick={handleViewAppointmentClick}
          onViewPrescriptionClick={handleViewPrescriptionClick}
          onAddMedicineClick={handleAddMedicineClick}
          onViewMedicineClick={handleViewMedicineClick}
        />
      </div>
      <div className='col'>
        <h2>Admin Panel</h2>
        <Routes>
          <Route path='/users' element={<ViewUsers />} />
          <Route path='/user/add' element={<AddUser />} />
          <Route path='/user/edit/:username' element={<EditUser />} />
          <Route path='/addpatient' element={<CreatePatient />} />
          <Route path='/viewpatient' element={<ViewPatients />} />
          <Route path='/addappointment' element={<CreateAppointment />} />   
          <Route path='/viewappointment' element={<ViewAppointments />} />
          <Route path='/viewprescriptions' element={<PastPrescriptions />} />
          <Route path='/addmedicine' element={<AddMedicine />} />
          <Route path='/viewmedicine' element={<MedicalInventory />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
