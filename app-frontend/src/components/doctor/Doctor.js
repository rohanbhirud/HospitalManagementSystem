import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import DoctorSidebar from './DoctorSidebar';
import PrescribePatient from './PrescribePatient';
import ViewRemainingPatients from './ViewRemainingPatients';

const Doctor = () => {
  const navigate = useNavigate();

  const handlePrescribePatientClick = () => {
    console.log("prescribe patient clicked")
    navigate('/doctor/prescribe');
  };

  const handleViewRemainingPatientsClick = () => {
    console.log("view remaining patients clicked")
    navigate('/doctor/patients');
  };

  return (
    <div className='row'>
      <div className='col col-3'>
        <DoctorSidebar
          onPrescribePatientClick={handlePrescribePatientClick}
          onViewRemainingPatientsClick={handleViewRemainingPatientsClick}
        />
      </div>
      <div className='col'>
        <h2>Doctor Panel</h2>
        <Routes>
          <Route path='/prescribe' element={<PrescribePatient />} />
          <Route path='/patients' element={<ViewRemainingPatients />} /> 
        </Routes>
      </div>
    </div>
  );
};

export default Doctor;
