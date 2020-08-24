import axios from "axios";
// import decodeJwt from 'jwt-decode';

export default {
    // called when the user attempts to log in
    login: ({ username, password }) =>  {
        let body = { 
            login: username,
            password: password
        }
    
        debugger;
        return axios.post('http://localhost:5000/login', body, {
          headers: {
            'Content-Type': 'application/json',
          }
        }).then(res => {
          if (res.data.error || res.status !== 200) {
            throw new Error(res.data.error);
          }
          else {
            const token = res.data;
            // const decodedToken = decodeJwt(token);
            // const role = decodedToken.identity.role;
            localStorage.setItem('token', token);
            // localStorage.setItem('role', role);
            return Promise.resolve();
          }
        });
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem('token');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        if( localStorage.getItem('token') )
        {
            return Promise.resolve()
        }
        else{
            return Promise.reject();  
        }
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};