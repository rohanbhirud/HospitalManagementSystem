import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/PharmacistSidebar.css'

const PharmacistSidebar = ({ onMedicalInventoryClick, onGiveMedicineClick, onAddMedicineClick }) => {

  const handleMedicalInventoryClick = () => {
    onMedicalInventoryClick();
  }

  const handleGiveMedicineClick = () => {
    onGiveMedicineClick();
  };

  const handleAddMedicineClick = () => {
    onAddMedicineClick();
  };

  return (
    <div className='pharmacist-sidebar'>
      <div className='collapsible-field'>
        <div className='pharmacist-view-buttons'>
          <button onClick={handleMedicalInventoryClick}>Medical Inventory</button><br /><br />
          <button onClick={handleGiveMedicineClick}>Give Medicine</button><br /><br />
          <button onClick={handleAddMedicineClick}>Add Medicine</button>
        </div>

      </div>
    </div>
  );
};

export default PharmacistSidebar;
