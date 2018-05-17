import axios from 'axios';
import { LOG_IN , SIGN_UP } from './types'

export function login(data) {
    let BASE_URL = 'http://localhost:3000'
    return dispatch => {
      return axios.post(`${BASE_URL}/api/auth/login`, data).then(res => {
        const token = res.data;
        console.log(token);
        // localStorage.setItem('jwtToken', token);
        // setAuthorizationToken(token);
        // dispatch(setCurrentUser(jwtDecode(token)));
      });
    }
  }

