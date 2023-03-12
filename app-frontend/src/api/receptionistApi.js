import axios from "axios"
import { getToken } from "./authenticationService"

export const getPatientDetails = () => {
    return axios({
        'method': 'GET',
        'url': `http://localhost:8080/api/v1/receptionist`,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}

export const createPatient = (patient) => {
    console.log(patient)
    return axios({
        method: 'POST',
        url: 'http://localhost:8080/api/v1/receptionist',
        data: patient,
        headers:
        {
            'Authorization': 'Bearer ' + getToken()

        },

    })
}

export const updatePatientDetails = (patientData) => {
    return axios({
        method: 'PUT',
        url: 'http://localhost:8080/api/v1/receptionist',
        data: patientData,
        headers: {
            'Authorization': 'Bearer ' + getToken()

        },
    })
}

export const deletePatientDetails = (patientId) => {
    return axios({
        method: 'DELETE',
        url: `http://localhost:8080/api/v1/receptionist/${patientId}`,
        data: { "patientId": patientId },
        headers: { 'Authorization': 'Bearer ' + getToken() },
    })
}

export const getAllAppointments = () => {
    return axios({
        method: 'GET',
        url: 'http://localhost:8080/api/v1/appointment',
        headers: { 'Authorization': 'Bearer ' + getToken() },
    })
}

export const getAllDoctors = () => {
    return axios({
        method: 'GET',
        url: 'http://localhost:8080/api/v1/doctor/all',
        headers: { 'Authorization': 'Bearer ' + getToken() },
    })
}

export const deleteAppointment = (appointmentId) => {
    return axios({
        method: 'DELETE',
        url: `http://localhost:8080/api/v1/appointment/${appointmentId}`,
        headers: { 'Authorization': 'Bearer ' + getToken() },
    })
}

export const createAppointment = (appointment) => {
    return axios({
        method: 'POST',
        url: 'http://localhost:8080/api/v1/appointment',
        data: appointment,
        headers:
        {
            'Authorization': 'Bearer ' + getToken()
        },
    })
}

export const getAllPatients = () => {
    return axios({
        method: 'GET',
        url: 'http://localhost:8080/api/v1/receptionist',
        headers: { 'Authorization': 'Bearer ' + getToken() },
    })
}
