import axios from "axios"
import { getToken } from "./authenticationService"


const loadPatients = ()=>{
    return axios({
        'method': 'GET',
        'url': `http://localhost:8080/api/v1/ward`,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}

export const getAllPatients=async ()=>{
    const patientResp=await loadPatients();
    return patientResp.data;
}

export const updatePatient = (patient) => {
    return axios({
        'method': 'PUT',
        'url': `http://localhost:8080/api/v1/ward`,
        'data': patient,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}