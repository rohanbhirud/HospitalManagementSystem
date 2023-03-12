import React, { useState } from 'react';
import '../../css/LabInchargeSidebar.css'

const LabInchargeSidebar = ({ onUploadReportClick, onReportByIdClick, onAllReportClick }) => {

  const handleUploadReportClick = () => {
    onUploadReportClick();
  }

  const handleReportByIdClick = () => {
    onReportByIdClick();
  };

  const handleAllReportClick = () => {
    onAllReportClick();
  };

  return (
    <div className='lab-sidebar'>
      <div className='collapsible-field'>
        <div className='lab-view-buttons'>
          <button onClick={handleUploadReportClick}>Upload Report</button><br /><br />
          <button onClick={handleReportByIdClick}>Report By Id</button><br /><br />
          <button onClick={handleAllReportClick}>All Reports</button>
        </div>

      </div>
    </div>
  );
};

export default LabInchargeSidebar;
