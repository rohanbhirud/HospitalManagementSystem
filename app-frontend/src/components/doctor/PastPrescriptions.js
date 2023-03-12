import React, { useEffect, useState } from 'react'
import { getAllPrescriptions } from '../../api/doctorApi'
import { Table } from 'react-bootstrap'

const PastPrescriptions = () => {
  const [prescriptions, setPrescriptions] = useState([])

  useEffect(() => {
    async function fetchPrescriptions() {
      try {
        const response = await getAllPrescriptions()
        setPrescriptions(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchPrescriptions()
  }, [])

  return (
    <div>
      <h1>Past Prescriptions</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Prescription ID</th>
            <th>Patient ID</th>
            <th>Doctor ID</th>
            <th>Prescription</th>
            <th>Diagnosis</th>
          </tr>
        </thead>
        <tbody>
          {prescriptions.map((prescription) => (
            <tr key={prescription.prescriptionId}>
              <td>{prescription.prescriptionId}</td>
              <td>{prescription.patient.patientId}</td>
              <td>{prescription.doctor.doctorId}</td>
              <td>{prescription.prescription}</td>
              <td>{prescription.diagnosis}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default PastPrescriptions
