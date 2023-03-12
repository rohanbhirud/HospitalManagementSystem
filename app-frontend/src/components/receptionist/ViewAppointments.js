import React, { useState, useEffect } from 'react'
import { allPatients } from '../../api/doctorApi'
import { deleteAppointment, getAllAppointments, getAllDoctors } from '../../api/receptionistApi'

const ViewAppointments = () => {
    const [appointments, setAppointments] = useState([])
    const [patients, setPatients] = useState([])
    const [doctors, setDoctors] = useState([])

    useEffect(() => {

        allPatients().then(response => {
            setPatients(response.data)
        }).catch(error => {
            console.log(error)
        })

        getAllAppointments().then(response => {
            setAppointments(response.data)
        }).catch(error => {
            console.log(error)
        })

        getAllDoctors().then(response => {
            setDoctors(response.data)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const handleDelete = (appointment) => {
        deleteAppointment(appointment.appointmentId).then(()=>console.log("appointment deleted"))
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
                        <th>Doctor Name</th>
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
                            <td>
                                {doctors.find(doctor => doctor.doctorId === appointment.doctor.doctorId)?.name}
                            </td>
                            <td>{appointment.date}</td>
                            <td>{appointment.time}</td>
                            <td>
                                <button onClick={() => handleDelete(appointment)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ViewAppointments
