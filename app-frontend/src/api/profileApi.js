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

export const updateProfile = (user)=>{
    return axios({
        'method': 'PUT',
        'url': `http://localhost:8080/api/v1/user/profile`,
        'data': {
            "userId":null,
            "username":localStorage.getItem('username'),
            "password":"",
            "firstname":user.firstname,
            "lastname":user.lastname,
            "authority":"",
            "age":user.age,
            "address":user.address
        },
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}

export const addUser = (user)=>{
    return axios({
        'method': 'POST',
        'url': `http://localhost:8080/api/v1/user`,
        'data': {
            "userId":null,
            "username":user.username,
            "password":user.password,
            "firstname":user.firstname,
            "lastname":user.lastname,
            "authority":user.authority,
            "age":user.age,
            "address":user.address
        },
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}

export const updateUser = (user)=>{
    return axios({
        'method': 'PUT',
        'url': `http://localhost:8080/api/v1/user`,
        'data': {
            "userId":null,
            "username":user.username,
            "password":"",
            "firstname":user.firstname,
            "lastname":user.lastname,
            "authority":user.authority,
            "age":user.age,
            "address":user.address
        },
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}

export const changePassword = (userAndPass)=>{
    return axios({
        'method': 'POST',
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