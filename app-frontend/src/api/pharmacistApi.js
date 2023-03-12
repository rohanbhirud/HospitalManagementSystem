import axios from "axios"
import { getToken } from "./authenticationService"

export const getAllMedicine = ()=>{
    return axios({
        'method': 'GET',
        'url': `http://localhost:8080/api/v1/pharmacist/all`,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}

export const getMedicineById = (medicineId)=>{
    console.log(medicineId)
    return axios({
        method: 'GET',
        url: `http://localhost:8080/api/v1/pharmacist`,
        data: {"medicineId":medicineId},
        headers: {
            'Authorization': 'Bearer ' + getToken()
        },
    })
}

export const getMedicineByName = (medicineName)=>{
    console.log(medicineName)
    return axios({
        method: 'GET',
        url: `http://localhost:8080/api/v1/pharmacist/medicinename`,
        data: {"medicineName":medicineName},
        headers: {
            'Authorization': 'Bearer ' + getToken()
        },
    })
}

export const addMedicine = (medicine)=>{
    console.log(medicine)
    return axios({
        method: 'POST',
        url: `http://localhost:8080/api/v1/pharmacist`,
        data: medicine,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        },
    })
}

export const updateMedicine = (medicine)=>{
    console.log(medicine)
    return axios({
        method: 'PUT',
        url: `http://localhost:8080/api/v1/pharmacist`,
        data: medicine,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        },
    })
}

export const deleteMedicine = (medicineId)=>{
    console.log(medicineId)
    return axios({
        method: 'DELETE',
        url: `http://localhost:8080/api/v1/pharmacist`,
        data: {"medicineId":medicineId},
        headers: {
            'Authorization': 'Bearer ' + getToken()
        },
    })
}