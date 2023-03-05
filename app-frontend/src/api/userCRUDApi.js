export const addUser = (userData) =>{

    return axios({
        method: 'POST',
        url: `http://localhost:8080/api/v1/user`,
        'data': userData,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }        
    })

}

export const getAllUsers = ()=>{

    return axios({
        method: 'GET',
        url: `http://localhost:8080/api/v1/user`,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}

export const updateUser = (userData) =>{

    return axios({
        method: 'PUT',
        url: `http://localhost:8080/api/v1/user`,
        'data': userData,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }        
    })
}

export const deleteUser = (userData) =>{

    return axios({
        method: 'DELETE',
        url: `http://localhost:8080/api/v1/user`,
        'data': userData,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }        
    })
}