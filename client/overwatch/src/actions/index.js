import axios from 'axios';
import { SET_CURRENT_USER } from './types'
import * as jwtDecode from 'jwt-decode';

export function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}


export function login(data) {
    let BASE_URL = 'http://localhost:3000'
    return dispatch => {
      return axios.post(`${BASE_URL}/api/auth/login`, data).then(res => {
        const token = res.data;
        console.log(token);
        localStorage.setItem('jwtToken', token);
        setAuthorizationToken(token);
        // dispatch(setCurrentUser(jwtDecode(token)));
        // try{
        // dispatch(setCurrentUser(jwtDecode(token)))
        // }
        // catch(e) {
        //   dispatch(setCurrentUser(token))
        //   console.log(e.message)
        // }
      });
    }
  }

  export function logout() {
    return dispatch => {
      localStorage.removeItem('jwtToken');
      setAuthorizationToken(false);
      dispatch(setCurrentUser({}));
    }
  }

  export function signup(data) {
    let BASE_URL = 'http://localhost:3000'
    return dispatch => {
      return axios.post(`${BASE_URL}/api/auth/signup`, data).then(res => {
        const token = res.data;
        console.log(token);
        localStorage.setItem('jwtToken', token);
        setAuthorizationToken(token);
        // dispatch(setCurrentUser(jwtDecode(token)));
      });
    }
  }

  export function setCurrentUser(user) {
    return {
      type: SET_CURRENT_USER,
      user
    };
  }
