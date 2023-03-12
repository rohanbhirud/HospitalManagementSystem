import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllPatients } from '../../api/receptionistApi'

const ViewPatients = () => {
  const navigate = useNavigate()
  const [patients, setPatients] = useState([])

  useEffect(() => {

    getAllPatients().then(response => {
      setPatients(response.data)
      console.log(response.data)
    }).catch(error => {
      console.log(error)
    })

  }, [])

  const handleMakeAppointment = (patient) => {
    navigate(`/receptionist/createappointment`, { state: patient })
  }

  return (
    <div>
      <h2>View Patients</h2>
      <table>
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Patient Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>In/Out Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(patient => (
            <tr key={patient.patientId}>
              <td>{patient.patientId}</td>
              <td>{patient.patientName}</td>
              <td>{patient.gender}</td>
              <td>{patient.age}</td>
              <td>{patient.inOutStatus?"In":"Out"}</td>
              <td>
                <button onClick={() => handleMakeAppointment(patient)}>Make Appointment</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ViewPatients
