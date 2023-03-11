import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AddMedicine from './AddMedicine';
import Bill from './Bill';
import GiveMedicine from './GiveMedicine';
import MedicalInventory from './MedicalInventory';
import PharmacistSidebar from './PharmacistSidebar';


const Pharmacist = () => {
  const navigate = useNavigate();

  const handleMedicalInventoryClick = () => {
    console.log("inventory clicked")
    navigate('/pharmacist/inventory');
  };

  const handleGiveMedicineClick = () => {
    console.log("givemedicine clicked")
    navigate('/pharmacist/givemedicine');
  };

  const handleAddMedicineClick = () => {
    console.log("givemedicine clicked")
    navigate('/pharmacist/addmedicine');
  };

  return (
    <div className='row'>
      <div className='col col-3'>
        <PharmacistSidebar
          onMedicalInventoryClick={handleMedicalInventoryClick}
          onGiveMedicineClick={handleGiveMedicineClick}
          onAddMedicineClick={handleAddMedicineClick}
        />
      </div>
      <div className='col'>
        <h2>Pharmacist Panel</h2><br/>
        <Routes>
          <Route path='/inventory' element={<MedicalInventory />} />
          <Route path='/givemedicine' element={<GiveMedicine />} />
          <Route path='/addmedicine' element={<AddMedicine />} /> 
          <Route path='/givemedicine/bill' element={<Bill />} /> 
        </Routes>
      </div>
    </div>
  );
};

export default Pharmacist;
