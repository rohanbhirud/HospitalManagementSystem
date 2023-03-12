import axios from "axios"
import { getToken } from "./authenticationService"

export const getAppointmentsForDoctor = ()=>{
    const doctorId=localStorage.getItem('userid')
    return axios({
        'method': 'GET',
        'url': `http://localhost:8080/api/v1/appointment/${doctorId}/false`,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}

export const allPatients = ()=>{
    return axios({
        'method': 'GET',
        'url': `http://localhost:8080/api/v1/ward`,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}

export const prescribePatient =(data)=>{
    return axios({
        'method': 'POST',
        'url': `http://localhost:8080/api/v1/doctor`,
        'data':{
            "prescriptionId":null,
            "doctor":{
                "doctorId":data.doctorId
            },
            "patient":{
                "patientId":data.patientId
            },
            "prescription":data.prescription,
            "diagnosis":data.diagnosis
        },
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}

export const changeAppointmentStatus=(appointmentId,status)=>{
    return axios({
        'method': 'PUT',
        'url': `http://localhost:8080/api/v1/appointment/change/${appointmentId}/${status}`,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}

export const getAllPrescriptions=()=>{
    return axios({
        'method': 'GET',
        'url': `http://localhost:8080/api/v1/doctor`,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}