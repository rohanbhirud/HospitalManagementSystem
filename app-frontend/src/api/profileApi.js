import axios from "axios"
import { getToken } from "./authenticationService"

export const getUser = (username)=>{
    console.log(username)
    return axios({
        method: 'GET',
        url: `http://localhost:8080/api/v1/user?username=${username}`,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        },
    })
}

export const getAllUsers = async()=>{
    return axios({
        'method': 'GET',
        'url': `http://localhost:8080/api/v1/user/all`,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}

export const updateUser = (user)=>{
    return axios({
        'method': 'PUT',
        'url': `http://localhost:8080/api/v1/user`,
        'data': user,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}

export const changePass = (userAndPass)=>{
    return axios({
        'method': 'PUT',
        'url': `http://localhost:8080/api/v1/user/changepass`,
        'data': userAndPass,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}

export const deleteUser = (username)=>{
    return axios({
        'method': 'DELETE',
        'url': `http://localhost:8080/api/v1/user`,
        'data': username,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}