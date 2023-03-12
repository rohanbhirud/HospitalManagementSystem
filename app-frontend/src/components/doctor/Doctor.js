import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import DoctorSidebar from './DoctorSidebar';
import PastPrescriptions from './PastPrescriptions';
import PrescribePatient from './PrescribePatient';
import ViewAppointedPatients from './ViewAppointedPatients';

const Doctor = () => {
  const navigate = useNavigate();

  const handlePastPrescriptionClick = () => {
    console.log("prescribe patient clicked")
    navigate('/doctor/pastprescriptions');
  };

  const handleViewRemainingPatientsClick = () => {
    console.log("view remaining patients clicked")
    navigate('/doctor/patients');
  };

  return (
    <div className='row'>
      <div className='col col-3'>
        <DoctorSidebar
          onPrescribePatientClick={handlePastPrescriptionClick}
          onViewRemainingPatientsClick={handleViewRemainingPatientsClick}
        />
      </div>
      <div className='col'>
        <h2>Doctor Panel</h2>
        <Routes>
          <Route path='/prescribe' element={<PrescribePatient />} />
          <Route path='/patients' element={<ViewAppointedPatients />} /> 
          <Route path='/pastprescriptions' element={<PastPrescriptions />} />
        </Routes>
      </div>
    </div>
  );
};

export default Doctor;
