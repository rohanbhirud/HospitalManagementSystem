import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { createAppointment } from '../../api/receptionistApi';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CreateAppointment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const patientId = location.state.patientId;
  const [doctorId,setDoctorId]=useState('');
  const [date,setDate]=useState('');
  const [time,setTime]=useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    createAppointment({
        "patientId":patientId,
        "doctorId":doctorId,
        "date":date,
        "time":time,
        "appointmentStatus":false
    })
    .catch(err=>console.log(err));
    navigate(-1);
  }

  return (
    <div className="container">
      <h2>Create Appointment for {location.state.patientName}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="doctorId">
          <Form.Label>Doctor ID:</Form.Label>
          <Form.Control type="text" value={doctorId} onChange={(e) => setDoctorId(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="date">
          <Form.Label>Date:</Form.Label>
          <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="time">
          <Form.Label>Time:</Form.Label>
          <Form.Control type="time" value={time} onChange={(e) => {setTime(e.target.value);console.log(time)}}/>
        </Form.Group><br/>

        <Button variant="primary" type="submit">Create</Button>
      </Form>
    </div>
  );
}

export default CreateAppointment;
