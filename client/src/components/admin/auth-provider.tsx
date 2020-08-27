import axios from "axios";
// import decodeJwt from 'jwt-decode';

export default {
  login: ({ username, password }) =>  {
    let body = { 
      login: username,
      password: password
    }
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
        localStorage.setItem('token', token);
        return Promise.resolve();
      }
    });
  },

  logout: () => {
    localStorage.removeItem('token');
    return Promise.resolve();
  },

  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('token');
      return Promise.reject();
    }
    return Promise.resolve();
  },

  checkAuth: () => {
    if( localStorage.getItem('token') )
    {
      return Promise.resolve()
    }
    else{
      return Promise.reject();  
    }
  },

  getPermissions: () => Promise.resolve(),
};