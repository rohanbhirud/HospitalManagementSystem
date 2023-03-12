import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/AdminSidebar.css';

const AdminSidebar = ({ onAddUserClick, onViewUserClick, onAddPatientClick, onViewPatientClick,onAddAppointmentClick,onViewAppointmentClick,onViewPrescriptionClick,onAddMedicineClick,onViewMedicineClick}) => {
  const navigate = useNavigate();
  const [isPatientCollapsed, setIsPatientCollapsed] = useState(true);
  const [isUserCollapsed, setIsUserCollapsed] = useState(true);
  const [isAppointmentCollapsed, setIsAppointmentCollapsed] = useState(true);
  const [isDoctorCollapsed, setIsDoctorCollapsed] = useState(true);
  const [isPharmacistCollapsed, setIsPharmacistCollapsed] = useState(true);

  const handlePatientClick = () => {
    setIsPatientCollapsed(!isPatientCollapsed);
  };

  const handleUserClick = () => {
    setIsUserCollapsed(!isUserCollapsed);
  };

  const handleAppointmentClick = () => {
    setIsAppointmentCollapsed(!isAppointmentCollapsed);
  };

  const handleDoctorClick = () => {
    setIsDoctorCollapsed(!isDoctorCollapsed);
  };

  const handlePharmacistClick = () => {
    setIsPharmacistCollapsed(!isPharmacistCollapsed);
  };

  const handleAddUserClick = () => {
    onAddUserClick();
  };

  const handleViewUserClick = () => {
    onViewUserClick();
  };
///////////
  const handleAddPatientClick = () => {
    onAddPatientClick();
  };

  const handleViewPatientClick = () => {
    onViewPatientClick();
  };

  const handleAddAppointmentClick = () => {
    onAddAppointmentClick();
  };

  const handleViewAppointmentClick = () => {
    onViewAppointmentClick();
  };

  const handleViewPrescriptionClick = () => {
    onViewPrescriptionClick();
  };

  const handleAddMedicineClick = () => {
    onAddMedicineClick();
  };

  const handleViewMedicineClick = () => {
    onViewMedicineClick();
  };

  return (
    <div className='admin-sidebar'>
      <div className='collapsible-field'>
        <button onClick={handlePatientClick}>Patient</button>
        {!isPatientCollapsed && (
          <div className='add-view-buttons'>
            <button onClick={handleAddPatientClick}>Add</button>{" "}
            <button onClick={handleViewPatientClick}>View</button>
          </div>
        )}
      </div>
      <div className='collapsible-field'>
        <button onClick={handleUserClick}>User</button>
        {!isUserCollapsed && (
          <div className='add-view-buttons'>
            <button onClick={handleAddUserClick}>Add</button>{" "}
            <button onClick={handleViewUserClick}>View</button>
          </div>
        )}
      </div>
      <div className='collapsible-field'>
        <button onClick={handleAppointmentClick}>Appointments</button>
        {!isAppointmentCollapsed && (
          <div className='add-view-buttons'>
            {/* <button onClick={handleAddAppointmentClick}>Add</button>{" "} */}
            <button onClick={handleViewAppointmentClick}>View</button>
          </div>
        )}
      </div>
      <div className='collapsible-field'>
        <button onClick={handleDoctorClick}>Doctor</button>
        {!isDoctorCollapsed && (
          <div className='add-view-buttons'>
            <button onClick={handleViewPrescriptionClick}>Prescriptions</button>
          </div>
        )}
      </div>
      <div className='collapsible-field'>
        <button onClick={handlePharmacistClick}>Pharmacist</button>
        {!isPharmacistCollapsed && (
          <div className='add-view-buttons'>
            <button onClick={handleAddMedicineClick}>Add Medicine</button>{" "}
            <button onClick={handleViewMedicineClick}>View Medicine</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminSidebar;
