import axios from 'axios';

export const doCompleteLogin = async (authRequest) => {
    try {
        const loginResp = await userLogin(authRequest);
        const fetchResp = await fetchUserData();
        const username = fetchResp.data.userName;
        const authority = fetchResp.data.roles[0].authority;
        const jwt = loginResp.data.token;
        localStorage.setItem("username", username);
        localStorage.setItem("authority", authority);
        localStorage.setItem("jwt", jwt);
        console.log("username: ",username,"; authority: ",authority);
        return true;
    } catch(err){
        console.log(err);
    }

}

const getToken = () => {
    return localStorage.getItem('USER_KEY');
}

export const userLogin = (authRequest) => {
    return axios({
        'method': 'POST',
        'url': `http://localhost:8080/api/v1/auth/login`,
        'data': authRequest
    })
}

export const fetchUserData = () => {
    return axios({
        method: 'GET',
        url: `http://localhost:8080/api/v1/auth/userinfo`,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}