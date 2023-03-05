import React, { useState } from 'react';
import '../../css/AdminSidebar.css';

const AdminSidebar = () => {
  const [isPatientCollapsed, setIsPatientCollapsed] = useState(true);
  const [isUserCollapsed, setIsUserCollapsed] = useState(true);
  const [isAppointmentCollapsed, setIsAppointmentCollapsed] = useState(true);

  const handlePatientClick = () => {
    setIsPatientCollapsed(!isPatientCollapsed);
  };

  const handleUserClick = () => {
    setIsUserCollapsed(!isUserCollapsed);
  };

  const handleAppointmentClick = () => {
    setIsAppointmentCollapsed(!isAppointmentCollapsed);
  };

  return (
    <div className='admin-sidebar'>
      <div className='collapsible-field'>
        <button onClick={handlePatientClick}>Patient</button>
        {!isPatientCollapsed && (
          <div className='add-view-buttons'>
            <button>Add</button>
            <button>View</button>
          </div>
        )}
      </div>
      <div className='collapsible-field'>
        <button onClick={handleUserClick}>User</button>
        {!isUserCollapsed && (
          <div className='add-view-buttons'>
            <button>Add</button>
            <button>View</button>
          </div>
        )}
      </div>
      <div className='collapsible-field'>
        <button onClick={handleAppointmentClick}>Appointments</button>
        {!isAppointmentCollapsed && (
          <div className='add-view-buttons'>
            <button>Add</button>
            <button>View</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminSidebar;
