import axios from 'axios';

export const doCompleteLogin = async (authRequest) => {
    try {
        const loginResp = await userLogin(authRequest);
        const jwt = loginResp.data.token;
        localStorage.setItem("jwt", jwt);
        //console.log(jwt);

        const fetchResp = await fetchUserData();
        const username = fetchResp.data.username;
        const authority = fetchResp.data.roles[0].authority;
        const userid = fetchResp.data.userid;
        localStorage.setItem("username", username);
        localStorage.setItem("userid", userid);
        localStorage.setItem("authority", authority);
        //console.log(fetchResp.data);
    } catch(err){
        console.log(err);
        localStorage.clear();
    }

}

export const getToken = () => {
    return localStorage.getItem('jwt');
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