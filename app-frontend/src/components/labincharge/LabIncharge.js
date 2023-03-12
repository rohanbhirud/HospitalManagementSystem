import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AllReport from './AllReport';
import LabInchargeSidebar from './LabInchargeSidebar';
import ReportById from './ReportById';
import UploadReport from './UploadReport';


const LabIncharge = () => {
  const navigate = useNavigate();

  const handleUploadReportClick = () => {
    console.log("inventory clicked")
    navigate('/labincharge/uploadreport');
  };

  const handleReportByIdClick = () => {
    console.log("givemedicine clicked")
    navigate('/labincharge/reportbypid');
  };

  const handleAllReportClick = () => {
    console.log("givemedicine clicked")
    navigate('/labincharge/allreport');
  };

  return (
    <div className='row'>
      <div className='col col-3'>
        <LabInchargeSidebar
          onUploadReportClick={handleUploadReportClick}
          onReportByIdClick={handleReportByIdClick}
          onAllReportClick={handleAllReportClick}
        />
      </div>
      <div className='col'>
        <h2>Pharmacist Panel</h2><br/>
        <Routes>
          <Route path='/uploadreport' element={<UploadReport />} />
          <Route path='/reportbypid' element={<ReportById />} />
          <Route path='/allreport' element={<AllReport />} />
        </Routes>
      </div>
    </div>
  );
};

export default LabIncharge;
