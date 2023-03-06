import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/AdminSidebar.css';

const AdminSidebar = ({ onAddUserClick, onViewUserClick }) => {
  const navigate = useNavigate();
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

  const handleAddUserClick = () => {
    onAddUserClick();
  };

  const handleViewUserClick = () => {
    onViewUserClick();
  };

  return (
    <div className='admin-sidebar'>
      <div className='collapsible-field'>
        <button onClick={handlePatientClick}>Patient</button>
        {!isPatientCollapsed && (
          <div className='add-view-buttons'>
            <button>Add</button>{" "}
            <button>View</button>
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
            <button>Add</button>{" "}
            <button>View</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminSidebar;
