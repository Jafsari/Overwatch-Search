import axios from 'axios';
import { SET_CURRENT_USER, SET_SEARCH_USER,SET_CURRENT_NAME, SET_CURRENT_TOKEN } from './types'
import jwtDecode from 'jwt-decode';

export function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}


export function login(data,second) {
  let BASE_URL = 'http://localhost:3000'
  return dispatch => {
    return axios.post(`${BASE_URL}/api/auth/login`, data).then(res => {
      const token = JSON.stringify(res.data.token);
      const decode = jwtDecode(token)
      console.log(decode)
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(second))
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
      localStorage.removeItem('state');
      setAuthorizationToken(false);
      dispatch(setCurrentUser({}));
    }
  }



  export function signup(data) {
    let BASE_URL = 'http://localhost:3000'
    return dispatch => {
      return axios.post(`${BASE_URL}/api/auth/signup`, data).then(res => {
        const token = JSON.stringify(res.data.token);
        const decode = jwtDecode(token)
        console.log(token);
        localStorage.setItem('jwtToken', token);
        // dispatch(setCurrentUser(jwtDecode(token)));
      });
    }
  }

  export function search(data){
    var answer = localStorage.getItem('jwtToken')
    answer = JSON.parse(answer)
    console.log(answer)
    let BASE_URL = 'http://localhost:3000/api/users/search'
    return dispatch => {
    return axios.post(BASE_URL,data, { headers: {"Authorization" : `Bearer ${answer}`} }).then(res => {
      const information = res.data;
      console.log(information);
      return dispatch(setSearchUser(information))
    })
    }
  }

  export function setCurrentToken(token){
    return{
      type:SET_CURRENT_TOKEN,
      token
    };
  }

  export function setCurrentUser(user) {
    return {
      type: SET_CURRENT_USER,
      user
    };
  }
  
  export function setCurrentName(user) {
    return {
      type: SET_CURRENT_NAME,
      user
    };
  }

  export function setSearchUser(information){
    return{
      type:SET_SEARCH_USER,
      information
    }
  }


