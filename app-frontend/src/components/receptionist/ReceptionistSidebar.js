import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/DoctorSidebar.css'

const DoctorSidebar = ({ onCreatePatientClick, onViewPatientsClick,onCreateAppointmentClick,onViewAppointmentsClick }) => {

  const handleCreatePatientClick = () => {
    onCreatePatientClick();
  }

  const handleViewPatientsClick = () => {
    onViewPatientsClick();
  };

  const handleCreateAppointmentClick = () => {
    onCreateAppointmentClick();
  };

  const handleViewAppointmentsClick = () => {
    onViewAppointmentsClick();
  };

  return (
    <div className='doctor-sidebar'>
      <div className='collapsible-field'>
        <div className='prescribe-view-buttons'>
          <button onClick={handleCreatePatientClick}>Create Patient</button><br /><br />
          <button onClick={handleViewPatientsClick}>View Patients</button><br/><br/>
          {/* <button onClick={handleCreateAppointmentClick}>Create Appointment</button><br/><br/> */}
          <button onClick={handleViewAppointmentsClick}>View Appointments</button><br/><br/>
        </div>

      </div>
    </div>
  );
};

export default DoctorSidebar;
