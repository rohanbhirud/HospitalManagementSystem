import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { allPatients, getAppointmentsForDoctor } from '../../api/doctorApi'

const ViewAppointedPatients = () => {
  const navigate = useNavigate()
  const [appointments, setAppointments] = useState([])
  const [patients, setPatients] = useState([])

  useEffect(() => {
    // Load all patients
    allPatients().then(response => {
      setPatients(response.data)
    }).catch(error => {
      console.log(error)
    })

    // Load appointments for doctor
    getAppointmentsForDoctor().then(response => {
      setAppointments(response.data)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  const handlePrescribe = (appointment) => {
    navigate(`/doctor/prescribe`, { state: appointment })
  }

  return (
    <div>
      <h2>View Appointed Patients</h2>
      <table>
        <thead>
          <tr>
            <th>Appointment ID</th>
            <th>Patient ID</th>
            <th>Patient Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => (
            <tr key={appointment.appointmentId}>
              <td>{appointment.appointmentId}</td>
              <td>{appointment.patient.patientId}</td>
              <td>
                {patients.find(patient => patient.patientId === appointment.patient.patientId)?.patientName}
              </td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>
                <button onClick={() => handlePrescribe(appointment)}>Prescribe</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ViewAppointedPatients
