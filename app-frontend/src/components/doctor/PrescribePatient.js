import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { prescribePatient, changeAppointmentStatus } from '../../api/doctorApi';

const Prescribe = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [prescription, setPrescription] = useState('');
  const [diagnosis, setDiagnosis] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await prescribePatient({
        doctorId: localStorage.getItem('userid'),
        patientId: location.state.patient.patientId,
        prescription: prescription,
        diagnosis: diagnosis
      });

      
      await changeAppointmentStatus(location.state.appointmentId, true);

     
      navigate(-1);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
    <h1 className="my-5">Prescribe Patient</h1>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="prescription" className="form-label">Prescription:</label>
        <textarea
          className="form-control"
          id="prescription"
          value={prescription}
          onChange={(e) => setPrescription(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="diagnosis" className="form-label">Diagnosis:</label>
        <textarea
          className="form-control"
          id="diagnosis"
          value={diagnosis}
          onChange={(e) => setDiagnosis(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Prescribe</button>
    </form>
  </div>
  );
};

export default Prescribe;
