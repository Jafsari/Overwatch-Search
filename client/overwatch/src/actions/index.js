import axios from 'axios';
import { SET_CURRENT_USER, SET_SEARCH_USER,SET_CURRENT_NAME, SET_CURRENT_TOKEN, SET_SEARCH_FAILURE, SET_USER_INVITE, SET_USER_INVITE_LOADING, SET_USER_INVITE_FAILURE } from './types'
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
      return dispatch(this.props.history.push('playerinfo'))
    }).catch(e => {
      console.log(e)
      alert('There was a problem with your request')
      return dispatch(SET_SEARCH_FAILURE)
    })
    }
  }

  export function invite(data){
    let token = localStorage.getItem('jwtToken')
    token = JSON.parse(token)
    let BASE_URL = 'http://localhost:3000/api/mail'
    return dispatch => {
      return axios.post(BASE_URL,data,{headers:{"Authorization" : `Bearer ${token}`}}).then ( res => {
        const response = res.data;
        console.log(response);
        return dispatch(setUserInvite(response))
      }).catch(e => {
        alert('There was a problem with your request')
        return dispatch(setUserInviteFailure(false))
      })
    }
  }

  export function setCurrentToken(token){
    return{
      type:SET_CURRENT_TOKEN,
      token
    };
  }

  export function setUserInviteFailure(info){
    return{
      type:SET_USER_INVITE_FAILURE,
      info
    }
  }

  export function setUserInviteLoading(info){
    return{
      type:SET_USER_INVITE_LOADING,
      info
    };
  }

  export function setUserInvite(response){
    return{
      type:SET_USER_INVITE,
      response
    };
  }

  export function SET_SEARCH_FALIURE(information){
    return{
      type:SET_SEARCH_FAILURE,
      information
    }
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


