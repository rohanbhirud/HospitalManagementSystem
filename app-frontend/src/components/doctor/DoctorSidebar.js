import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/DoctorSidebar.css'

const DoctorSidebar = ({ onPrescribePatientClick, onViewRemainingPatientsClick }) => {

  const handlePrescribePatientClick = () => {
    onPrescribePatientClick();
  }

  const handleViewRemainingPatientsClick = () => {
    onViewRemainingPatientsClick();
  };

  return (
    <div className='doctor-sidebar'>
      <div className='collapsible-field'>
        <div className='prescribe-view-buttons'>
          <button onClick={handlePrescribePatientClick}>Prescribe Patient</button><br /><br />
          <button onClick={handleViewRemainingPatientsClick}>View Remaining Patients</button>
        </div>

      </div>
    </div>
  );
};

export default DoctorSidebar;
